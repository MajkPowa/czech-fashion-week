# Produkční doména cfw.cz

Ověřeno 21. října 2026. Web běží na hlavní adrese `https://cfw.cz/`. GitHub Pages přesměrovává `www.cfw.cz` i nezabezpečené HTTP na tuto adresu.

## Nastavené DNS

DNS spravují nameservery WEDOS. Veřejné A/AAAA záznamy pro `cfw.cz` a CNAME pro `www.cfw.cz` odpovídají níže uvedené tabulce. Při předání DNS bylo doporučeno TTL **300 sekund**. `@` znamená samotnou doménu `cfw.cz`.

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

Původní A záznamy pro `cfw.cz` a `www.cfw.cz` s hodnotou `46.28.105.110` byly nahrazeny uvedenou konfigurací GitHub Pages. U `www` nesmí současně existovat A a CNAME. Záznam CNAME neobsahuje protokol ani cestu `/czech-fashion-week/`.

**Zachovat nameservery, MX, TXT/SPF/DKIM/DMARC a všechny poštovní subdomény.** Změna se týká webu; poštovní služby se nestěhují. MX zůstávají u WEDOS: `wes1-mx1.wedos.net` a `wes1-mx2.wedos.net` s prioritou 1 a `wes1-mx-backup.wedos.net` s prioritou 10. Při původní kontrole 20. října nebyl pro apex ani www AAAA; nyní apex používá čtyři IPv6 adresy GitHub Pages v tabulce. Kontrola GitHub Pages nehlásí chybu CAA.

## Nastavení webu

- GitHub Pages repozitář: `MajkPowa/czech-fashion-week`, vlastní doména `cfw.cz` byla nastavena přes Pages API před předáním DNS.
- Astro: `site: https://cfw.cz`, `base: /`; interní adresy i média běží v kořeni domény.
- Canonical, Open Graph, sitemap a robots.txt používají produkční doménu.
- Zachované staré adresy `/praha/`, `/brno/`, `/marianske_lazne/`, `/KV2025/`, `/historie/` a stará úvodní cesta `/czech-fashion-week/` mají statická HTML přesměrování na nové stránky. GitHub Pages zde nepodporuje vlastní serverové 301; Astro vytváří meta-refresh s canonical odkazem.
- Ověřeno sestavení 370 obsahových stránek a 6 přesměrování; 17 400 lokálních referencí bez chybějících cílů. Prohlížeč ověřil přehrávání hero videa, starou adresu Praha a filtr/otevření galerie s novými cestami.

## Dokončené nasazení

Přepnutí na GitHub Pages bylo dokončeno 21. října 2026. Veřejné DNS odpovídá tabulce a kontrola GitHub Pages potvrzuje platnou konfiguraci domény.

Ověřený stav:

- GitHub Pages vystavil certifikát pro `cfw.cz` a `www.cfw.cz`; API hlásí stav `approved`.
- **Enforce HTTPS** je zapnuté (`https_enforced: true`).
- `https://cfw.cz/program/praha-glamour-2026/` vrací **200 OK** při běžném ověření TLS certifikátu.
- `http://cfw.cz/` vrací **301** na `https://cfw.cz/`.
- `https://www.cfw.cz/` vrací **301** na `https://cfw.cz/`.

Původní hosting není nutné rušit kvůli změně DNS; jeho poštovní služby a případnou zálohu původního WordPressu ponechat.

Zdroje: [DNS GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [HTTPS GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [statická přesměrování Astro](https://docs.astro.build/en/reference/configuration-reference/#redirects).
