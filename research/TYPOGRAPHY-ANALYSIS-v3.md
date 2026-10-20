# Typografie CFW: čitelnost a výběr písma

Ověřeno 20. října 2026. Výchozí stav: commit `66b2b17`, Bodoni Moda pro titulky a Manrope pro běžný text. Tento dokument odděluje měřitelná data od návrhářského doporučení; nevydává vkusové hodnocení za výzkum rychlosti čtení.

## Doporučení pro tento web

**Onest je hlavní volba; Geist Sans je srovnávací finalista.** Obě rodiny mají pro testované české znaky úplnou podporu a lze je distribuovat s webem pod OFL. Pro CFW bych použil jednu rodinu Onest pro titulky, navigaci, text i číselné údaje. Hierarchii vytvoří velikost, řez a rozvržení. Odstraní se tak tenké vlasové tahy a kurziva z podstatných ovládacích prvků.

Onest podle mého návrhářského posouzení lépe vyvažuje osobitost a klidné čtení: má současný výraz, ale nepůsobí tak technicky jako Geist. Jeho autor jej popisuje jako spojení geometrického a humanistického grotesku určené pro obrazovky, text i rozhraní. To odpovídá kombinaci příběhů, archivu a programu CFW. [Primární popis Onest](https://github.com/simpals/onest)

Geist je vhodný, pokud má být hlavním cílem maximálně strohý a přesný vizuální tón. Je to velmi dobrý kontrolní kandidát pro navigaci a formuláře. Není však automaticky „čitelnější“ než Onest pouze proto, že jej používají technologické produkty. [Primární popis Geist](https://github.com/vercel/geist-font)

## Co bylo ve výchozí verzi problematické

V `src/styles/typography.css` měl Bodoni Moda u hlavního titulku tracking `−0.05em`; v řadě dalších titulků `−0.04em`. Důležité části používaly kurzivu. V souborech `global.css`, `gallery.css`, `content.css` a `partners.css` byly popisky, metadata nebo odkazy často jen 10–12 px. Samotná výměna fontové rodiny by proto nestačila.

Bodoni má výrazný rozdíl mezi silnými a velmi jemnými tahy. To může fungovat u velkého plakátu, ale v tomto konkrétním webu s fotografií za textem, úzkými mobilními sloupci a českou diakritikou vytvářelo zbytečně křehkou kresbu. Jde o posouzení konkrétní sazby a přijatou zpětnou vazbu uživatele, nikoli o tvrzení, že je tato rodina obecně nečitelná.

U Manrope nebyl nalezen problém s chybějící češtinou. Hlavní potíž běžných textů byla velikost, hustota a jejich podřízená vizuální váha. Nová verze proto musí opravit celý systém sazby.

## Porovnání pěti kandidátů

Hodnocení vhodnosti pro CFW v posledních dvou sloupcích je návrhářské doporučení. Podpora znaků, rozsahy a licenční typy jsou technická zjištění.

| Rodina | Čeština a licence | Technická použitelnost | Přínos pro CFW | Rozhodnutí |
|---|---|---|---|---|
| **[Onest](https://github.com/simpals/onest)** | 30/30 testovaných diakritických znaků v aktuálních instalačních WOFF2; SIL OFL 1.1 | Variabilní řez, váhy 100–900; ověřené `tnum`, `pnum`, `kern`, `calt` | Čitelný text a UI, přitom výraznější charakter než neutrální systémový grotesk | **Hlavní doporučení**; titulky 500–600, text 400 |
| **[Geist Sans](https://vercel.com/font)** | 30/30 v instalačních WOFF2; SIL OFL 1.1 | Variabilní váhy 100–900; oficiální úplná distribuce nabízí více glyphů a funkcí než Google Fonts | Velmi přesný a čistý vzhled, dobrý pro ovládání a metadata; pro módní projekt může působit technicky | **Druhý finalista**; porovnat na stejném českém textu |
| **[Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans)** | 30/30 v instalačních WOFF2; SIL OFL 1.1 | Variabilní 200–800, dostupná pravá kurziva, Latin Extended | Osobitá geometrie a výrazné titulky; delší české názvy mohou v úzké kartě zabrat více místa | Silná třetí možnost, pokud má být výraz měkčí a geometrický |
| **[Inter](https://rsms.me/inter/)** | 30/30 v ověřeném Google Fonts souboru; SIL OFL 1.1 | Váhy 100–900 a osa optické velikosti; autor výslovně řeší textové i velké velikosti | Výborný referenční standard pro text a složité UI; pro CFW menší vlastní charakter | Kontrolní kandidát pro čitelnost, ne první volba pro vizuální identitu |
| **[Satoshi](https://www.fontshare.com/fonts/satoshi)** | Autor výslovně uvádí češtinu; binární cmap zde netestován; ITF FFL 2.0 | 10 statických a 2 variabilní řezy; primární stránka uvádí 504 glyphů a výchozí dvoupatrové `a` a `g` | Silná možnost pro branding a editorial; nejsou důvody tvrdit, že neumí češtinu nebo není pro komerční web zdarma | Pro tento veřejný zdrojový repozitář jej nevolím: není pod OFL a omezuje další distribuci fontových souborů |

### Satoshi: přesné licenční rozlišení

Živá oficiální licence Fontshare byla ověřena v prohlížeči, protože její veřejná HTML stránka se bez JavaScriptu nezobrazuje. **ITF FFL 2.0 z 17. 8. 2026 dovoluje self-hosting vlastního webu.** Zároveň omezuje modifikace, subsetting, konverze a redistribuci samotných fontových souborů, výslovně i přes repozitáře. Z toho plyne praktická preference OFL pro tento projekt s veřejným GitHub repozitářem; nejde o zákaz běžného použití Satoshi na vlastním komerčním webu. [Oficiální ITF FFL](https://www.fontshare.com/licenses/itf-ffl)

## Technické ověření znaků a přenosu

Pomocí `fontTools` 4.62.1 byly prověřeny cmap tabulky. Testovaná množina byla `áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ` — 30 znaků, ne pouze obecné označení „Latin Extended“.

U Onest, Geist a Plus Jakarta byly ověřeny přímo aktuálně instalované soubory `@fontsource-variable` pro Latin a Latin Extended. Všechny prošly bez chybějícího znaku. Inter byl prověřen z aktuálního binárního souboru v primárním repozitáři Google Fonts. [Onest metadata](https://github.com/google/fonts/blob/main/ofl/onest/METADATA.pb), [Geist metadata](https://github.com/google/fonts/blob/main/ofl/geist/METADATA.pb), [Plus Jakarta metadata](https://github.com/google/fonts/blob/main/ofl/plusjakartasans/METADATA.pb), [Inter metadata](https://github.com/google/fonts/blob/main/ofl/inter/METADATA.pb)

| Distribuce použitelná v projektu | Součet Latin + Latin Extended, normální variabilní WOFF2 | Balíček | Výsledek CZ testu |
|---|---:|---|---|
| Onest | 62 212 B | `@fontsource-variable/onest` 5.3.1 | 30/30 |
| Geist | 45 912 B | `@fontsource-variable/geist` 5.3.0 | 30/30 |
| Plus Jakarta Sans | 49 076 B | `@fontsource-variable/plus-jakarta-sans` 5.3.0 | 30/30 |

Jde o součet velikostí dvou konkrétních fontových souborů, ne o naměřenou dobu načtení stránky. Rozdíl přibližně 16 kB mezi Onest a Geist není pro tento web důvod obětovat vhodnější vizuální tón. Výkon se zlepší hlavně použitím jedné aktivní rodiny, normálních řezů, WOFF2, `font-display: swap` a načítáním pouze potřebných znakových sad. Rodiny srovnávacího nástroje nemají být současně použité v běžném obsahu webu.

U aktuálních úplných souborů Google Fonts byly naměřeny tyto poměry x-height k em: Onest 0,527; Geist 0,530; Plus Jakarta 0,536; Inter 0,546. Samotná vyšší hodnota neurčuje vítěze čitelnosti. Význam má i tvar jednotlivých znaků, mezery, váha, velikost a konkrétní rozvržení.

## Doporučený systém sazby

| Role | Doporučení pro Onest | Důvod |
|---|---|---|
| Hlavní titulek | 500–600, velikost podle viewportu, řádkování přibližně 1,0–1,08 | Výraz vznikne pevným řezem a měřítkem, ne vlasovými tahy |
| Sekční titulky | 500–600; na mobilu přibližně 36–48 px, podle skutečné délky | Česká slova se nesmí ořezávat ani vytlačovat obsah |
| Dlouhý text | 16–18 px podle role, globální základ 17 px / 1,65; úvodní texty 18 px a větší; pohodlná šířka přibližně 60–70 znaků | Čitelný rytmus odstavců a dostatečná velikost |
| Navigace, tlačítka, filtry | 14 px nebo větší, řez 500–600, běžný tracking | Ovládání má být čitelné bez přibližování |
| Popisky, kredity, štítky | 13 px jako výchozí minimum pro nosnou informaci | Kredit, rok a místo nejsou pouhá dekorace |
| Datum, čas, počty médií | Stejná rodina, `tabular-nums` tam, kde se údaje porovnávají | Přehledné číslice bez dalšího stahovaného písma |
| Prostrkání | Běžný text 0; velké titulky nejvýše mírně záporné, přibližně −0,02em | Žádné plošné stlačení dlouhých českých slov |
| Kurziva | Vynechat z navigace a všech důležitých instrukcí | Odstranit zbytečný rozdíl mezi ozdobným a funkčním textem |

Tyto rozměry jsou výchozí návrhářské hodnoty pro tento web, nikoli požadavek WCAG na konkrétní počet pixelů. Při implementaci má přednost čitelný celek a přirozené zalomení.

**Aktuální implementace:** kontrola zdrojů potvrzuje jednu rodinu `Onest Variable`, globální základ 17 px, řádkování běžného textu 1,65 a velikosti souvislého textu podle role přibližně 16–18 px; úvodní texty začínají na 18 px a mohou být větší. Ovládání má většinou 14 px, formulářová pole 16 px a podpůrné popisky nejméně 13 px. Významné titulky mají řez 500 a přirozené řádkování bez dekorativní kurzivy. Srovnávací stránka `/design-system/` je označena `noindex` a není součástí zákaznické navigace; nabízí stejný upravitelný český text v 16–20 px pro Onest, Geist, Plus Jakarta Sans a původní dvojici Bodoni/Manrope.

### Kontrast a přizpůsobitelnost

Výchozí barvy byly přepočteny podle relativní sRGB luminance. `#101010` na `#F4F1EB` má přibližně **16,88 : 1**, `#706D66` na tomto papírovém pozadí **4,58 : 1** a na bílé **5,16 : 1**. Zlatá `#BAA06B` na papírovém pozadí má jen **2,24 : 1**. Zlatá se proto nehodí pro malý nosný text. U nápisu přes fotografii je nutno hodnotit skutečnou plochu fotografie a překryvu, samotná bílá barva textu nestačí. Pro běžný text je relevantní minimum 4,5 : 1. [W3C: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Nový typografický soubor ztmavuje sekundární text na `#5E5A53` a pro zlatý text na světlém pozadí zavádí `#806234`. Na `#F4F1EB` to dává přibližně **6,08 : 1** a **5,02 : 1**. Jsou to výpočty konkrétních plných barev, nikoli audit všech stavů rozhraní nebo textu nad fotografiemi.

Web má také zachovat obsah při zvětšení textu na 200 % a nemá blokovat uživatelské změny mezer. Požadavek na přizpůsobení řádkování a mezer neznamená, že autor musí všude předepsat stejné hodnoty; znamená, že po uživatelském přenastavení nesmí mizet obsah ani ovládání. [W3C: Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [W3C: Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

## Srovnávací scénáře před rozhodnutím

Pro Onest, Geist a Plus Jakarta používat totožný český text, stejnou skutečnou velikost a stejný řez. Srovnání zkresluje, pokud jeden kandidát dostane 18 px a druhý 14 px nebo jsou u jednoho ponechané původní úzké mezery. Bodoni + Manrope slouží jako zaznamenaná výchozí varianta.

1. **Titulek:** „Móda. Naživo.“ a „Vytvářejme příběhy společně.“ — bez ořezání na úzké obrazovce.
2. **Běžný odstavec:** tři české odstavce v 16, 18 a 20 px; hodnotit rytmus a čtení, ne pouze dekorativní efekt první řádky.
3. **Ovládání:** Program, Návrháři, Partneři, Zrušit filtry, Připravit e-mail — přímé čtení na mobilu.
4. **Rozlišení znaků:** `I l 1`, `O 0`, `rn m`, `č ď ť ě Ř`, `20. 11. 2026 · 20:00` — zejména u metadat a počítadel.
5. **Skutečné stránky:** úvodní fotografie, hustší archiv, dlouhý profil, kontakt, názvy partnerských institucí. Neposuzovat jen čistý fontový vzorník.
6. **Adaptace:** mobil, desktop, zvětšený text; žádné vodorovné přetékání nebo skrytý konec slov.

Konečné doporučení je **Onest v pevnější a větší sazbě**. Pokud uživatel při přímém srovnání preferuje přísnější tón, Geist je rovnocenně připravený technický finalista. Ke zvýšení čitelnosti musí u obou současně proběhnout zvětšení UI a popisků, úprava řádkování, normalizace mezer a dostatečný kontrast.

## Kontrola implementace

V prohlížeči byly při skutečné šířce 320 px ověřeny úvod, partneři, návrháři, detail programu, kontakt, archiv a srovnávací stránka; žádná z těchto šablon neměla vodorovné přetékání ani viditelný podpůrný text pod 13 px. U programu proběhla i vizuální kontrola na 390 px; všech sedm šablon prošlo kontrolou na 1440 px. Těsné odkazy na ročníky archivu byly na úzkém mobilu rozděleny do dvou sloupců.

Srovnávací nástroj skutečně přepíná všechny čtyři varianty, velikosti 16–20 px, váhu titulku a tmavý podklad; ukázka v šířce 320 px nepřetéká ani při 20 px. Astro check: 0 chyb, 0 varování, 0 hints; produkční build: 365 stran. Jde o technickou a návrhářskou kontrolu uvedených scénářů, nikoli uživatelský výzkum nebo úplnou certifikaci přístupnosti.
