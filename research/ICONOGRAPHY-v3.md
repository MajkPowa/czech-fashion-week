# Ikonografie CFW v3

## Cíl a výsledek auditu

Původní sada řešila hlavně směrové šipky. Audit rozšířil návrh na celý ovládací systém: navigaci, archiv, vyhledávání, filtry, přehrávání a jeho stavy, události, kontakt a spolupráci. Sada má **38 vlastních SVG ikon** včetně ovládání kontrastního náhledu. Nejde o obrázkové fonty nebo systémové emoji.

Jedním zdrojem je `src/lib/iconography.ts`: `iconPaths`, typ `IconName` a české názvy `iconLabels`. Komponenta `Icon.astro` i katalog mohou používat totožnou geometrii. Změna kresby se tak projeví všude.

## Geometrie a čitelnost

- Síť 24 × 24; tah **1,65 px**, `currentColor`, `fill="none"`.
- `stroke-linecap="square"`, `stroke-linejoin="miter"`: přesné zakončení, otevřené hroty šipek a čitelné křížky.
- `vector-effect="non-scaling-stroke"` drží tah při změně velikosti. Zmenšení geometrie tak samo o sobě neztenčuje tah.
- Pracovní rozměry **16 / 20 / 24 / 32 px**. 16 px pro metadata a popisky, 20 px běžné akce, 24 px navigaci a galerii, 32 px výrazné řádkové odkazy. Velká šipka v patičce následuje typografickou velikost nadpisu.
- Není potřeba vnější služba, ikonový font, runtime knihovna ani rasterizace.
- Zvětšení panelu používá značku vnějšího odkazu, otevření média značku zvětšení; reset se odlišuje kruhovou šipkou. Významové akce nemají všechny stejnou dekorativní šipku.

## Pokrytí skutečného rozhraní

| Oblast | Ikony | Nasazení |
|---|---|---|
| Směr a návrat | `arrow-up-right`, `arrow-up-left`, `arrow-right`, `arrow-left`, `arrow-down`, `arrow-up` | CTA, návrat do archivu, další/předchozí médium, načtení další dávky, skok v příběhu a návrat nahoru |
| Odkazy | `external`, `expand`, `download` | Oficiální externí informace, otevření fotografie, stažení sady z katalogu |
| Navigace a panely | `menu`, `close`, `plus`, `minus` | Mobilní navigace, dialog média, historické partnerské panely |
| Výběry | `chevron-down`, `chevron-up` | Nativní selecty archivu a kontaktního formuláře; zachované systémové ovládání a klávesnice |
| Archiv | `search`, `filter`, `reset`, `collection`, `photo`, `film` | Popisky filtrů, hledání, počet výsledků, reset, návrat do ročníku a typ samostatného média |
| Film | `play`, `pause`, `volume-off` | Ovládání filmu na úvodní stránce, filmové karty a pravdivé označení tichého záznamu |
| Událost | `calendar`, `clock`, `location`, `ticket`, `hanger` | Datum, čas, místo, fakta události, vstupenky a dress code |
| Kontakt | `mail`, `phone`, `copy`, `check`, `info` | E-mail, telefon, kopírování adresy, potvrzení kopie a ověřený zdroj kontaktu |
| Spolupráce | `flag`, `users`, `link` (+ `photo`) | Čtyři skutečné možnosti partnerství: značka v prostoru, společný obsah, setkání a dlouhodobá spolupráce |
| Katalog | `contrast` | Přepnutí světlého a tmavého podkladu v pomocném design systému |

`download` se využívá v pomocném katalogu design systému. V běžných produktových stránkách nejsou přidané nepoužívané kategorie ani dekorativní ikonky ke každému odstavci.

## Export a porovnání

`scripts/export-icons.mjs` se spouští automaticky v `npm run build`. Z centrální mapy vytvoří v `public/icons/` všech 38 samostatných SVG, symbolový sprite `cfw-icons.svg`, strojově čitelný `manifest.json` a archiv `cfw-icons.zip`. Geometrie i atributy odpovídají komponentě; nevzniká druhá ručně udržovaná sada.

Pomocná stránka [`/design-system/`](https://majkpowa.github.io/czech-fashion-week/design-system/) obsahuje celý katalog a světlý/tmavý náhled i přímé stažení. Vedle ikon porovnává Onest, Geist, Plus Jakarta Sans a předchozí Bodoni Moda + Manrope na stejných českých textech. Má `noindex` a není v běžné navigaci. Závěry a limity výběru písma uvádí [analýza typografie](TYPOGRAPHY-ANALYSIS-v3.md).

Produkční typografie je nyní Onest Variable, uložená lokálně pod licencí OFL. Základ 17 px / 1,65 doplňuje běžný text 16–18 px, UI 14 px a podpůrné popisky 13 px; hlavní váhy jsou 400 a 500. Tyto rozměry určují také kontext, ve kterém je posuzována čitelnost ikon.

## Stavy a přístupnost

- SVG jsou dekorativní (`aria-hidden="true"`, `focusable="false"`). Význam stále sděluje viditelný český text nebo přístupný název tlačítka.
- Menu přepíná skutečné SVG `menu` / `close` podle `aria-expanded`. Neotáčí CSS čárky.
- Film přepíná `play` / `pause` podle `aria-pressed`; synchronizuje se s událostmi videa `play`, `pause`, `ended` a s automatickým pozastavením mimo obrazovku. Script mění pouze `[data-video-label]`, nikoli obsah celého tlačítka.
- Kopírování přepíná `copy` / `check` podle `data-copied`. Text se mění jen v `[data-copy-label]`; živé hlášení potvrzuje úspěch. Při selhání schránky zůstává dostupná skutečná e-mailová adresa.
- Počet výsledků a umístění dialogu mají vlastní textové uzly; dynamické změny nemažou sousední SVG.
- Zasažitelné plochy ikonových tlačítek a ovládání mají nejméně **44 px**. Samotná malá kresba není malým cílem dotyku.
- Native video controls jsou ponechané prohlížeči. Ikona `volume-off` pouze popisuje tichý film; nepředstírá neexistující ovládání zvuku.
- Selecty jsou stále skutečné HTML selecty. Na prohlížečích s `:open` se přepíná směr chevronu, jinde zůstává funkční základní šipka dolů.

## Stav kontroly

- Audit původních značek odstranil i přehlédnutou textovou šipku `↖` v samostatném detailu média.
- Read-only hledání v aktuálním `src` nenašlo Unicode směrové šipky v ovládání. Znak `×` v popisu sítě 24 × 24 je textová matematická značka, nikoli ovládací ikona.
- Kontrola v prohlížeči při šířkách 320, 390 a 1440 px: hlavní šablony nepřetékají, SVG mají shodnou kresbu; ověřeno filtrování/reset archivu, předchozí/další fotografie a zavření dialogu, play/pause a copy/check.
- Export: 38 jednotlivých SVG, 38 symbolů ve sprite, 41 položek v ZIP. XML, CRC a shoda cest s centrální sadou prošly bez nálezu.
