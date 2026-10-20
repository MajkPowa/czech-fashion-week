# Prodej vstupenek — ověřeno 20. října 2026

- CFW Praha: https://cfw.cz/praha/
- Oficiální prodej: https://www.ticketportal.cz/event/Czech-Fashion-Week-GLAMOUR#vstupenky
- Událost: Czech Fashion Week Glamour, 20. listopadu 2026, PVA EXPO Praha, Hala 1. Tlačítko „Koupit“ u prodejce otevřelo výběr míst; žádné místo nebylo vybráno a žádná rezervace nevznikla.
- Reenio https://czech-fashion-week.reenio.cz/cs/terms nyní hlásí pozastavené vytváření nových rezervací. Brno a Mariánské Lázně 2026 již proběhly; jejich detaily nenabízejí aktivní nákup.

URL a prodejce mají jediný zdroj v `src/data/events.ts`. Komponenta `TicketLink.astro` vykresluje přímý odkaz jen pro potvrzenou událost s prodejním URL. Ceny ani aktuální počty míst se nekopírují; návštěvník je uvidí u prodejce.

Přímé nákupní odkazy jsou v hero a pruhu nejbližší akce, programu, záhlaví i informačním panelu detailu, kontaktu, navigaci a patičce. Všechny externí odkazy mají `noopener noreferrer`; přístupný název identifikuje akci a prodejce i otevření nového panelu.

Ověření: Astro check bez chyb a varování; produkční sestavení 370 stránek; proklik z homepage na Ticketportal; kontrola HTML prodejních odkazů a absence nákupních CTA v obsahu historických akcí; vizuální kontrola desktopu a mobilu 320 px včetně menu a detailu.

## Dostupnost nákupu při scrollování

Na displejích do 760 px je nákup stále dostupný ve spodním pevném pruhu s místem a datem příští události. Sdílený layout jej vykresluje na všech stránkách; otevřená modální galerie má vlastní stejný pruh. Pod obsahem, v mobilním menu a v galerii je vyhrazen prostor včetně bezpečné oblasti zařízení.

Desktopové hero zvýrazňuje datum, rok, čas a místo příští akce ve vlastním kontrastním bloku. Datum i mobilní pruh vycházejí ze stejného `primaryTicketEvent` jako prodejní odkazy.

Vizuálně ověřeno na šířkách 320 a 390 px při scrollování, v menu, u patičky a v otevřené galerii; hero na 960 a 1422 px. Astro check bez chyb a varování, produkční build 370 stránek.
