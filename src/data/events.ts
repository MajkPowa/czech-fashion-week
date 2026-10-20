export type EventStatus = 'completed' | 'unannounced' | 'confirmed';

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
  time?: string;
  address?: string;
  dressCode?: string;
  practicalInfo?: string[];
  programme?: { time: string; title: string; description?: string }[];
  archiveYear?: number;
  archiveCity?: string;
  imageCaption?: string;
}

export const events: Event[] = [
  {
    id: 'praha-glamour-2026', slug: 'praha-glamour-2026',
    title: 'Czech Fashion Week Glamour', city: 'Praha', year: 2026,
    date: '2026-11-20T20:00:00+01:00', endDate: '2026-11-21T00:00:00+01:00', dateLabel: '20. listopadu 2026',
    venue: 'PVA EXPO Praha Letňany · Hala 1', status: 'confirmed',
    description: 'Pražský večer představí Fashion Island SS27 a LYANIS Couture. Resort fashion a couture doplní hudební a společenský program.',
    designers: ['fashion-island'], sourceUrl: 'https://cfw.cz/praha/',
    ticketUrl: 'https://www.ticketportal.cz/event/Czech-Fashion-Week-GLAMOUR',
    time: '20:00', address: 'Beranových 667, Praha 9–Letňany', dressCode: 'Cocktail Chic',
    practicalInfo: [
      'Začátek přehlídky je podle oficiálního programu ve 20:00.',
      'Vstupenky a jejich aktuální dostupnost zajišťuje Ticketportal.',
      'Čas příchodu a organizační pokyny si před návštěvou ověřte u pořadatele nebo na vstupence.',
    ],
    programme: [
      { time: '20:00', title: 'Czech Fashion Week Glamour', description: 'Fashion Island SS27 a LYANIS Couture.' },
      { time: 'Po přehlídce', title: 'Společenská část', description: 'Navazující společenský a hudební program podle pořadatele.' },
    ],
    archiveYear: 2024, archiveCity: 'Brno', imageCaption: 'Ilustrační archivní fotografie · Czech Fashion Week Brno 2024',
  },
  {
    id: 'marianske-lazne-2026', slug: 'marianske-lazne-2026', title: 'Czech Fashion Week Mariánské Lázně',
    city: 'Mariánské Lázně', year: 2026, date: '2026-09-05', dateLabel: '5. září 2026', venue: null, status: 'completed',
    description: 'Mariánské Lázně byly jednou ze zastávek sezóny 2026. Termín je doložený oficiálním programem pořadatele.',
    designers: [], sourceUrl: 'https://cfw.cz/',
  },
  {
    id: 'brno-2026', slug: 'brno-2026', title: 'Czech Fashion Week Brno',
    city: 'Brno', year: 2026, date: '2026-08-22', dateLabel: '22. srpna 2026', venue: 'STYL a KABO · Veletrhy Brno', status: 'completed',
    description: 'Brněnská událost sezóny 2026 byla součástí prostředí veletrhů STYL a KABO.',
    designers: [], sourceUrl: 'https://cfw.cz/', archiveYear: 2024, archiveCity: 'Brno', imageCaption: 'Archivní fotografie · Brno 2024',
  },
  {
    id: 'karlovy-vary-2026', slug: 'karlovy-vary-2026', title: 'Czech Fashion Week Karlovy Vary',
    city: 'Karlovy Vary', year: 2026, date: '2026-07-03', endDate: '2026-07-11', dateLabel: '3.–11. července 2026', venue: null, status: 'completed',
    description: 'Oficiální kalendář sezóny 2026 spojoval karlovarský program s červencovým obdobím filmového festivalu.',
    designers: [], sourceUrl: 'https://cfw.cz/', archiveYear: 2023, archiveCity: 'Karlovy Vary', imageCaption: 'Archivní fotografie · Karlovy Vary 2023',
  },
  {
    id: 'brno-2024', slug: 'brno-2024', title: 'Czech Fashion Week Brno 2024',
    city: 'Brno', year: 2024, date: null, dateLabel: 'Ročník 2024', venue: null, status: 'completed',
    description: 'Bílá runway, tmavý sál a autorské kolekce pod bodovými světly. Brněnský archiv propojuje fotografické série s krátkými vertikálními záznamy.',
    designers: ['anna-anna', 'cleofe-finati', 'jitka-klett', 'ludek-hanak', 'helena-bedrnova', 'fashion-island'],
    sourceUrl: 'https://cfw.cz/historie/', archiveYear: 2024, archiveCity: 'Brno', imageCaption: 'Czech Fashion Week · Brno 2024',
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
