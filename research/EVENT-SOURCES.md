# Události CFW: správné přiřazení obrazových podkladů

Ověřeno 20. října 2026 přímo proti oficiálním stránkám CFW. Originály jsou uložené v lokálním výzkumném archivu `CFW-strategie/research/official-site/events/originals`; publikované WebP zachovávají celý obraz, včetně původních popisků fotografických panelů. Exporty mají nejvýše 1800 px na delší straně, bez ořezu. Seznam původních URL, rozměrů a SHA-256 publikovaných souborů obsahuje `public/official/events/sources.json`.

## Opravené přiřazení

| Událost | Hlavní podklad | Zdroj a význam |
|---|---|---|
| Praha · 20. 11. 2026 | `praha-1.webp` | Propagační fotografie Fashion Island zveřejněná na [oficiální stránce Praha](https://cfw.cz/praha/). Není označená jako dokumentace budoucího večera. |
| Brno · 22. 8. 2026 | `brno-1.webp` | Vlastní banner pro rok 2026 z [detailu Brno](https://cfw.cz/brno/). Nahrazuje obecnou fotografii Brna 2024. |
| Mariánské Lázně · 5. 9. 2026 | `marianske-lazne-1.webp` | Banner výslovně uvádí datum a Kolonádu Maxima Gorkého. [Oficiální detail](https://cfw.cz/marianske_lazne/). |
| Karlovy Vary · 4. 7. 2026 | `karlovy-vary-1.webp` | Oficiální banner uvádí přesné datum 4. července 2026. [Detail má historickou cestu `/KV2025/`, ale současný titulek a banner jsou pro rok 2026](https://cfw.cz/KV2025/). |
| Brno · 2024 | `brno-2.webp` | Původní popisek uvnitř panelu výslovně uvádí Brno 2024, Cleofe Finati a Nefeli Exclusive. Název souboru `FOTO_CFW_BRNO_2025.jpg` je zavádějící a neurčuje rok vyobrazení. [Zdroj](https://cfw.cz/brno/). |
| Mariánské Lázně · 2025 | `marianske-lazne-2.webp` | Popisek přímo uvnitř fotografie identifikuje kolekci Luďka Hanáka a ročník 2025, přestože URL obsahuje `2026/07`. Proto je podklad přiřazen k samostatné historické události 2025. [Zdroj](https://cfw.cz/marianske_lazne/). |
| Karlovy Vary · 2025 | `karlovy-vary-2.webp` | Fotokoláž publikovaná vedle textu o přehlídce Debbie Brown v Poštovním dvoře v roce 2025. Popisek zachovává tento kontext, nenazývá ji fotografií ročníku 2026. [Zdroj](https://cfw.cz/KV2025/). |

Homepage uvádí pro Karlovy Vary období 3.–11. 7. 2026. Jde o širší festivalové období; samostatný banner události uvádí konkrétní 4. 7. 2026. V programu je proto nyní přesné datum z banneru. Rok nahrání, název souboru a datum vyobrazené události jsou posuzované odděleně.

## Praha: doplňkové podklady

Z [homepage CFW](https://cfw.cz/) je uložený oficiální plakát `praha-glamour-2026-banner.webp`. Ze [stránky Praha](https://cfw.cz/praha/) pocházejí další dvě propagační fotografie Fashion Island: `praha-2.webp` a `praha-3.webp`. Třetí fotografie byla stažená v původní velikosti 1133 × 1700 podle adresy uvedené v `srcset`, nikoli jen jako zmenšená varianta 800 × 1200.

Oficiální stránka uvádí začátek programu ve 20:00 a otevření areálu v 19:00. Původní přesný čas konce o půlnoci nebyl na stránce doložený a byl odstraněný. Současná nabídka zahrnuje Fashion Island SS27 a LYANIS Couture; fotografie jsou označené jako promo. Vstupenky vedou na původní ověřený Ticketportal.

## Stažené soubory

Celkem 11 obrazových podkladů: čtyři pražské promo podklady, tři pozvánky dalších měst, tři historické fotografie/panely a jeden sezónní kalendář. Kalendář `season-2026-calendar.webp` je převzatý z homepage a je připravený pro případné další použití. V žádném ze čtyř prozkoumaných detailů měst nebyl HTML element `video`, `source` ani `iframe`; hlavní oficiální video z homepage zpracovává samostatná část importu.

Rok 2025 v přehledu událostí a jeho filtru byl doplněný podle doložených historických kontextů. U těchto záznamů se nedoplňuje neověřený den ani čas. Odkazy do starších archivů CFW jsou nyní výslovně označené příslušným městem a rokem, pokud se liší od roku otevřené události.

## Zobrazení

Hlavní oficiální obraz události má přednost před starým výběrem `photoFor()`. Banners a panely s vloženými daty či popisky se zobrazují celé přes `height:auto` / `object-fit:contain`; text pozvánky se neořezává. Pražský detail má samostatnou sekci oficiálních propagačních podkladů. Historický fotoarchiv zůstává dostupný se svým původním rokem.
