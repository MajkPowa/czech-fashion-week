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
}

export const designers: Designer[] = [
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
    description: 'Tvorba Luďka Hanáka je v dodaném archivu zastoupena napříč třemi ročníky. Propojené fotografie a videa umožňují sledovat jednotlivé siluety i jejich pohyb na mole.',
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
    description: 'Fashion Island je v archivu zastoupený plavkovými a resort kolekcemi. Aktuální pražská událost 2026 uvádí premiéru Fashion Island SS27 pod vedením Liliany Augustinové a její sestry Lucie.',
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
];
