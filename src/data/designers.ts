export interface DesignerPortrait {
  src: string;
  width: number;
  height: number;
  alt: string;
  sourceUrl: string;
}

export interface Designer {
  slug: string;
  name: string;
  category: string;
  bio: string;
  description: string;
  years: number[];
  collections: string[];
  collectionMatchers: string[];
  source: string;
  sourceUrl: string;
  portrait?: DesignerPortrait;
  listedOnOfficialSite?: boolean;
}

export const officialDesignerPortraits: Record<string, DesignerPortrait> = {
  "osmany-laffita": {
    "src": "official/designers/osmany-laffita.webp",
    "width": 800,
    "height": 800,
    "alt": "Osmany Laffita – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_Osmany.png"
  },
  "cleofe-finati": {
    "src": "official/designers/cleofe-finati.webp",
    "width": 800,
    "height": 800,
    "alt": "Cleofe Finati – pánská kolekce Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/07/Cleofe-Finati-czech-fashion-week.png"
  },
  "jitka-klett": {
    "src": "official/designers/jitka-klett.webp",
    "width": 800,
    "height": 800,
    "alt": "Jitka Klett – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_Jitka-Klett.png"
  },
  "jiri-moravec": {
    "src": "official/designers/jiri-moravec.webp",
    "width": 800,
    "height": 800,
    "alt": "Jiří Moravec – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/BANNER_CFW_JIRI_MORAVEC.png"
  },
  "ludek-hanak": {
    "src": "official/designers/ludek-hanak.webp",
    "width": 500,
    "height": 500,
    "alt": "Luděk Hanák – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/07/ludek-hana.png"
  },
  "jirina-matousova": {
    "src": "official/designers/jirina-matousova.webp",
    "width": 800,
    "height": 800,
    "alt": "Jiřina Matoušová – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/BANNER_CFW_JIRINA_MATOUSOVA.png"
  },
  "helena-bedrnova": {
    "src": "official/designers/helena-bedrnova.webp",
    "width": 800,
    "height": 800,
    "alt": "Helena Bedrnová – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/CFW_Helena_Bedrnova.png"
  },
  "nada-moravcova": {
    "src": "official/designers/nada-moravcova.webp",
    "width": 800,
    "height": 800,
    "alt": "Naďa Moravcová – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/BANNER_CFW_NADA_MORAVCOVA.png"
  },
  "gabriela-giotto": {
    "src": "official/designers/gabriela-giotto.webp",
    "width": 800,
    "height": 800,
    "alt": "Gabriela Giotto – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/BANNER_CFW_GABRIELA_GIOTTO.png"
  },
  "lilian-augustin": {
    "src": "official/designers/lilian-augustin.webp",
    "width": 800,
    "height": 800,
    "alt": "Lilian Augustin – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_Lilian_Augustin.png"
  },
  "anna-anna": {
    "src": "official/designers/anna-anna.webp",
    "width": 800,
    "height": 800,
    "alt": "Anna Anna – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_Anna_Anna.png"
  },
  "debbie-brown": {
    "src": "official/designers/debbie-brown.webp",
    "width": 500,
    "height": 500,
    "alt": "Debbie Brown – Czech Fashion Week",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/DEBBIE_BROWN.png"
  }
};

const catalogue: Designer[] = [
  {
    slug: 'jitka-klett', name: 'Jitka Klett', category: 'Autorská móda',
    bio: 'V archivním výběru se její tvorba představuje v pohybu lehkých vrstev, výrazných barev a společenských siluet.',
    description: 'Kolekce Jitky Klett propojují v obrazovém archivu runway momenty, celkové siluety i detail materiálu. Prohlédněte si doložené záběry z Teplic a Brna.',
    years: [2023, 2024], collections: ['Jitka Klett Couture', 'Jitka Klett'], collectionMatchers: ['jitka klett', 'jk_klett'],
    source: 'Prezentace CFW 2025, strany 15–20; zdrojová alba Teplice 2023 a Brno 2024.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'osmany-laffita', name: 'Osmany Laffita', category: 'Couture a společenská móda',
    bio: 'Výrazné společenské siluety, práce s objemem a divadelní energie patří k jeho doložené prezentaci na Czech Fashion Week.',
    description: 'Historické materiály CFW připomínají přehlídky Osmanyho Laffity a jeho setkání s publikem. Profil propojuje tyto doložené ročníky, nikoli automatickou účast v aktuálním programu.',
    years: [2022, 2024], collections: ['Osmany Laffita'], collectionMatchers: ['osmany laffita'],
    source: 'Prezentace CFW 2025, strany 5, 8, 15, 16 a 20; album Teplice 2022.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'cleofe-finati', name: 'Cleofe Finati', category: 'Pánská móda',
    bio: 'Pánské obleky a slavnostní siluety zachycené v dramatickém světle brněnského mola.',
    description: 'V archivních fotografiích a vertikálních videích z Brna 2024 představuje Cleofe Finati pánskou část programu. Výběr sleduje střih, materiál i společné finále přehlídky.',
    years: [2024], collections: ['Nefeli Exclusive & Cleofe Finati', 'Cleofe Finati'], collectionMatchers: ['cleofe finati', 'cleote finati', 'nefeli'],
    source: 'Prezentace CFW 2025, strany 13 a 19; album Brno 2024.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'ludek-hanak', name: 'Luděk Hanák', category: 'Společenské kolekce',
    bio: 'Od výrazného lesku po lehkost dlouhých šatů: archiv ukazuje různorodé podoby společenské kolekce.',
    description: 'Tvorba Luďka Hanáka je v archivu Czech Fashion Week zastoupena napříč třemi ročníky. Propojené fotografie a videa umožňují sledovat jednotlivé siluety i jejich pohyb na mole.',
    years: [2022, 2023, 2024], collections: ['Luděk Hanák'], collectionMatchers: ['luděk hanák', 'ludek hanak', 'ludekhanak'],
    source: 'Prezentace CFW 2025; alba Teplice 2022, Teplice 2023 a Brno 2024.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'helena-bedrnova', name: 'Helena Bedrnová', category: 'Autorské kolekce',
    bio: 'Celé siluety, kontrast materiálů a čisté linie v obrazovém výběru z Brna 2024.',
    description: 'Brněnské album a krátké runway záznamy zachycují kolekci Heleny Bedrnové. Výběr spojuje celkový pohled na model s bližším detailem a pohybem látky.',
    years: [2024], collections: ['Helena Bedrnová'], collectionMatchers: ['helena bedrnova', 'helena bedrnová'],
    source: 'Prezentace CFW 2025, strany 15–20; album Brno 2024.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'fashion-island', name: 'Fashion Island', category: 'Resort fashion',
    bio: 'Lehkost, letní atmosféra a resort kolekce zachycené v Teplicích, Karlových Varech i Brně.',
    description: 'Fashion Island představí na CFW Glamour v Praze premiéru kolekce SS27, jejíž koncept vzniká pod vedením Liliany Augustinové a její sestry Lucie. Vedle vlastních návrhů nabídne také výběr modelů zahraničních návrhářů. Večer doplní exkluzivní kolekce LYANIS Couture.',
    years: [2022, 2023, 2024], collections: ['Fashion Island'], collectionMatchers: ['fashion island'],
    source: 'Prezentace CFW 2025 a zdrojová alba; aktuální Praha 2026 podle oficiálního pořadatele.', sourceUrl: 'https://cfw.cz/praha/',
  },
  {
    slug: 'nada-moravcova', name: 'Naďa Moravcová', category: 'Autorské kolekce',
    bio: 'Měkký pohyb materiálu, saténové plochy a barevné vzory v teplických ročnících.',
    description: 'Fotografická alba z Teplic představují kolekce Nadi Moravcové v různých světelných náladách. Každý záběr je navázaný na svůj historický ročník.',
    years: [2022, 2023], collections: ['Naďa Moravcová'], collectionMatchers: ['naďa moravcová', 'nada moravcova'],
    source: 'Zdrojová alba Teplice 2022 a 2023; jméno také na oficiálním webu CFW.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'gabriela-giotto', name: 'Gabriela Giotto', category: 'Autorské kolekce',
    bio: 'Výrazné vzory a barevná energie v archivním výběru z Teplic.',
    description: 'Doložené album Gabriely Giotto z ročníku 2022 nabízí celkové siluety i blízké runway pohledy. Barevnost originálních fotografií zůstává zachována.',
    years: [2022], collections: ['Gabriela Giotto'], collectionMatchers: ['gabriela giotto'],
    source: 'Zdrojové album Teplice 2022; jméno také na oficiálním webu CFW.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'jiri-moravec', name: 'Jiří Moravec', category: 'Autorská móda',
    bio: 'Střih, kontrast a osobitá silueta v historickém fotografickém výběru.',
    description: 'Kolekce Jiřího Moravce jsou v archivu zastoupené teplickými ročníky 2022 a 2023. Prohlédněte si modely ve světle konkrétní přehlídky.',
    years: [2022, 2023], collections: ['Jiří Moravec'], collectionMatchers: ['jiří moravec', 'jiri moravec'],
    source: 'Zdrojová alba Teplice 2022 a 2023; jméno také na oficiálním webu CFW.', sourceUrl: 'https://cfw.cz/',
  },
  {
    slug: 'anna-anna', name: 'Anna Anna', category: 'Autorské kolekce',
    bio: 'Výrazná barevnost a vzor v kontrastu s tmavou scénou brněnské runway.',
    description: 'Album a vertikální záznamy Anna Anna z Brna 2024 propojují jednotlivé modely s výraznou scénografií kolekce. Motivy scény patří tomuto konkrétnímu přehlídkovému kontextu.',
    years: [2024], collections: ['Anna Anna'], collectionMatchers: ['anna anna', 'annaanna'],
    source: 'Zdrojové album Brno 2024; jméno také na oficiálním webu CFW.', sourceUrl: 'https://cfw.cz/',
  },
  {
    "slug": "jirina-matousova",
    "name": "Jiřina Matoušová",
    "category": "Autorská móda",
    "bio": "Jiřina Matoušová patří k tvůrkyním Czech Fashion Week.",
    "description": "Kolekce a aktuální účast na přehlídkách uvádíme u jednotlivých událostí v programu Czech Fashion Week.",
    "years": [],
    "collections": [],
    "collectionMatchers": [],
    "source": "Oficiální přehled Návrháři na CFW, ověřeno 20. října 2026.",
    "sourceUrl": "https://cfw.cz/"
  },
  {
    "slug": "lilian-augustin",
    "name": "Lilian Augustin",
    "category": "Autorská móda",
    "bio": "Liliana Augustinová stojí společně se svou sestrou Lucií za konceptem kolekce Fashion Island SS27.",
    "description": "Kolekce a aktuální účast na přehlídkách uvádíme u jednotlivých událostí v programu Czech Fashion Week.",
    "years": [],
    "collections": [],
    "collectionMatchers": [],
    "source": "Oficiální přehled Návrháři na CFW, ověřeno 20. října 2026.",
    "sourceUrl": "https://cfw.cz/"
  },
  {
    "slug": "debbie-brown",
    "name": "Debbie Brown",
    "category": "Autorská móda",
    "bio": "Debbie Brown patří k tvůrkyním Czech Fashion Week.",
    "description": "Kolekce a aktuální účast na přehlídkách uvádíme u jednotlivých událostí v programu Czech Fashion Week.",
    "years": [],
    "collections": [],
    "collectionMatchers": [],
    "source": "Oficiální přehled Návrháři na CFW, ověřeno 20. října 2026.",
    "sourceUrl": "https://cfw.cz/"
  },
];

const officialOrder = ["osmany-laffita", "cleofe-finati", "jitka-klett", "jiri-moravec", "ludek-hanak", "jirina-matousova", "helena-bedrnova", "nada-moravcova", "gabriela-giotto", "lilian-augustin", "anna-anna", "debbie-brown"];

export const designers: Designer[] = catalogue.map(designer => ({
  ...designer,
  portrait: officialDesignerPortraits[designer.slug],
  listedOnOfficialSite: Boolean(officialDesignerPortraits[designer.slug]),
})).sort((a, b) => {
  const position = (slug: string) => { const index = officialOrder.indexOf(slug); return index < 0 ? officialOrder.length : index; };
  return position(a.slug) - position(b.slug);
});
