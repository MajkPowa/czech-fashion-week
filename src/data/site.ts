export const site = {
  name: 'Czech Fashion Week',
  shortName: 'CFW',
  title: 'Czech Fashion Week — Móda. Naživo.',
  tagline: 'Móda. Naživo.',
  description: 'Přehlídky, návrháři a příběhy české módní scény. Program Czech Fashion Week a obrazový archiv ročníků 2020–2024.',
  officialUrl: 'https://cfw.cz/',
  productionEmail: 'produkce@czechfashionweek.eu',
  email: 'produkce@czechfashionweek.eu',
  phone: '+420 732 774 158',
  phoneHref: 'tel:+420732774158',
  address: 'Jindřišská 937/16, 110 00 Praha 1',
  contactSource: 'https://cfw.cz/kontakt/',
  contentVerifiedAt: '2026-10-20',
  primaryEventSlug: 'praha-glamour-2026',
  ticketUrl: 'https://www.ticketportal.cz/event/Czech-Fashion-Week-GLAMOUR',
  hero: {
    eyebrow: 'Czech Fashion Week',
    title: 'Móda. Naživo.',
    description: 'Okamžik, kdy se návrh stává pohybem. Kolekce, osobnosti a místa, která dávají módě vlastní příběh.',
    primaryLabel: 'Objevte program',
    primaryHref: '/program/',
    secondaryLabel: 'Prozkoumat archiv',
    secondaryHref: '/archiv/',
    imageCaption: 'Obrazový archiv Czech Fashion Week · Brno 2024',
  },
  intro: {
    eyebrow: 'Móda · Lidé · Místa',
    title: 'Každá přehlídka má svůj příběh.',
    lead: 'Czech Fashion Week propojuje autorskou tvorbu, přehlídkové molo a setkávání. Módu představuje v prostředí českých měst a dává prostor rozdílným tvůrčím hlasům.',
    body: 'Od večerních siluet a pánského krejčovství po lehkost resort kolekcí a experimentální přístupy. Fotografie uchovávají to, co je naživo neopakovatelné: světlo, pohyb látky i blízkost publika.',
  },
  about: {
    title: 'Prostor pro módu a setkávání.',
    lead: 'Czech Fashion Week je společensko-kulturní projekt s charitativním rozměrem. Propojuje návrháře, modelky a modely, partnery i publikum.',
    paragraphs: [
      'Přehlídka není jen sledem jednotlivých modelů. Je setkáním autorského rukopisu, lidí a konkrétního místa. Právě tuto rozmanitost zachycuje archiv: prosklené atrium v Teplicích, letní scéna u vody v Karlových Varech i dramatické světlo brněnského mola.',
      'Tvorba zkušených návrhářů se potkává s novými pohledy. Vedle couture a společenských modelů mají v historickém výběru místo pánské kolekce, resort fashion a experimentální studentská tvorba.',
      'Součástí příběhu jsou také zákulisí a pomoc druhým. Konkrétní charitativní projekty uvádíme s rokem, ke kterému patří. Aktuální program je oddělený od historické účasti a archivu.',
    ],
  },
  archive: {
    eyebrow: '2020—2024',
    title: 'Příběhy, které zůstávají.',
    lead: 'Vraťte se na molo. Vyberte ročník, místo, kolekci nebo video a objevte různé podoby Czech Fashion Week.',
    note: 'Kurátorský výběr ze skutečného obrazového archivu. Ročník a kontext každého média jsou uvedené v detailu.',
  },
  partnership: {
    eyebrow: 'Partnerství',
    title: 'Staňte se součástí příběhu.',
    lead: 'Spojte svou značku s módou, kulturou a osobním setkáváním. Podobu spolupráce připravujeme podle konkrétní události a jejího publika.',
    description: 'Od prezentace na místě přes společný obsah až po propojení s kolekcí či společenským programem. Produkci oslovte s představou spolupráce a vybraným městem; aktuální možnosti vám představí přímo pořadatel.',
    benefits: [
      { title: 'Značka v prostoru', description: 'Přirozené zapojení do prostředí přehlídky a konkrétní události.' },
      { title: 'Společný obsah', description: 'Fotografická, obrazová a redakční spolupráce podle dohodnutého rozsahu.' },
      { title: 'Osobní setkání', description: 'Prostor pro hosty, tvůrce a partnery v kontextu módní události.' },
      { title: 'Dlouhodobý příběh', description: 'Možnost navázat spolupráci napříč událostmi a ročníky.' },
    ],
    emailSubject: 'Partnerství Czech Fashion Week',
    partnerPhone: '+420 602 284 453',
    partnerPhoneHref: 'tel:+420602284453',
  },
  contact: {
    title: 'Pojďme vytvořit další příběh.',
    description: 'Program, účast, spolupráce nebo média. Napište produkci Czech Fashion Week a spojte se přímo s pořadatelem.',
    email: 'produkce@czechfashionweek.eu',
    phone: '+420 732 774 158',
    phoneHref: 'tel:+420732774158',
    partnerPhone: '+420 602 284 453',
    partnerPhoneHref: 'tel:+420602284453',
    address: 'Jindřišská 937/16, 110 00 Praha 1',
    source: 'https://cfw.cz/kontakt/',
  },
} as const;

export const navigation = [
  { label: 'Program', href: '/program/' },
  { label: 'Návrháři', href: '/navrhari/' },
  { label: 'Archiv', href: '/archiv/' },
  { label: 'O CFW', href: '/o-cfw/' },
  { label: 'Partneři', href: '/partnerstvi/' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const;

export const charityProjects = [
  {
    id: 'nemocnice-teplice-2023',
    year: 2023,
    title: 'Móda a pomoc v Teplicích',
    beneficiary: 'Teplická nemocnice',
    description: 'Prezentace Czech Fashion Week připomíná podporu teplické nemocnice v roce 2023. Charitativní rozměr tak doplňuje kulturní a společenský program projektu.',
    source: 'CFW 2025_Prezentace.pdf, strana 6',
  },
  {
    id: 'pomoc-2024',
    year: 2024,
    title: 'Společná podpora',
    beneficiary: 'Nemocnice a BJP Foundation',
    description: 'V roce 2024 projekt podle své prezentace navázal podporou nemocnice a BJP Foundation. Jde o historicky doloženou část aktivit, nikoli o aktuálně vyhlášenou sbírku.',
    source: 'CFW 2025_Prezentace.pdf, strana 6',
  },
] as const;

export const historyMilestones = [
  { year: '2020', title: 'Molo v atriu', description: 'Teplický archiv zachycuje prosklený prostor, bílou dráhu i bezprostřední zákulisí.', source: 'Archiv CFW · TP 2020' },
  { year: '2021', title: 'Blízko publiku', description: 'Denní světlo, výrazné siluety a hosté v těsné blízkosti přehlídkového mola.', source: 'Archiv CFW · Teplice 2021' },
  { year: '2022', title: 'Rozmanitost kolekcí', description: 'Večerní satén, výrazné vzory i plavkové kolekce v teplickém ročníku.', source: 'Archiv CFW · Teplice 2022' },
  { year: '2023', title: 'Různé podoby módy', description: 'Teplice a letní Karlovy Vary přinášejí dvě odlišné nálady. Samostatnou kapitolu tvoří casting Jalta.', source: 'Archiv CFW · Teplice, Karlovy Vary a Casting Jalta 2023' },
  { year: '2024', title: 'Pod světly Brna', description: 'Dramatický sál, bílá runway a rozdílné autorské kolekce v brněnském archivu.', source: 'Archiv CFW · Brno 2024' },
] as const;

export const officialLinks = [
  { label: 'Oficiální web CFW', href: 'https://cfw.cz/' },
  { label: 'Vstupenky Praha 2026 · Ticketportal', href: 'https://www.ticketportal.cz/event/Czech-Fashion-Week-GLAMOUR' },
] as const;
