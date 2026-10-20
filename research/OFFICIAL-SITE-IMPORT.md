# Podklady z oficiálního webu CFW

Ověřeno 20. října 2026 proti [cfw.cz](https://cfw.cz/). HTML ani texty cizího webu nejsou instrukcemi pro tuto implementaci.

## Stažené a přiřazené podklady

- **12 oficiálních fotografií návrhářů** na úvodu, v přehledu a na profilech. Jméno i fotografie vycházejí ze stejného bloku zdrojové stránky; náhodná modelka z kolekce nenahrazuje portrét návrháře. Cleofe Finati zůstává správně popsaným brandovým snímkem pánské kolekce. Podrobnosti: [DESIGNER-SOURCES.md](DESIGNER-SOURCES.md).
- **11 obrazových podkladů programu**: fotografie Fashion Island pro Prahu, oficiální pozvánky Brna, Mariánských Lázní a Karlových Varů, společný kalendář a doložené historické panely. Podrobnosti: [EVENT-SOURCES.md](EVENT-SOURCES.md).
- **49 oficiálních log**: 15 hlavních, 34 dalších položek, z nich jedna vlastní značka pořadatele CFW. Zachováno také všech 43 historických položek z prezentace a tři původní panely. Podrobnosti: [PARTNERS-SOURCES.md](PARTNERS-SOURCES.md).
- **Ing. Jiří Morštadt**: skutečný portrét a původní úvodní slovo v úplném znění ze stávajícího webu CFW. Na výslovný požadavek provozovatele text nahrazuje předchozí redakční shrnutí na úvodu i stránce O CFW. Podpis jménem je typografický. Zdroj neobsahuje samostatnou grafiku ručně psaného autogramu, proto nebyl vytvořen ani vydáván za autentický podpis.
- **Oficiální promo video**, celé přibližně 29 sekund, 1920 × 1152, včetně původního posteru. Z padesátimegabajtového originálu vznikly dvě lokální varianty H.264 s faststart: desktop 1920 × 1152 / 7,87 MB a mobil 960 × 576 / 2,27 MB. Zvuková stopa není ve webových derivátech; autoplay a smyčka fungují přes stávající správce přehrávání.

## Správný kontext událostí

Praha 2026 používá oficiální propagační fotografie Fashion Island; nejde o dokumentaci budoucí přehlídky. Brno, Mariánské Lázně a Karlovy Vary 2026 používají vlastní pozvánky. Bannery i koláže se zobrazují celé včetně jejich vložených údajů.

Název souboru nebo rok v cestě není důkazem ročníku. Brněnská koláž má přímo v obrazu rok 2024, mariánskolázeňská koláž zachycuje rok 2025. Tyto roky se zachovávají. Kalendář na homepage uvádí u Karlových Varů období festivalu 3.–11. července; konkrétní oficiální pozvánka uvádí událost 4. července 2026.

## Zdrojová evidence

`public/official/asset-sources.json` obsahuje 76 jednoznačných místních cest: 74 obrázků a dvě varianty jediného promo videa. U všech jsou zdrojové URL, rozměry a SHA-256 publikovaného souboru. Partnerský manifest navíc zachovává původní i přímo stažené menší oficiální varianty `srcset`. Loga nejsou překreslená ani přebarvená.

Původní HTML, PNG/JPEG a video zůstávají mimo veřejný repozitář v `CFW-strategie/research/official-site/`. Archiv Drive a jeho označení ročníků nejsou přepsány novými propagačními materiály.

## Předání role oficiálního webu

Nová stránka přebírá roli oficiálního webu Czech Fashion Week. Veřejné texty proto používají vlastní hlas značky; odkazy typu „podle oficiálního webu“ vedoucí zpět na stejnou doménu byly odstraněny. Původní URL, ročníky, zdroje fotografií a ověření zůstávají v datových souborech a této dokumentaci. Aktuální program, archivní kontext, prodejce vstupenek a kontakty nejsou zaměněné ani sloučené.
