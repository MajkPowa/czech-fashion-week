export type EventStatus = 'completed' | 'unannounced' | 'confirmed';

export interface EventImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  sourceUrl: string;
  kind: 'photo' | 'banner' | 'panel';
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  city: string;
  year: number | null;
  date: string | null;
  endDate?: string | null;
  dateLabel: string;
  venue: string | null;
  status: EventStatus;
  description: string;
  designers: string[];
  sourceUrl: string | null;
  ticketUrl?: string;
  ticketProvider?: string;
  time?: string;
  address?: string;
  dressCode?: string;
  practicalInfo?: string[];
  programme?: { time: string; title: string; description?: string }[];
  archiveYear?: number;
  archiveCity?: string;
  imageCaption?: string;
  image?: EventImage;
  gallery?: EventImage[];
}

export const events: Event[] = [
  {
    id: 'praha-glamour-2026', slug: 'praha-glamour-2026',
    title: 'Czech Fashion Week Glamour', city: 'Praha', year: 2026,
    date: '2026-11-20T20:00:00+01:00', dateLabel: '20. listopadu 2026',
    venue: 'PVA EXPO Praha Letňany · Hala 1', status: 'confirmed',
    description: 'Pražský večer představí Fashion Island SS27 a LYANIS Couture. Resort fashion a couture doplní hudební a společenský program.',
    designers: ['fashion-island'], sourceUrl: 'https://cfw.cz/praha/',
    ticketUrl: 'https://www.ticketportal.cz/event/Czech-Fashion-Week-GLAMOUR#vstupenky',
    ticketProvider: 'Ticketportal',
    time: '20:00', address: 'Beranových 667, Praha 9–Letňany', dressCode: 'Cocktail Chic',
    practicalInfo: [
      'Začátek přehlídky je ve 20:00.',
      'Vstupenky a jejich aktuální dostupnost zajišťuje Ticketportal.',
      'Vstup do areálu od 19:00. Organizační pokyny si před návštěvou ověřte na vstupence.',
    ],
    programme: [
      { time: '20:00', title: 'Czech Fashion Week Glamour', description: 'Fashion Island SS27 a LYANIS Couture.' },
      { time: 'Po přehlídce', title: 'Společenská část', description: 'Navazující společenský a hudební program.' },
    ],
    archiveYear: 2024, archiveCity: 'Brno',
    image: { src: 'official/events/praha-1.webp', width: 1700, height: 1133, alt: 'Fashion Island: modelka před velkoplošnou projekcí moře.', caption: 'Fashion Island · Propagační fotografie kolekce pro CFW Glamour Praha 2026.', sourceUrl: 'https://cfw.cz/praha/', kind: 'photo' },
    gallery: [
      { src: 'official/events/praha-glamour-2026-banner.webp', width: 775, height: 968, alt: 'Oficiální pozvánka CFW Glamour Praha na 20. listopadu 2026 v PVA EXPO Praha.', caption: 'Oficiální pozvánka CFW Glamour Praha 2026.', sourceUrl: 'https://cfw.cz/', kind: 'banner' },
      { src: 'official/events/praha-2.webp', width: 955, height: 637, alt: 'Modelky představují plavkovou kolekci Fashion Island.', caption: 'Propagační fotografie Fashion Island zveřejněná k pražské události. Nejde o dokumentaci budoucí přehlídky.', sourceUrl: 'https://cfw.cz/praha/', kind: 'photo' },
      { src: 'official/events/praha-3.webp', width: 1133, height: 1700, alt: 'Modelka v bílém kompletu na přehlídkovém mole Fashion Island.', caption: 'Fashion Island · Propagační runway fotografie.', sourceUrl: 'https://cfw.cz/praha/', kind: 'photo' },
    ],
  },
  {
    id: 'marianske-lazne-2026', slug: 'marianske-lazne-2026', title: 'Czech Fashion Week Mariánské Lázně',
    city: 'Mariánské Lázně', year: 2026, date: '2026-09-05', dateLabel: '5. září 2026', venue: 'Kolonáda Maxima Gorkého', status: 'completed',
    description: 'Mariánské Lázně, Kolonáda Maxima Gorkého a zářijová módní událost Czech Fashion Week 2026.',
    designers: [], sourceUrl: 'https://cfw.cz/marianske_lazne/',
    image: { src: 'official/events/marianske-lazne-1.webp', width: 1013, height: 454, alt: 'Oficiální banner Czech Fashion Week Mariánské Lázně, 5. září 2026, Kolonáda Maxima Gorkého.', caption: 'Oficiální pozvánka Mariánské Lázně 2026. Zdroj: CFW.', sourceUrl: 'https://cfw.cz/marianske_lazne/', kind: 'banner' },
  },
  {
    id: 'brno-2026', slug: 'brno-2026', title: 'Czech Fashion Week Brno',
    city: 'Brno', year: 2026, date: '2026-08-22', dateLabel: '22. srpna 2026', venue: 'STYL a KABO · Veletrhy Brno', status: 'completed',
    description: 'Brněnská událost sezóny 2026 byla součástí prostředí veletrhů STYL a KABO.',
    designers: [], sourceUrl: 'https://cfw.cz/brno/', archiveYear: 2024, archiveCity: 'Brno',
    image: { src: 'official/events/brno-1.webp', width: 1010, height: 453, alt: 'Oficiální banner Czech Fashion Week Brno, 22. srpna 2026, Veletrhy Brno STYL a KABO.', caption: 'Oficiální pozvánka Brno 2026. Zdroj: CFW.', sourceUrl: 'https://cfw.cz/brno/', kind: 'banner' },
  },
  {
    id: 'karlovy-vary-2026', slug: 'karlovy-vary-2026', title: 'Czech Fashion Week Karlovy Vary',
    city: 'Karlovy Vary', year: 2026, date: '2026-07-04', dateLabel: '4. července 2026', venue: null, status: 'completed',
    description: 'Czech Fashion Week Karlovy Vary 2026 přináší módu do období mezinárodního filmového festivalu. Termín přehlídky: 4. července 2026.',
    designers: [], sourceUrl: 'https://cfw.cz/KV2025/', archiveYear: 2023, archiveCity: 'Karlovy Vary',
    image: { src: 'official/events/karlovy-vary-1.webp', width: 1040, height: 459, alt: 'Oficiální banner Czech Fashion Week Karlovy Vary se značkou Beáta Rajská a datem 4. července 2026.', caption: 'Oficiální pozvánka Karlovy Vary 2026. Datum akce je uvedeno přímo v banneru.', sourceUrl: 'https://cfw.cz/KV2025/', kind: 'banner' },
  },
  {
    id: 'marianske-lazne-2025', slug: 'marianske-lazne-2025', title: 'Czech Fashion Week Mariánské Lázně 2025',
    city: 'Mariánské Lázně', year: 2025, date: null, dateLabel: 'Ročník 2025', venue: null, status: 'completed',
    description: 'Ohlédnutí za ročníkem 2025 v Mariánských Lázních. Skupinová fotografie modelek zachycuje kolekci Luďka Hanáka.',
    designers: ['ludek-hanak'], sourceUrl: 'https://cfw.cz/marianske_lazne/',
    image: { src: 'official/events/marianske-lazne-2.webp', width: 987, height: 603, alt: 'Tým modelek v kolekci Luďka Hanáka na Czech Fashion Week Mariánské Lázně 2025.', caption: 'Mariánské Lázně 2025 · Kolekce Luďka Hanáka. Původní popisek ročníku je součástí fotografie.', sourceUrl: 'https://cfw.cz/marianske_lazne/', kind: 'panel' },
  },
  {
    id: 'karlovy-vary-2025', slug: 'karlovy-vary-2025', title: 'Czech Fashion Week Karlovy Vary 2025',
    city: 'Karlovy Vary', year: 2025, date: null, dateLabel: 'Ročník 2025', venue: 'Poštovní dvůr', status: 'completed',
    description: 'Přehlídka Debbie Brown v Poštovním dvoře v roce 2025. Scénografie pracovala se sněhem uprostřed červencového festivalového období.',
    designers: ['debbie-brown'], sourceUrl: 'https://cfw.cz/KV2025/',
    image: { src: 'official/events/karlovy-vary-2.webp', width: 989, height: 669, alt: 'Fotokoláž Karlových Varů: modelka na zasněžené scéně a dvojice při závěrečném defilé.', caption: 'Karlovy Vary 2025 · Přehlídka Debbie Brown.', sourceUrl: 'https://cfw.cz/KV2025/', kind: 'panel' },
  },
  {
    id: 'brno-2024', slug: 'brno-2024', title: 'Czech Fashion Week Brno 2024',
    city: 'Brno', year: 2024, date: null, dateLabel: 'Ročník 2024', venue: null, status: 'completed',
    description: 'Bílá runway, tmavý sál a autorské kolekce pod bodovými světly. Brněnský archiv propojuje fotografické série s krátkými vertikálními záznamy.',
    designers: ['anna-anna', 'cleofe-finati', 'jitka-klett', 'ludek-hanak', 'helena-bedrnova', 'fashion-island'],
    sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2024, archiveCity: 'Brno', imageCaption: 'Czech Fashion Week · Brno 2024',
    image: { src: 'official/events/brno-2.webp', width: 1240, height: 537, alt: 'Společné defilé Cleofe Finati a Nefeli Exclusive na Czech Fashion Week Brno 2024.', caption: 'Brno 2024 · Cleofe Finati a Nefeli Exclusive. Ročník potvrzuje původní popisek uvnitř obrazového panelu.', sourceUrl: 'https://cfw.cz/brno/', kind: 'panel' },
  },
  {
    id: 'teplice-2023', slug: 'teplice-2023', title: 'Czech Fashion Week Teplice 2023',
    city: 'Teplice', year: 2023, date: null, dateLabel: 'Ročník 2023', venue: null, status: 'completed',
    description: 'Přirozené světlo a bezprostřední kontakt s publikem vytvářejí v teplickém archivu vlastní přehlídkovou náladu. Výběr zahrnuje různé autorské rukopisy i experimentální tvorbu.',
    designers: ['jitka-klett', 'jiri-moravec', 'ludek-hanak', 'nada-moravcova', 'fashion-island'],
    sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2023, archiveCity: 'Teplice', imageCaption: 'Czech Fashion Week · Teplice 2023',
  },
  {
    id: 'karlovy-vary-2023', slug: 'karlovy-vary-2023', title: 'Czech Fashion Week Karlovy Vary 2023',
    city: 'Karlovy Vary', year: 2023, date: null, dateLabel: 'Ročník 2023', venue: 'Thermal · Saunia', status: 'completed',
    description: 'Letní exteriér, voda a červený koberec. Karlovarské fotografie zachycují resort kolekce i setkávání v odlišném prostředí než sálová runway.',
    designers: ['fashion-island'], sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2023, archiveCity: 'Karlovy Vary', imageCaption: 'Czech Fashion Week · Karlovy Vary 2023',
  },
  {
    id: 'casting-jalta-2023', slug: 'casting-jalta-2023', title: 'Casting Jalta 2023',
    city: 'Casting Jalta', year: 2023, date: null, dateLabel: 'Ročník 2023', venue: 'Jalta', status: 'completed',
    description: 'Historická castingová kapitola ukazuje individuální prezentaci, focení u logostěny a krátké portrétní záznamy. Jde o castingový archiv, nikoli o otevřenou přihlášku.',
    designers: [], sourceUrl: null, archiveYear: 2023, archiveCity: 'Casting Jalta', imageCaption: 'Archiv · Casting Jalta 2023',
  },
  {
    id: 'teplice-2022', slug: 'teplice-2022', title: 'Czech Fashion Week Teplice 2022',
    city: 'Teplice', year: 2022, date: null, dateLabel: 'Ročník 2022', venue: null, status: 'completed',
    description: 'Proměnlivá světelná scénografie rámuje satén, barevné vzory i resort kolekce. Ročník je v archivu členěný podle jednotlivých autorských alb.',
    designers: ['nada-moravcova', 'gabriela-giotto', 'jiri-moravec', 'ludek-hanak', 'osmany-laffita', 'fashion-island'],
    sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2022, archiveCity: 'Teplice', imageCaption: 'Czech Fashion Week · Teplice 2022',
  },
  {
    id: 'teplice-2021', slug: 'teplice-2021', title: 'Czech Fashion Week Teplice 2021',
    city: 'Teplice', year: 2021, date: null, dateLabel: 'Ročník 2021', venue: null, status: 'completed',
    description: 'Denní světlo, publikum podél bílé dráhy a střídání tlumených i výrazně barevných modelů. Originální fotografické kredity a označení ročníku zůstávají zachované.',
    designers: [], sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2021, archiveCity: 'Teplice', imageCaption: 'Czech Fashion Week · Teplice 2021',
  },
  {
    id: 'teplice-2020', slug: 'teplice-2020', title: 'Czech Fashion Week Teplice 2020',
    city: 'Teplice', year: 2020, date: null, dateLabel: 'Ročník 2020', venue: null, status: 'completed',
    description: 'Prosklené atrium, dlouhá perspektiva mola a tyrkysové světlo. K fotografiím přehlídky patří intimnější dokumentární záběry příprav, líčení a zákulisí.',
    designers: [], sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2020, archiveCity: 'Teplice', imageCaption: 'Czech Fashion Week · Teplice 2020',
  },
];

export const upcomingEvents = events.filter((event) => event.status === 'confirmed');
export const completedEvents = events.filter((event) => event.status === 'completed');
export const primaryTicketEvent = upcomingEvents.find((event) => event.ticketUrl);
