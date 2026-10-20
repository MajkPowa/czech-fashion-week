# Czech Fashion Week

Statický redakční web a kurátorský obrazový archiv pro GitHub Pages. Astro 7, TypeScript, GSAP; písma i média jsou lokální.

## Spuštění

Použijte Node.js 24 LTS (nebo alespoň 22.22).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Projekt je nastaven na cestu `/czech-fashion-week/`. Výstup je v `dist/`; GitHub Actions jej po pushi do main publikuje na Pages.

## Obsah

- `src/data/events.ts` — události, potvrzené termíny, prodejce a oficiální zdroje.
- `src/data/designers.ts` — profily a vazby na historické kolekce.
- `src/data/site.ts` — kontakty, redakční texty a příběhy pomoci.
- `src/data/media.json` — kurátorská metadata publikovaných médií.
- `public/media` — optimalizované webové deriváty; originální 21GB archiv není součást repozitáře.
- `research/CONTENT-SOURCES.md` — obsahové podklady a ověření.

Program byl ověřen 20.10.2026. Před dalším vydáním zkontrolujte aktuálnost budoucích událostí. Po datu konání změňte stav na `completed` a doplňte nový potvrzený program. Při změně názvu repozitáře upravte `base` v `astro.config.mjs`.

Kontaktní formulář otevírá předvyplněný e-mail; nevyžaduje server, neukládá osobní údaje a sám zprávy neodesílá. Vstupenky zajišťuje ověřený externí prodejce. Historické fotografie nejsou označované jako dokumentace budoucí události.

## Média a reprodukovatelnost

`scripts/prepare_media.py` vytvoří webové deriváty z lokálního zdrojového archivu. Publikované soubory jsou již připravené; pro běžný build není původní archiv potřeba. Při opakování importu používejte původní manifest a schválený výběr. Generované koncepční obrázky nejsou mezi publikovanými fotografiemi.

## Typografie, ikony a partneři

Titulky používají variabilní Bodoni Moda s optickou velikostí a pravou kurzivou; běžný text a navigace používají Manrope. Písma jsou uložená lokálně. Obě licence OFL jsou v `public/licenses`.

`src/components/Icon.astro` obsahuje vlastní SVG ikonografii CFW. Šipky a ovládací symboly jsou vektorové cesty, nikoli znaky fontu; systémové emoji jejich vzhled neovlivní.

`src/data/partners.ts` eviduje všech 22 partnerů a 8 záštit z prezentace CFW 2025, strany 5. `public/partners` obsahuje autentická loga; přesné zdroje a nahrazení dvou málo kvalitních bitmap oficiálními variantami dokumentuje `research/PARTNERS-SOURCES.md`. Hlavní stránka ukazuje všech 22 partnerů, stránka Partneři i osm historických záštit. Mediální kanály reklamní kampaně nejsou zaměňované za partnery.
