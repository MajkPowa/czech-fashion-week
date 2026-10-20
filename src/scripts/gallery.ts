import { observeAutoplay } from './video';

type Media = {
  id: string;
  type: 'photo' | 'video';
  year: number;
  city: string;
  collection?: string | null;
  title: string;
  alt: string;
  width: number;
  height: number;
  thumb: string;
  src: string;
  poster?: string;
  duration?: number;
  credit?: string;
  photographer?: string;
};

type ArchiveContext = { url: string; scrollY: number; focusId: string; visible: number; savedAt: number };
const PAGE_SIZE = 32;

function initGallery(root: HTMLElement) {
  if (root.dataset.ready) return;
  root.dataset.ready = 'true';
  const data = root.querySelector<HTMLScriptElement>('[data-gallery-data]');
  const form = root.querySelector<HTMLFormElement>('[data-gallery-form]');
  const dialogElement = root.querySelector<HTMLDialogElement>('[data-media-dialog]');
  if (!data || !form || !dialogElement) return;
  const dialog: HTMLDialogElement = dialogElement;
  let media: Media[];
  try { media = JSON.parse(data.textContent || '[]'); } catch { return; }
  const lookup = new Map(media.map((item) => [item.id, item]));
  const cards = new Map<string, HTMLElement>();
  root.querySelectorAll<HTMLElement>('[data-media-card]').forEach((card) => cards.set(card.dataset.mediaCard || '', card));
  const archiveUrl = root.dataset.archiveUrl || '/archiv/';
  const baseUrl = root.dataset.baseUrl || '/';
  const assetUrl = (path: string) => `${baseUrl}${path.replace(/^\//, '')}`;
  const detailUrl = (id: string) => `${baseUrl}media/${id}/`;
  const count = root.querySelector<HTMLElement>('[data-gallery-count]')!;
  const progress = root.querySelector<HTMLElement>('[data-gallery-progress]')!;
  const pagination = root.querySelector<HTMLElement>('[data-gallery-pagination]')!;
  const more = root.querySelector<HTMLButtonElement>('[data-load-more]')!;
  const empty = root.querySelector<HTMLElement>('[data-gallery-empty]')!;
  const yearLinks = [...root.querySelectorAll<HTMLAnchorElement>('[data-year-link]')];
  const body = dialog.querySelector<HTMLElement>('[data-dialog-body]')!;
  const title = dialog.querySelector<HTMLElement>('[data-dialog-title]')!;
  const credit = dialog.querySelector<HTMLElement>('[data-dialog-credit]')!;
  const locationLabel = dialog.querySelector<HTMLElement>('[data-dialog-location]')!;
  const dialogCount = dialog.querySelector<HTMLElement>('[data-dialog-count]')!;
  const detail = dialog.querySelector<HTMLAnchorElement>('[data-dialog-detail]')!;
  const previous = dialog.querySelector<HTMLButtonElement>('[data-dialog-previous]')!;
  const next = dialog.querySelector<HTMLButtonElement>('[data-dialog-next]')!;
  const closeButton = dialog.querySelector<HTMLButtonElement>('[data-dialog-close]')!;
  const keys = ['year', 'city', 'type', 'collection', 'q'] as const;
  type FilterKey = (typeof keys)[number];
  const fields = Object.fromEntries(keys.map((key) => [key, form.elements.namedItem(key)])) as Record<FilterKey, HTMLInputElement | HTMLSelectElement>;
  let filtered = media;
  let visible = PAGE_SIZE;
  let activeId = '';
  let archiveContext: ArchiveContext | null = null;
  let searchTimer: ReturnType<typeof setTimeout> | undefined;
  const previewCleanups = new Map<HTMLVideoElement, () => void>();
  let releaseDialogVideo: (() => void) | undefined;
  const normalize = (value: string) => value.toLocaleLowerCase('cs-CZ').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const noun = (n: number) => n === 1 ? 'záznam' : n > 1 && n < 5 ? 'záznamy' : 'záznamů';

  function syncPreviewVideos() {
    previewCleanups.forEach((release, video) => {
      if (dialog.open || video.closest<HTMLElement>('[data-media-card]')?.hidden || !video.isConnected) {
        release();
        previewCleanups.delete(video);
      }
    });
    if (dialog.open) return;
    cards.forEach(card => {
      const video = card.querySelector<HTMLVideoElement>('video[data-gallery-preview]');
      if (!card.hidden && video && !previewCleanups.has(video)) previewCleanups.set(video, observeAutoplay(video));
    });
  }

  function readLocation() {
    const params = new URLSearchParams(location.search);
    const pathYear = location.pathname.match(/\/archiv\/(\d{4})\/?$/)?.[1] || '';
    const aliases: Record<FilterKey, string> = { year: 'rok', city: 'mesto', type: 'typ', collection: 'kolekce', q: 'q' };
    keys.forEach((key) => { fields[key].value = params.get(key) ?? params.get(aliases[key]) ?? (key === 'year' ? pathYear : ''); });
    visible = Math.max(PAGE_SIZE, Math.min(media.length || PAGE_SIZE, Number(params.get('count') || params.get('pocet')) || PAGE_SIZE));
  }

  function currentUrl() {
    const target = new URL(archiveUrl, location.origin);
    keys.forEach((key) => { const value = fields[key].value.trim(); if (value) target.searchParams.set(key, value); });
    if (visible > PAGE_SIZE) target.searchParams.set('count', String(visible));
    return `${target.pathname}${target.search}`;
  }

  function saveUrl() {
    history.replaceState({ ...history.state, cfwArchive: { visible } }, '', currentUrl());
  }

  function render(updateUrl = true) {
    const search = normalize(fields.q.value.trim());
    filtered = media.filter((item) => (!fields.year.value || item.year === Number(fields.year.value))
      && (!fields.city.value || item.city === fields.city.value)
      && (!fields.type.value || item.type === fields.type.value)
      && (!fields.collection.value || item.collection === fields.collection.value)
      && (!search || normalize(`${item.title} ${item.alt} ${item.collection || ''} ${item.city} ${item.year}`).includes(search)));
    const shown = new Set(filtered.slice(0, visible).map((item) => item.id));
    cards.forEach((card, id) => { card.hidden = !shown.has(id); });
    syncPreviewVideos();
    const displayed = Math.min(visible, filtered.length);
    count.textContent = `${filtered.length} ${noun(filtered.length)} v kurátorském výběru`;
    progress.textContent = `Zobrazeno ${displayed} z ${filtered.length}`;
    pagination.hidden = filtered.length <= PAGE_SIZE;
    more.hidden = displayed >= filtered.length;
    empty.hidden = filtered.length > 0;
    const hasFilters = keys.some((key) => fields[key].value.trim());
    root.querySelectorAll<HTMLElement>('[data-reset]').forEach((button) => { if (!button.closest('[data-gallery-empty]')) button.hidden = !hasFilters; });
    yearLinks.forEach((link) => {
      if (link.dataset.yearLink === fields.year.value) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (updateUrl) saveUrl();
    document.dispatchEvent(new CustomEvent('cfw:gallery-render'));
  }

  function reset() {
    keys.forEach((key) => { fields[key].value = ''; });
    visible = PAGE_SIZE;
    render();
  }

  function contextFor(id: string): ArchiveContext {
    return { url: `${currentUrl()}#media-${id}`, scrollY: window.scrollY, focusId: id, visible, savedAt: Date.now() };
  }

  function storeContext(context: ArchiveContext) {
    try { sessionStorage.setItem('cfw:archive-return', JSON.stringify(context)); } catch { /* Gallery remains usable without storage. */ }
  }

  function clearMedia() {
    releaseDialogVideo?.();
    releaseDialogVideo = undefined;
    body.querySelectorAll('video').forEach((video) => { video.pause(); video.removeAttribute('src'); video.load(); });
    body.replaceChildren();
  }

  function showMedia(item: Media) {
    clearMedia();
    activeId = item.id;
    const position = filtered.findIndex((entry) => entry.id === item.id);
    locationLabel.textContent = `Archiv / ${item.year} / ${item.city}`;
    title.textContent = item.collection || item.title;
    credit.textContent = [item.title, item.credit || 'Archiv Czech Fashion Week', item.photographer ? `Autor: ${item.photographer}` : ''].filter(Boolean).join(' · ');
    dialogCount.textContent = `${position + 1} / ${filtered.length}${item.type === 'video' ? ' · Film' : ''}`;
    detail.href = detailUrl(item.id);
    previous.disabled = filtered.length < 2;
    next.disabled = filtered.length < 2;
    const element = document.createElement(item.type === 'video' ? 'video' : 'img');
    element.setAttribute('width', String(item.width));
    element.setAttribute('height', String(item.height));
    if (element instanceof HTMLVideoElement) {
      element.controls = false;
      element.muted = true;
      element.defaultMuted = true;
      element.loop = true;
      element.playsInline = true;
      element.preload = 'none';
      element.dataset.videoAutoplay = '';
      element.dataset.videoSrc = assetUrl(item.src);
      element.disablePictureInPicture = true;
      element.poster = assetUrl(item.poster || item.thumb);
      element.setAttribute('aria-label', item.alt || item.title);
    } else {
      element.alt = item.alt || item.title;
      element.decoding = 'async';
    }
    element.addEventListener('error', () => {
      if (!element.isConnected) return;
      releaseDialogVideo?.();
      releaseDialogVideo = undefined;
      const message = document.createElement('p');
      message.className = 'media-load-error';
      message.append('Soubor se nepodařilo načíst. ');
      const link = document.createElement('a');
      link.href = detailUrl(item.id);
      link.textContent = 'Zkusit samostatný detail';
      message.append(link);
      body.replaceChildren(message);
    }, { once: true });
    if (!(element instanceof HTMLVideoElement)) element.src = assetUrl(item.src);
    body.append(element);
    if (!dialog.open) {
      document.documentElement.classList.add('media-view-open');
      dialog.showModal();
      closeButton.focus({ preventScroll: true });
    }
    syncPreviewVideos();
    if (element instanceof HTMLVideoElement) releaseDialogVideo = observeAutoplay(element);
  }

  function openMedia(id: string) {
    const item = lookup.get(id);
    if (!item || typeof dialog.showModal !== 'function') return false;
    archiveContext = contextFor(id);
    storeContext(archiveContext);
    history.replaceState({ ...history.state, cfwArchive: archiveContext }, '', currentUrl());
    history.pushState({ cfwMedia: { id, archive: archiveContext } }, '', detailUrl(id));
    showMedia(item);
    return true;
  }

  function closeMedia(restore = true) {
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove('media-view-open');
    clearMedia();
    activeId = '';
    syncPreviewVideos();
    if (restore && archiveContext) {
      const context = archiveContext;
      visible = context.visible;
      render(false);
      requestAnimationFrame(() => {
        window.scrollTo({ top: context.scrollY, behavior: 'instant' as ScrollBehavior });
        cards.get(context.focusId)?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
      });
    }
  }

  function requestClose() {
    if (history.state?.cfwMedia) history.back();
    else {
      history.replaceState({ cfwArchive: archiveContext }, '', archiveContext?.url || archiveUrl);
      closeMedia();
    }
  }

  function move(direction: number) {
    if (!filtered.length) return;
    const position = filtered.findIndex((item) => item.id === activeId);
    const item = filtered[(position + direction + filtered.length) % filtered.length];
    history.replaceState({ cfwMedia: { id: item.id, archive: archiveContext } }, '', detailUrl(item.id));
    showMedia(item);
  }

  readLocation();
  root.classList.add('is-enhanced');
  render(false);

  // Back from a standalone media document can restore a late gallery batch.
  if (location.hash.startsWith('#media-')) {
    const id = decodeURIComponent(location.hash.slice(7));
    const position = filtered.findIndex((item) => item.id === id);
    if (position >= visible) { visible = Math.ceil((position + 1) / PAGE_SIZE) * PAGE_SIZE; render(false); }
    let returnContext: ArchiveContext | null = null;
    try {
      const saved = JSON.parse(sessionStorage.getItem('cfw:archive-return') || 'null');
      if (saved?.focusId === id && Number.isFinite(saved.scrollY) && Date.now() - saved.savedAt < 86400000
        && new URL(saved.url, location.origin).href === location.href) returnContext = saved;
    } catch { /* Hash navigation still restores the selected card without storage. */ }
    requestAnimationFrame(() => {
      const card = cards.get(id);
      if (returnContext) window.scrollTo({ top: returnContext.scrollY, behavior: 'instant' as ScrollBehavior });
      else card?.scrollIntoView({ block: 'center' });
      card?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
    });
  }

  form.addEventListener('submit', (event) => { event.preventDefault(); visible = PAGE_SIZE; render(); });
  form.addEventListener('change', () => { visible = PAGE_SIZE; render(); });
  fields.q.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { visible = PAGE_SIZE; render(); }, 160);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-reset]').forEach((button) => button.addEventListener('click', reset));
  yearLinks.forEach((link) => link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    fields.year.value = link.dataset.yearLink || '';
    visible = PAGE_SIZE;
    render();
  }));
  more.addEventListener('click', () => {
    const firstNewId = filtered[visible]?.id;
    visible += PAGE_SIZE;
    render();
    // Keep the activating button in place while announcing the expanded range.
    if (more.hidden && firstNewId) cards.get(firstNewId)?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
  });

  root.querySelectorAll<HTMLAnchorElement>('[data-open-media]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.dataset.openMedia || '';
      storeContext(contextFor(id));
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      if (openMedia(id)) event.preventDefault();
    });
    const image = link.querySelector('img');
    image?.addEventListener('error', () => {
      image.hidden = true;
      const fallback = link.querySelector<HTMLElement>('[data-image-fallback]');
      if (fallback) fallback.hidden = false;
    }, { once: true });
  });

  closeButton.addEventListener('click', requestClose);
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  dialog.addEventListener('cancel', (event) => { event.preventDefault(); requestClose(); });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) requestClose(); });
  dialog.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLVideoElement || event.target instanceof HTMLInputElement) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  window.addEventListener('popstate', (event) => {
    if (event.state?.cfwMedia?.id) {
      archiveContext = event.state.cfwMedia.archive || archiveContext;
      const item = lookup.get(event.state.cfwMedia.id);
      if (item) showMedia(item);
      return;
    }
    readLocation();
    if (event.state?.cfwArchive?.focusId) archiveContext = event.state.cfwArchive;
    closeMedia();
    render(false);
  });
}

document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(initGallery);
