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

Produkční doména je `https://cfw.cz/` a web běží přímo v kořeni `/`. Výstup je v `dist/`; GitHub Actions jej po pushi do main publikuje na Pages. Nastavení DNS a postup přepnutí popisuje [produkční nasazení](research/PRODUCTION-DOMAIN.md).

## Obsah

- `src/data/events.ts` — události, potvrzené termíny, prodejce a oficiální zdroje.
- `src/data/designers.ts` — profily a vazby na historické kolekce.
- `src/data/site.ts` — kontakty, redakční texty a příběhy pomoci.
- `src/data/media.json` — kurátorská metadata publikovaných médií.
- `public/media` — optimalizované webové deriváty; originální 21GB archiv není součást repozitáře.
- `research/CONTENT-SOURCES.md` — obsahové podklady a ověření.

Program byl ověřen 20.10.2026. Před dalším vydáním zkontrolujte aktuálnost budoucích událostí. Po datu konání změňte stav na `completed` a doplňte nový potvrzený program. Při změně domény upravte `site` v `astro.config.mjs` a vlastní doménu v nastavení GitHub Pages.

Kontaktní formulář otevírá předvyplněný e-mail; nevyžaduje server, neukládá osobní údaje a sám zprávy neodesílá. Vstupenky zajišťuje ověřený externí prodejce. Historické fotografie nejsou označované jako dokumentace budoucí události.

## Média a reprodukovatelnost

`scripts/prepare_media.py` vytvoří webové deriváty z lokálního zdrojového archivu. Publikované soubory jsou již připravené; pro běžný build není původní archiv potřeba. Při opakování importu používejte původní manifest a schválený výběr. Generované koncepční obrázky nejsou mezi publikovanými fotografiemi.

## Typografie, ikony a partneři

Videa na úvodu, v náhledech archivu, na profilech návrhářů i v detailu se automaticky přehrávají bez zvuku ve smyčce při vstupu do obrazovky. `src/scripts/video.ts` odkládá načtení nepoužitých zdrojů, pozastaví klipy mimo obrazovku nebo na skryté kartě a uklízí přehrávání při filtrování či zavření galerie. Rozhraní nemá tlačítka Play. Systémové omezení pohybu i přepínač v patičce zastaví automatické přehrávání a scroll animace.

`src/scripts/motion.ts` řídí postupné odkrývání textů, fotografií, karet a partnerských log podle běžného scrollu. Na desktopu doplňuje jemný pohyb hero videa; na mobilu používá menší rozsahy. Obsah zůstává viditelný bez JavaScriptu a po omezení pohybu. Galerie při změně filtrů a stránkování obnovuje animace jen zobrazených karet.

Produkční stránky používají jednu lokálně uloženou rodinu **Onest Variable** pod licencí OFL. Základní velikost je 17 px s řádkováním 1,65; běžný text pracuje s 16–18 px, ovládání s 14 px a podpůrné popisky s 13 px. Hlavní řezy jsou 400 a 500. Výrazný kontrast vlasových tahů a kurziva předchozí Bodoni Moda se v důležitém textu ani ovládání nepoužívají.

Výběr, ověření českých znaků, licence a omezení porovnání popisuje [analýza typografie](research/TYPOGRAPHY-ANALYSIS-v3.md). Pomocná stránka [`/design-system/`](https://cfw.cz/design-system/) nabízí interaktivní porovnání Onest, Geist, Plus Jakarta Sans a předchozí kombinace Bodoni Moda + Manrope na stejných českých textech. Stránka má `noindex` a není součástí hlavní navigace.

`src/components/Icon.astro` používá centrální sadu **38 vlastních SVG ikon** ze `src/lib/iconography.ts`. Šipky a ovládací symboly jsou vektorové cesty, nikoli znaky fontu; systémové emoji jejich vzhled neovlivní. Pravidla kresby, významy a použití dokumentuje [ikonografie](research/ICONOGRAPHY-v3.md).

`scripts/export-icons.mjs` při každém `npm run build` vytvoří v `public/icons/` jednotlivé SVG, sprite `cfw-icons.svg`, `manifest.json` a archiv `cfw-icons.zip`. Pomocná stránka design systému obsahuje katalog celé sady, přepnutí světlého/tmavého podkladu a stažení podkladů.

Oficiální podklady z `cfw.cz` jsou uložené lokálně: 12 fotografií návrhářů, 11 obrazových podkladů událostí, portrét Jiřího Morštadta, promo video s posterem a 49 log z partnerského přehledu. Video má dvě webové varianty; originály zůstávají v lokálním zdrojovém archivu. `public/official/asset-sources.json` eviduje všech 76 publikovaných souborů, zdrojové URL, rozměry a SHA-256. Přiřazení a kontext vysvětluje [audit importu](research/OFFICIAL-SITE-IMPORT.md).

`src/data/partners.ts` obsahuje 49 log z oficiálního webu (48 externích značek a pořadatel CFW) a zachovává 35 historických partnerských značek plus 8 záštit z prezentace. Na úvodu i stránce Partnerství je vidět oficiální přehled; kompletní historie a tři panely z roku 2024 jsou dostupné v rozbalitelném přehledu. Zdrojové varianty a ověření dokumentuje `research/PARTNERS-SOURCES.md`.
