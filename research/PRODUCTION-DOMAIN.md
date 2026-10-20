# Produkční doména cfw.cz

Ověřeno 20. října 2026. Hlavní adresa je `https://cfw.cz/`, varianta `www.cfw.cz` má směřovat na tentýž web a GitHub Pages ji přesměruje na hlavní doménu.

## DNS pro majitele domény

DNS nyní spravují nameservery WEDOS. Nastavit TTL **300 sekund** pro všechny níže uvedené záznamy. `@` znamená samotnou doménu `cfw.cz`.

| Typ | Název | Hodnota |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | majkpowa.github.io. |

Nahradit současný A záznam pro `cfw.cz` s hodnotou `46.28.105.110`. Odstranit současný A záznam pro `www.cfw.cz` se stejnou IP a nahradit jej uvedeným CNAME. U `www` nesmí současně existovat A a CNAME. Záznam CNAME neobsahuje protokol ani cestu `/czech-fashion-week/`.

**Zachovat nameservery, MX, TXT/SPF/DKIM/DMARC a všechny poštovní subdomény.** Jde pouze o přesměrování webu; poštovní služby se nestěhují. Stávající MX cíle jsou `wes1-mx1.wedos.net` a `wes1-mx2.wedos.net` s prioritou 1 a `wes1-mx-backup.wedos.net` s prioritou 10. Pro apex ani www při kontrole nebyl AAAA; žádný CAA záznam nebyl nalezen.

## Nastavení webu

- GitHub Pages repozitář: `MajkPowa/czech-fashion-week`, vlastní doména `cfw.cz` byla nastavena přes Pages API před předáním DNS.
- Astro: `site: https://cfw.cz`, `base: /`; interní adresy i média běží v kořeni domény.
- Canonical, Open Graph, sitemap a robots.txt používají produkční doménu.
- Zachované staré adresy `/praha/`, `/brno/`, `/marianske_lazne/`, `/KV2025/`, `/historie/` a stará úvodní cesta `/czech-fashion-week/` mají statická HTML přesměrování na nové stránky. GitHub Pages zde nepodporuje vlastní serverové 301; Astro vytváří meta-refresh s canonical odkazem.
- Ověřeno sestavení 370 obsahových stránek a 6 přesměrování; 17 400 lokálních referencí bez chybějících cílů. Prohlížeč ověřil přehrávání hero videa, starou adresu Praha a filtr/otevření galerie s novými cestami.

## Dokončení po změně DNS

Při přípravě stále veřejné DNS ukazovalo na původní hosting. Nový web proto dosud neběžel na veřejné doméně cfw.cz. GitHub Pages při nastavení nové domény dočasně vypnul `https_enforced`, protože certifikát pro ni zatím není připraven.

Po změně DNS:

1. Ověřit všechny A/AAAA pro cfw.cz a CNAME www proti tabulce a zelenou kontrolu DNS na GitHub Pages.
2. Po vystavení certifikátu GitHub Pages zapnout **Enforce HTTPS** v nastavení repozitáře; lze také `gh api --method PUT repos/MajkPowa/czech-fashion-week/pages -F https_enforced=true`.
3. Ověřit HTTPS na cfw.cz, přesměrování www, média, program a nákupní odkazy. Do té doby neoznačovat přepnutí domény za dokončené. Propagace DNS a zpřístupnění HTTPS může podle GitHubu trvat až 24 hodin.

Původní hosting není nutné rušit kvůli změně DNS; jeho poštovní služby a případnou zálohu původního WordPressu ponechat.

Zdroje: [DNS GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [HTTPS GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [statická přesměrování Astro](https://docs.astro.build/en/reference/configuration-reference/#redirects).
