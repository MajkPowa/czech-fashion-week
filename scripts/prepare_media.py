"""Build a compact, provenance-preserving web selection from the local CFW archive.

Originals stay untouched. The generated public directory contains only resized,
orientation-correct WebP images and H.264 web videos. Re-run to resume exports.
"""
from __future__ import annotations

import concurrent.futures as futures
import csv
import hashlib
import io
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import unicodedata

from PIL import Image, ImageCms, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / 'CFW-strategie' / 'media'
OUTPUT = ROOT / 'public' / 'media'
DATA = ROOT / 'src' / 'data'
OUTPUT.mkdir(parents=True, exist_ok=True)
DATA.mkdir(parents=True, exist_ok=True)

HERO_NAMES = {
    'ZLY_8170.jpg': 'hero',
    'ZLY_8251.jpg': 'hero-mobile',
    'ZLY_8060.jpg': 'editorial',
    'ZLY_7993.jpg': 'menswear',
    'ZLY_7086.jpg': 'stage',
}
TARGETS = {2020: 42, 2021: 42, 2022: 64, 2023: 82, 2024: 70}
FEATURED_NAMES = set(HERO_NAMES) | {
    'ZLY_9790.jpg', 'ZLY_7782.jpg', 'ZLY_0230.jpg', 'ZLY_2411.jpg',
    'DSF_1684.jpg', 'DSF_0066.jpg', 'DSF_1720.jpg', 'DSF_0275.jpg',
    'ZLY_0565.jpg', 'ZLY_0943.jpg', 'ZLY_3225.jpg', 'DSF_6125.jpg',
}
ARCHIVE_LABELS = {
    row['id']: Path(row['path']).stem
    for row in json.loads((SOURCE / 'archive-inventory.json').read_text(encoding='utf-8'))
}

def read_csv(path: Path):
    with path.open(encoding='utf-8-sig', newline='') as stream:
        return list(csv.DictReader(stream))

def canonical(value: str):
    return unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().lower()

def source_path(value: str):
    return SOURCE / Path(value)

def clean_collection(value: str):
    value = re.sub(r'^\s*\d+\s*[.\-]?\s*', '', value).strip()
    normal = canonical(value).replace(' ', '')
    fixes = {
        'ludekhanak': 'Luděk Hanák', 'helenabedrnova': 'Helena Bedrnová',
        'jkklett': 'Jitka Klett', 'jk_klett': 'Jitka Klett', 'nadamoravcova': 'Naďa Moravcová',
        'jirimoravec': 'Jiří Moravec', 'gabrielagiotto': 'Gabriela Giotto',
        'annatejklova': 'Anna Tejklová', 'osm anylaffita': 'Osmany Laffita',
        'cleotefinati': 'Cleofe Finati', 'fashionisland': 'Fashion Island',
        'annaanna': 'ANNA ANNA',
    }
    if normal in fixes:
        return fixes[normal]
    if 'backstage' in normal or 'skupin' in normal or 'party' in normal:
        return 'Zákulisí a setkání'
    if normal == 'zaver':
        return 'Závěrečné defilé'
    if normal == 'miss':
        return 'Přehlídka Miss'
    if (normal in ('plnakvalita', 'fotky', 'zapletal', 'folder')
            or normal.startswith(('cfw', 'czechfashionweek', 'vyberfotek', 'czfahionweek', 'zasilka'))):
        return None
    if normal in ('partners', 'partneri'):
        return 'Atmosféra a partneři'
    if 'casting' in normal:
        return 'Casting Jalta'
    if 'kristianna' in normal:
        return 'Kristianna'
    return value or None

def context(row):
    parts = Path(row['path']).parts
    if not parts or parts[0] not in {'2020', '2021', '2022', '2023', '2024'}:
        return None
    if any('akce-k-overeni' in canonical(p) or 'ol-show' in canonical(p) for p in parts):
        return None
    year = int(parts[0])
    event = parts[1]
    city = ('Casting Jalta' if 'Casting-Jalta' in event else
            'Karlovy Vary' if event.startswith('Karlovy-Vary') else event)
    if city not in {'Teplice', 'Brno', 'Karlovy Vary', 'Casting Jalta'}:
        return None
    if int(row.get('width') or 0) < 700 or int(row.get('height') or 0) < 700:
        return None
    collection = clean_collection(parts[-2])
    if canonical(parts[-2]).startswith('zip-'):
        collection = clean_collection(ARCHIVE_LABELS.get(row['id'], ''))
    if city == 'Casting Jalta':
        collection = 'Casting Jalta'
    if row.get('source_kind') == 'zip-member' and year == 2024:
        # Designer-labelled, event-confirmed ZIP packages provide diversity too.
        # A last directory named "images" is not a meaningful public title.
        if canonical(collection or '') in ('images', 'jpg', 'jpeg'):
            collection = None
    return year, city, collection

def choose_photos(rows):
    unique = {}
    for row in rows:
        info = context(row)
        if not info or row.get('status') != 'readable':
            continue
        sha = row['sha256']
        if sha not in unique or row.get('source_kind') == 'drive-file':
            unique[sha] = row
    selected = {}
    for year, count in TARGETS.items():
        candidates = [r for r in unique.values() if context(r)[0] == year]
        groups = {}
        for row in candidates:
            key = str(Path(row['path']).parent)
            groups.setdefault(key, []).append(row)
        for group in groups.values():
            group.sort(key=lambda r: Path(r['path']).name)
        pick = []
        used = set()
        def add(row):
            if row['sha256'] not in used:
                pick.append(row)
                used.add(row['sha256'])
        for row in candidates:
            if Path(row['path']).name in FEATURED_NAMES:
                add(row)
        # Round-robin quantiles cover every collection rather than one filename run.
        for quantile in (.25, .65, .05, .9, .45):
            for key in sorted(groups):
                group = groups[key]
                if len(pick) < count:
                    add(group[min(len(group) - 1, int((len(group) - 1) * quantile))])
        ordered = sorted(candidates, key=lambda r: hashlib.sha256(r['sha256'].encode()).hexdigest())
        for row in ordered:
            if len(pick) >= count:
                break
            add(row)
        for row in pick[:count]:
            selected[row['sha256']] = row
    return list(selected.values())

def open_srgb(path: Path):
    with Image.open(path) as original:
        original.draft('RGB', (2600, 2600))
        im = ImageOps.exif_transpose(original)
        if im.mode not in ('RGB', 'RGBA'):
            im = im.convert('RGB')
        icc = original.info.get('icc_profile')
        if icc:
            try:
                im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(icc)), ImageCms.createProfile('sRGB'), outputMode='RGB')
            except (ValueError, OSError):
                im = im.convert('RGB')
        return im.copy().convert('RGB')

def image_export(row):
    year, city, collection = context(row)
    photo_id = 'p-' + row['sha256'][:14]
    thumb = OUTPUT / f'{photo_id}-thumb.webp'
    view = OUTPUT / f'{photo_id}.webp'
    hero = year == 2024 and Path(row['path']).name in HERO_NAMES
    valid = thumb.exists() and view.exists()
    if valid:
        try:
            for existing in (thumb, view):
                with Image.open(existing) as check:
                    check.verify()
        except (OSError, ValueError):
            valid = False
    if not valid:
        image = open_srgb(source_path(row['path']))
        th = image.copy()
        th.thumbnail((480, 600), Image.Resampling.LANCZOS)
        thumb_tmp = thumb.with_suffix('.part.webp')
        th.save(thumb_tmp, 'WEBP', quality=74, method=5)
        thumb_tmp.replace(thumb)
        full = image.copy()
        full.thumbnail((2400 if hero else 1600, 2400 if hero else 1800), Image.Resampling.LANCZOS)
        view_tmp = view.with_suffix('.part.webp')
        full.save(view_tmp, 'WEBP', quality=82 if hero else 78, method=5)
        view_tmp.replace(view)
    with Image.open(view) as im:
        width, height = im.size
    artist = re.sub(r'[\x00-\x1f\x7f]', '', row.get('artist', '')).strip()
    if artist and ('@' in artist or len(artist) > 100):
        artist = ''
    label = 'Casting Jalta' if city == 'Casting Jalta' else f'Czech Fashion Week · {city}'
    title = collection or ('Casting Jalta' if city == 'Casting Jalta' else 'Momenty přehlídky')
    if title == 'Casting Jalta':
        alt = f'Archivní fotografie castingu Jalta z roku {year}.'
    else:
        alt = f'{label}, {year}. {title}.'
    role = HERO_NAMES.get(Path(row['path']).name) if year == 2024 else None
    item = dict(id=photo_id, type='photo', year=year, city=city,
                collection=collection, title=title, alt=alt, width=width, height=height,
                thumb=f'media/{thumb.name}', src=f'media/{view.name}',
                tags=['casting'] if city == 'Casting Jalta' else ['archiv'],
                credit=f'Foto: {artist}' if artist else 'Archiv Czech Fashion Week',
                featured=Path(row['path']).name in FEATURED_NAMES,
                originalFilename=Path(row['path']).name,
                sourceYearEvidence='source-folder-context')
    if role:
        item['role'] = role
    if artist:
        item['photographer'] = artist
    audit = dict(id=photo_id, sourceId=row['id'], sourceKind=row['source_kind'],
                 relativeSourcePath=row['path'], sha256=row['sha256'],
                 sourceWidth=int(row['width']), sourceHeight=int(row['height']),
                 exportBytes=thumb.stat().st_size + view.stat().st_size)
    return item, audit

def ffmpeg_run(arguments):
    subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', *arguments], check=True, capture_output=True)

def video_duration(path):
    try:
        result = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'json', str(path)], check=True, capture_output=True, text=True)
        return float(json.loads(result.stdout)['format']['duration'])
    except (OSError, ValueError, KeyError, subprocess.CalledProcessError):
        return -1

def video_export(row):
    path = row['path']
    if not (path.startswith('2024\\Brno\\') or path.startswith('2023\\Casting-Jalta\\')):
        return None
    year = 2024 if path.startswith('2024') else 2023
    city = 'Brno' if year == 2024 else 'Casting Jalta'
    original = source_path(path)
    sha = hashlib.sha256(original.read_bytes()).hexdigest()
    video_id = 'v-' + sha[:14]
    target = OUTPUT / f'{video_id}.mp4'
    poster = OUTPUT / f'{video_id}-poster.webp'
    if not target.exists() or abs(video_duration(target) - row['duration_seconds']) > .5:
        target_tmp = target.with_suffix('.part.mp4')
        ffmpeg_run(['-i', str(original), '-vf', 'scale=720:1280:force_original_aspect_ratio=decrease:force_divisible_by=2',
                    '-c:v', 'libx264', '-preset', 'fast', '-crf', '26', '-maxrate', '1000k', '-bufsize', '2000k',
                    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', '-threads', '2', str(target_tmp)])
        target_tmp.replace(target)
    if not poster.exists():
        ffmpeg_run(['-ss', str(min(2.0, row['duration_seconds'] * .25)), '-i', str(target),
                    '-frames:v', '1', '-vf', 'scale=480:-2', '-quality', '78', str(poster)])
    collection = clean_collection(Path(path).parts[-2]) if year == 2024 else 'Casting Jalta'
    item = dict(id=video_id, type='video', year=year, city=city,
                collection=collection, title=collection or 'Runway v pohybu',
                alt=f'{"Casting Jalta" if year == 2023 else "Přehlídka Czech Fashion Week v Brně"}, {year}.',
                width=720, height=1280, duration=round(row['duration_seconds'], 2),
                thumb=f'media/{poster.name}', poster=f'media/{poster.name}', src=f'media/{target.name}',
                tags=['casting'] if year == 2023 else ['runway'],
                credit='Archiv Czech Fashion Week', featured=(year == 2024 and Path(path).name == 'iveta.MOV'),
                originalFilename=Path(path).name, sourceYearEvidence='source-folder-context')
    if item['featured']:
        item['role'] = 'hero-video'
        short = OUTPUT / f'{video_id}-hero.mp4'
        if not short.exists() or abs(video_duration(short) - 9) > .3:
            short_tmp = short.with_suffix('.part.mp4')
            ffmpeg_run(['-ss', '2', '-i', str(target), '-t', '9', '-vf', 'scale=540:960',
                        '-c:v', 'libx264', '-preset', 'fast', '-crf', '26', '-maxrate', '800k', '-bufsize', '1600k',
                        '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', '-threads', '2', str(short_tmp)])
            short_tmp.replace(short)
        item['heroSrc'] = f'media/{short.name}'
    audit = dict(id=video_id, relativeSourcePath=path, sha256=sha,
                 sourceWidth=row['width'], sourceHeight=row['height'],
                 exportBytes=target.stat().st_size + poster.stat().st_size,
                 audio='Muted editorial web derivative; source preserved locally')
    return item, audit

def main():
    rows = choose_photos(read_csv(SOURCE / 'photo-metadata.csv'))
    print(f'Selected {len(rows)} photographs', flush=True)
    exported = []
    with futures.ThreadPoolExecutor(max_workers=4) as pool:
        for index, pair in enumerate(pool.map(image_export, rows), 1):
            exported.append(pair)
            if index % 30 == 0:
                print(f'Photos {index}/{len(rows)}', flush=True)
    video_rows = json.loads((ROOT.parent / 'CFW-strategie' / 'research' / 'media' / 'video-metadata.json').read_text(encoding='utf-8'))
    with futures.ThreadPoolExecutor(max_workers=3) as pool:
        for pair in pool.map(video_export, video_rows):
            if pair:
                exported.append(pair)
                print(f'Video {pair[0]["originalFilename"]}', flush=True)
    media = sorted((pair[0] for pair in exported), key=lambda x: (-x['year'], not x['featured'], x['city'], x['collection'] or '', x['id']))
    audit = [pair[1] for pair in exported]
    (DATA / 'media.json').write_text(json.dumps(media, ensure_ascii=False, indent=2), encoding='utf-8')
    (DATA / 'media-source-audit.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps({'photographs': sum(x['type'] == 'photo' for x in media), 'videos': sum(x['type'] == 'video' for x in media),
                      'totalBytes': sum(x.stat().st_size for x in OUTPUT.iterdir() if x.is_file()),
                      'hero': [{k:x[k] for k in ('id','src','role','originalFilename')} for x in media if x.get('role')]}, ensure_ascii=False, indent=2), flush=True)

def verify_exports():
    media = json.loads((DATA / 'media.json').read_text(encoding='utf-8'))
    if len({item['id'] for item in media}) != len(media):
        raise ValueError('Duplicate public media ID')
    references = {item[key] for item in media for key in ('src', 'thumb', 'poster', 'heroSrc') if key in item}
    for reference in references:
        resolved = (ROOT / 'public' / reference).resolve()
        resolved.relative_to(OUTPUT.resolve())
        if not resolved.is_file():
            raise ValueError(f'Missing public derivative: {reference}')
    def decode(path):
        with Image.open(path) as image:
            image.load()
            if image.mode != 'RGB' or min(image.size) < 1:
                raise ValueError(f'Unexpected image color mode or size: {path.name}')
    images = list(OUTPUT.glob('*.webp'))
    with futures.ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(decode, images))
    videos = list(OUTPUT.glob('*.mp4'))
    for path in videos:
        if video_duration(path) <= 0:
            raise ValueError(f'Unplayable exported video: {path.name}')
    for item in media:
        if item['type'] == 'video' and abs(video_duration(ROOT / 'public' / item['src']) - item['duration']) > .5:
            raise ValueError(f'Wrong duration: {item["id"]}')
    temporary = list(OUTPUT.glob('*.part.*'))
    if temporary:
        raise ValueError('Incomplete derivative files remain')
    total = sum(path.stat().st_size for path in OUTPUT.iterdir() if path.is_file())
    if total > 250_000_000:
        raise ValueError('Media budget exceeded')
    print(json.dumps({'verifiedMedia': len(media), 'decodedWebP': len(images), 'probedMp4': len(videos),
                      'references': len(references), 'bytes': total, 'errors': []}, ensure_ascii=False), flush=True)

if __name__ == '__main__':
    verify_exports() if '--verify' in sys.argv else main()
