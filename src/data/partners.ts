/** Authentic marks from the supplied CFW 2025 presentation.
 * Historical support is not confirmation of partnership for a future edition.
 */
export type PartnerCategory = 'main' | 'supporting' | 'patronage';
export interface Partner {
  id: string; name: string; logo: string; width: number; height: number; alt: string;
  category: PartnerCategory; sourcePage: number; sourceLabel: string;
  identification: 'source-logo' | 'unidentified-monogram';
  sourceUrl?: string;
}
export type MediaCategory = 'social' | 'internet' | 'outdoor' | 'print' | 'digital' | 'radio' | 'television';
export interface MediaChannel {
  id: string; name: string; category: MediaCategory; sourcePage: number; sourceLabel: string;
}

export const partners: Partner[] = [
  {
    "id": "cez",
    "name": "ČEZ",
    "logo": "partners/cez.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: ČEZ",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo",
    "sourceUrl": "https://www.cez.cz/cs/pro-media/ke-stazeni/loga"
  },
  {
    "id": "seven",
    "name": "Skupina SEVEN",
    "logo": "partners/seven.png",
    "width": 642,
    "height": 189,
    "alt": "Logo: Skupina SEVEN",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "bmw",
    "name": "BMW",
    "logo": "partners/bmw.png",
    "width": 281,
    "height": 282,
    "alt": "Logo: BMW",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "coca-cola",
    "name": "Coca-Cola",
    "logo": "partners/coca-cola.png",
    "width": 591,
    "height": 214,
    "alt": "Logo: Coca-Cola",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "pre",
    "name": "PRE",
    "logo": "partners/pre.svg",
    "width": 227,
    "height": 128,
    "alt": "Logo: PRE",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo",
    "sourceUrl": "https://www.pre.cz/assets2/images/logo.svg"
  },
  {
    "id": "motorola",
    "name": "Motorola",
    "logo": "partners/motorola.png",
    "width": 368,
    "height": 359,
    "alt": "Logo: Motorola",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "partner-monogram",
    "name": "Partnerský monogram z prezentace",
    "logo": "partners/partner-monogram.png",
    "width": 355,
    "height": 189,
    "alt": "Logo: Partnerský monogram z prezentace",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "unidentified-monogram"
  },
  {
    "id": "armani",
    "name": "Armani",
    "logo": "partners/armani.png",
    "width": 637,
    "height": 142,
    "alt": "Logo: Armani",
    "category": "main",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "magnum",
    "name": "Magnum",
    "logo": "partners/magnum.png",
    "width": 515,
    "height": 200,
    "alt": "Logo: Magnum",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "medik8",
    "name": "Medik8",
    "logo": "partners/medik8.png",
    "width": 463,
    "height": 130,
    "alt": "Logo: Medik8",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "jcdecaux",
    "name": "JCDecaux",
    "logo": "partners/jcdecaux.png",
    "width": 504,
    "height": 197,
    "alt": "Logo: JCDecaux",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "azd",
    "name": "AŽD Praha",
    "logo": "partners/azd.png",
    "width": 348,
    "height": 244,
    "alt": "Logo: AŽD Praha",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "karlin-port",
    "name": "Karlín Port",
    "logo": "partners/karlin-port.png",
    "width": 351,
    "height": 244,
    "alt": "Logo: Karlín Port",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "prince-de-ligne",
    "name": "Hotel Prince de Ligne",
    "logo": "partners/prince-de-ligne.png",
    "width": 231,
    "height": 416,
    "alt": "Logo: Hotel Prince de Ligne",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "naturbeds",
    "name": "naturbeds",
    "logo": "partners/naturbeds.png",
    "width": 531,
    "height": 160,
    "alt": "Logo: naturbeds",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "quality",
    "name": "Quality",
    "logo": "partners/quality.png",
    "width": 617,
    "height": 186,
    "alt": "Logo: Quality",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "tomas-arsov",
    "name": "Tomáš Arsov",
    "logo": "partners/tomas-arsov.png",
    "width": 464,
    "height": 215,
    "alt": "Logo: Tomáš Arsov",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "make-up-institute",
    "name": "Make-Up Institute Prague",
    "logo": "partners/make-up-institute.png",
    "width": 477,
    "height": 209,
    "alt": "Logo: Make-Up Institute Prague",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "alexander-sokolov",
    "name": "Alexander Sokolov Hair",
    "logo": "partners/alexander-sokolov.png",
    "width": 689,
    "height": 221,
    "alt": "Logo: Alexander Sokolov Hair",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "celio",
    "name": "celio",
    "logo": "partners/celio.png",
    "width": 573,
    "height": 149,
    "alt": "Logo: celio",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "sothys",
    "name": "Sothys Paris",
    "logo": "partners/sothys.png",
    "width": 673,
    "height": 199,
    "alt": "Logo: Sothys Paris",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "bohemia-sekt",
    "name": "Bohemia Sekt",
    "logo": "partners/bohemia-sekt.png",
    "width": 693,
    "height": 291,
    "alt": "Logo: Bohemia Sekt",
    "category": "supporting",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "prezident",
    "name": "Prezident České republiky",
    "logo": "partners/prezident.png",
    "width": 267,
    "height": 266,
    "alt": "Logo: Prezident České republiky",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "premier",
    "name": "Premiér České republiky",
    "logo": "partners/premier.png",
    "width": 248,
    "height": 248,
    "alt": "Logo: Premiér České republiky",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "senat",
    "name": "Předseda Senátu České republiky",
    "logo": "partners/senat.png",
    "width": 402,
    "height": 277,
    "alt": "Logo: Předseda Senátu České republiky",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "ministerstvo-kultury",
    "name": "Ministerstvo kultury ČR",
    "logo": "partners/ministerstvo-kultury.png",
    "width": 591,
    "height": 204,
    "alt": "Logo: Ministerstvo kultury ČR",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "ministerstvo-mistni-rozvoj",
    "name": "Ministerstvo pro místní rozvoj ČR",
    "logo": "partners/ministerstvo-mistni-rozvoj.png",
    "width": 644,
    "height": 164,
    "alt": "Logo: Ministerstvo pro místní rozvoj ČR",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "praha",
    "name": "Hlavní město Praha",
    "logo": "partners/praha.png",
    "width": 270,
    "height": 272,
    "alt": "Logo: Hlavní město Praha",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "brno",
    "name": "Brno",
    "logo": "partners/brno.png",
    "width": 407,
    "height": 120,
    "alt": "Logo: Brno",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  },
  {
    "id": "teplice",
    "name": "Primátor města Teplice",
    "logo": "partners/teplice.png",
    "width": 247,
    "height": 283,
    "alt": "Logo: Primátor města Teplice",
    "category": "patronage",
    "sourcePage": 5,
    "sourceLabel": "Prezentace CFW 2025, strana 5",
    "identification": "source-logo"
  }
];

export const mainPartners = partners.filter(partner => partner.category === 'main');
export const supportingPartners = partners.filter(partner => partner.category === 'supporting');
export const patronages = partners.filter(partner => partner.category === 'patronage');

/** Named channels in the 2025 campaign plan. Not a list of confirmed partners. */
export const mediaChannels: MediaChannel[] = [
  {
    "id": "facebook",
    "name": "Facebook",
    "category": "social",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "instagram",
    "name": "Instagram",
    "category": "social",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "tiktok",
    "name": "TikTok",
    "category": "social",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "linkedin",
    "name": "LinkedIn",
    "category": "social",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "google",
    "name": "Google",
    "category": "internet",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "seznam",
    "name": "Seznam.cz",
    "category": "internet",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "youtube",
    "name": "YouTube",
    "category": "internet",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "bigboard",
    "name": "BigBoard",
    "category": "outdoor",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "jcdecaux",
    "name": "JCDecaux",
    "category": "outdoor",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "reapress",
    "name": "REAPRESS",
    "category": "outdoor",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "denik",
    "name": "Deník.cz",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "metro",
    "name": "Metro",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "regionalni-noviny",
    "name": "Regionální noviny",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "dnes",
    "name": "DNES",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "a11",
    "name": "A11",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "nase-praha",
    "name": "Naše Praha",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "blesk",
    "name": "Blesk",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "idnes",
    "name": "iDNES.cz",
    "category": "print",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "ledmultimedia",
    "name": "LedMultimedia",
    "category": "digital",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "bigmedia",
    "name": "BigMedia",
    "category": "digital",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "ledinzerce",
    "name": "LEDinzerce.cz",
    "category": "digital",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "evropa2",
    "name": "Evropa 2",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "impuls",
    "name": "Rádio Impuls",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "fajn",
    "name": "Fajn rádio",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "spin",
    "name": "Spin rádio",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "hitradio",
    "name": "Hitrádio",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "kiss",
    "name": "Rádio Kiss",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "expres",
    "name": "Expres FM",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "frekvence1",
    "name": "Frekvence 1",
    "category": "radio",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "nova",
    "name": "TV Nova",
    "category": "television",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "praha-tv",
    "name": "Praha TV",
    "category": "television",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "zak",
    "name": "ZAK TV",
    "category": "television",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  },
  {
    "id": "prima",
    "name": "Prima",
    "category": "television",
    "sourcePage": 7,
    "sourceLabel": "Prezentace CFW 2025, strana 7 / plán kampaně 2025"
  }
];
