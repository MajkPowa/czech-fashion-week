/** Authentic marks from the supplied CFW 2025 presentation and official cfw.cz assets.
 * Historical support is not confirmation of partnership for a future edition.
 */
export type PartnerCategory = 'main' | 'supporting' | 'patronage' | 'realisation2024' | 'official-main' | 'official-supporting';
export interface Partner {
  id: string; name: string; logo: string; width: number; height: number; alt: string;
  category: PartnerCategory; sourcePage?: number; sourceLabel: string;
  identification: 'source-logo' | 'unidentified-monogram';
  sourceUrl?: string;
  tone?: 'light' | 'dark';
  website?: string;
  isOrganiser?: boolean;
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

/** Additional marks documented on the 2024 partnership realisation slide. */
export const realisationPartners2024: Partner[] = [
  {
    "id": "2024-san-giacomo",
    "name": "SAN GIACOMO",
    "logo": "partners/2024-san-giacomo.webp",
    "width": 384,
    "height": 96,
    "alt": "Logo SAN GIACOMO z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark"
  },
  {
    "id": "2024-anna-brandejs",
    "name": "Anna Brandejs",
    "logo": "partners/2024-anna-brandejs.webp",
    "width": 1032,
    "height": 252,
    "alt": "Logo Anna Brandejs z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/11/anna-brandejs.png"
  },
  {
    "id": "2024-xpel",
    "name": "XPEL",
    "logo": "partners/2024-xpel.svg",
    "width": 1044,
    "height": 286,
    "alt": "Logo XPEL z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "light",
    "sourceUrl": "https://lp.xpel.com/hubfs/XPEL.svg?hsLang=en"
  },
  {
    "id": "2024-brixton",
    "name": "Brixton",
    "logo": "partners/2024-brixton.webp",
    "width": 320,
    "height": 120,
    "alt": "Logo Brixton z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark"
  },
  {
    "id": "2024-finlandia",
    "name": "Finlandia",
    "logo": "partners/2024-finlandia.webp",
    "width": 256,
    "height": 120,
    "alt": "Logo Finlandia z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark"
  },
  {
    "id": "2024-bombay-sapphire",
    "name": "Bombay Sapphire",
    "logo": "partners/2024-bombay-sapphire.webp",
    "width": 232,
    "height": 120,
    "alt": "Logo Bombay Sapphire z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark"
  },
  {
    "id": "2024-jack-daniels",
    "name": "Jack Daniel’s",
    "logo": "partners/2024-jack-daniels.webp",
    "width": 264,
    "height": 120,
    "alt": "Logo Jack Daniel’s z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark"
  },
  {
    "id": "2024-winning-group",
    "name": "Winning Group",
    "logo": "partners/2024-winning-group.svg",
    "width": 285,
    "height": 40,
    "alt": "Logo Winning Group z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "light",
    "sourceUrl": "https://www.winninggroup.cz/wp-content/themes/winning-group/assets/images/winning-logo.svg"
  },
  {
    "id": "2024-xdigr",
    "name": "X-DIGR",
    "logo": "partners/2024-xdigr.webp",
    "width": 601,
    "height": 532,
    "alt": "Logo X-DIGR z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/cfw-loga-fullhd_Kreslici-platno-1-kopie-36.png"
  },
  {
    "id": "2024-rokomotor",
    "name": "rokomotor",
    "logo": "partners/2024-rokomotor.webp",
    "width": 1032,
    "height": 223,
    "alt": "Logo rokomotor z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/cfw-loga-fullhd_Kreslici-platno-1.png"
  },
  {
    "id": "2024-michal-hasek",
    "name": "Michal Hašek · advokát",
    "logo": "partners/2024-michal-hasek.webp",
    "width": 741,
    "height": 166,
    "alt": "Logo Michal Hašek · advokát z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/Kreslici-platno-1-kopie-25-1.png"
  },
  {
    "id": "2024-murum",
    "name": "mu:Rum",
    "logo": "partners/2024-murum.webp",
    "width": 1032,
    "height": 531,
    "alt": "Logo mu:Rum z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/cfw-loga-fullhd_Kreslici-platno-1-kopie-3.png"
  },
  {
    "id": "2024-styl-kabo",
    "name": "STYL · KABO",
    "logo": "partners/2024-styl-kabo.webp",
    "width": 645,
    "height": 297,
    "alt": "Logo STYL · KABO z realizace partnerství CFW 2024",
    "category": "realisation2024",
    "sourcePage": 18,
    "sourceLabel": "Prezentace CFW 2025, strana 18 / realizace partnerství 2024",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW-styl_kabo.png"
  }
];

export const realisationPanels2024: Array<{id: string; src: string; width: number; height: number; alt: string}> = [
  {
    "id": "2024-panel-01",
    "src": "partners/2024-panel-01.webp",
    "width": 1956,
    "height": 212,
    "alt": "Partnerský panel CFW 2024 – řada 1 historické prezentace s původními logy"
  },
  {
    "id": "2024-panel-02",
    "src": "partners/2024-panel-02.webp",
    "width": 1956,
    "height": 220,
    "alt": "Partnerský panel CFW 2024 – řada 2 historické prezentace s původními logy"
  },
  {
    "id": "2024-panel-03",
    "src": "partners/2024-panel-03.webp",
    "width": 1956,
    "height": 136,
    "alt": "Partnerský panel CFW 2024 – řada 3 historické prezentace s původními logy"
  }
];


/** Exact logo assets and grouping from cfw.cz, verified 20 October 2026. */
export const officialPartners: Partner[] = [
  {
    "id": "official-abf",
    "name": "ABF",
    "logo": "partners/official/abf.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: ABF",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_ABF.png",
    "website": "https://abf.cz/"
  },
  {
    "id": "official-pva-expo",
    "name": "PVA EXPO PRAHA",
    "logo": "partners/official/pva-expo.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: PVA EXPO PRAHA",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_PVA.png",
    "website": "https://www.pvaexpo.cz/cs"
  },
  {
    "id": "official-clarion-brno",
    "name": "Clarion Congress Hotel Brno",
    "logo": "partners/official/clarion-brno.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Clarion Congress Hotel Brno",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_CHB.png",
    "website": "https://www.clarioncongresshotelbrno.com/cs/"
  },
  {
    "id": "official-spolek-ml",
    "name": "Spolek Mariánské Lázně",
    "logo": "partners/official/spolek-ml.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Spolek Mariánské Lázně",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_SML.png",
    "website": "https://www.spolekml.cz/"
  },
  {
    "id": "official-byd",
    "name": "BYD",
    "logo": "partners/official/byd.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: BYD",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_BYD.png",
    "website": "https://www.byd.com/cz"
  },
  {
    "id": "official-hdt",
    "name": "HDT",
    "logo": "partners/official/hdt.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: HDT",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_HDT.png",
    "website": "https://www.hdt.cz/cs"
  },
  {
    "id": "official-kinley",
    "name": "Kinley",
    "logo": "partners/official/kinley.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Kinley",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_KINLEY.png",
    "website": "https://www.coca-cola.com/cz/cs/brands/kinley"
  },
  {
    "id": "official-jihomoravsky-kraj",
    "name": "Jihomoravský kraj",
    "logo": "partners/official/jihomoravsky-kraj.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Jihomoravský kraj",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/06/LOGO_CFW_JIHOMORAVSKY_KRAJ.png",
    "website": "https://www.jmk.cz/"
  },
  {
    "id": "official-kooperativa",
    "name": "Kooperativa",
    "logo": "partners/official/kooperativa.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Kooperativa",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_KOOPERATIVA_CFW.png",
    "website": "https://www.koop.cz/"
  },
  {
    "id": "official-kosik",
    "name": "Košík.cz",
    "logo": "partners/official/kosik.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Košík.cz",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/07/LOGO_CFW_KOSIK.png",
    "website": "https://www.kosik.cz"
  },
  {
    "id": "official-brno",
    "name": "Brno",
    "logo": "partners/official/brno.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Brno",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/06/LOGO_CFW_BRNO.png",
    "website": "https://www.brno.cz/"
  },
  {
    "id": "official-motorola",
    "name": "Motorola",
    "logo": "partners/official/motorola.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Motorola",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/cfw-loga-fullhd_Kreslici-platno-1-kopie-2-500x500.png",
    "website": "https://www.motorola.com/cz/"
  },
  {
    "id": "official-seven",
    "name": "Sev.en Česká energie",
    "logo": "partners/official/seven.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Sev.en Česká energie",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/06/LOGO_7.png",
    "website": "https://www.7.cz/cz/"
  },
  {
    "id": "official-styl-kabo",
    "name": "STYL · KABO",
    "logo": "partners/official/styl-kabo.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: STYL · KABO",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW-styl_kabo.png",
    "website": "https://www.bvv.cz/styl-kabo"
  },
  {
    "id": "official-veletrhy-brno",
    "name": "Veletrhy Brno",
    "logo": "partners/official/veletrhy-brno.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Veletrhy Brno",
    "category": "official-main",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_VB.png",
    "website": "https://www.bvv.cz/"
  },
  {
    "id": "official-kapitan",
    "name": "Kapitán Praha",
    "logo": "partners/official/kapitan.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Kapitán Praha",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/08/CFW_KAPITAN.png",
    "website": "https://kapitanpraha.cz/"
  },
  {
    "id": "official-ip-beauty",
    "name": "IP Beauty Lounge",
    "logo": "partners/official/ip-beauty.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: IP Beauty Lounge",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/08/LOGO_IP_BEAUTY.png",
    "website": "https://www.instagram.com/ip.beauty_lounge/"
  },
  {
    "id": "official-zena-in",
    "name": "ŽENA-IN",
    "logo": "partners/official/zena-in.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: ŽENA-IN",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_ZIN.png",
    "website": "https://zena-in.cz/"
  },
  {
    "id": "official-knezi-hora",
    "name": "Vinařství Kněží hora",
    "logo": "partners/official/knezi-hora.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Vinařství Kněží hora",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_KHVB.png",
    "website": "https://www.vinarstviknezihora.cz/"
  },
  {
    "id": "official-tcr-security",
    "name": "TCR Security",
    "logo": "partners/official/tcr-security.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: TCR Security",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_TCR.png",
    "website": "https://tcrsecurity.cz/"
  },
  {
    "id": "official-marianske-lazne",
    "name": "Mariánské Lázně",
    "logo": "partners/official/marianske-lazne.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Mariánské Lázně",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_ML.png",
    "website": "https://www.marianskelazne.cz/"
  },
  {
    "id": "official-spgroup",
    "name": "SPGroup",
    "logo": "partners/official/spgroup.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: SPGroup",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_SPG.png",
    "website": "https://www.spgroup.cz/cs_CZ/"
  },
  {
    "id": "official-ruze-michael",
    "name": "Růže Michael",
    "logo": "partners/official/ruze-michael.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Růže Michael",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_RM.png",
    "website": "https://www.ruzemichael.cz/"
  },
  {
    "id": "official-mpo",
    "name": "Ministerstvo průmyslu a obchodu ČR",
    "logo": "partners/official/mpo.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Ministerstvo průmyslu a obchodu ČR",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_MPAO.png",
    "website": "https://mpo.gov.cz/"
  },
  {
    "id": "official-lsk-green",
    "name": "LSK Green Group",
    "logo": "partners/official/lsk-green.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: LSK Green Group",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_LSK.png",
    "website": "https://lskgreengroup.com/"
  },
  {
    "id": "official-hkpjz",
    "name": "Hospodářská komora Praha Jihozápad",
    "logo": "partners/official/hkpjz.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Hospodářská komora Praha Jihozápad",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_HK.png",
    "website": "https://hkpjz.cz/"
  },
  {
    "id": "official-deliberti",
    "name": "Deliberti",
    "logo": "partners/official/deliberti.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Deliberti",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_DELIBERTI.png",
    "website": "https://deliberti.it/"
  },
  {
    "id": "official-beskydska-brana",
    "name": "Beskydská brána",
    "logo": "partners/official/beskydska-brana.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Beskydská brána",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_BB.png",
    "website": "https://www.beskydskabrana.cz/"
  },
  {
    "id": "official-automycka",
    "name": "Automyčka Express",
    "logo": "partners/official/automycka.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Automyčka Express",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/07/LOGO_AUTO_MYCKA.png",
    "website": "https://www.automycka.cz/"
  },
  {
    "id": "official-weinberg",
    "name": "Aukční dům Weinberg",
    "logo": "partners/official/weinberg.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Aukční dům Weinberg",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/05/LOGO-WEINBERG.png",
    "website": "https://www.aukceweinberg.cz/cs/"
  },
  {
    "id": "official-smartwings",
    "name": "Smartwings",
    "logo": "partners/official/smartwings.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: Smartwings",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/09/CFW_LOGO_SMARTWINGS-300x300-1.png",
    "website": "https://www.smartwings.com/"
  },
  {
    "id": "official-bandi",
    "name": "BANDI",
    "logo": "partners/official/bandi.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: BANDI",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_LOGO_BANDI.png",
    "website": "https://www.bandi.cz/"
  },
  {
    "id": "official-kytka-jako-brno",
    "name": "Kytka jako Brno",
    "logo": "partners/official/kytka-jako-brno.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Kytka jako Brno",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_LOGO_KYTKA_JAKO_BRNO.png",
    "website": "https://kytkajakobrno.cz/"
  },
  {
    "id": "official-quality-brno",
    "name": "Quality Hotel Brno Exhibition Centre",
    "logo": "partners/official/quality-brno.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Quality Hotel Brno Exhibition Centre",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_LOGO_QAULITY_HOTEL_BRNO.png",
    "website": "https://www.qualityhotelbrnoexhibitioncentre.com/cs/"
  },
  {
    "id": "official-jp-servis",
    "name": "JP Servis",
    "logo": "partners/official/jp-servis.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: JP Servis",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW_LOGO_JPSERVIS.png",
    "website": "https://www.jpservis.com/"
  },
  {
    "id": "official-makeup-institute",
    "name": "Make-Up Institute Prague",
    "logo": "partners/official/makeup-institute.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Make-Up Institute Prague",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/08/CFW-Kame_up.png",
    "website": "https://makeupinstitute.cz/"
  },
  {
    "id": "official-letiste-praha",
    "name": "Letiště Praha",
    "logo": "partners/official/letiste-praha.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Letiště Praha",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/07/LOGO_CFW_LP.png",
    "website": "https://www.prg.aero/"
  },
  {
    "id": "official-medik8",
    "name": "Medik8",
    "logo": "partners/official/medik8.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Medik8",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/07/LOGO_CFW_MEDIK8_R.png",
    "website": "https://medik8.cz/"
  },
  {
    "id": "official-zinzino",
    "name": "Zinzino",
    "logo": "partners/official/zinzino.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Zinzino",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/07/LOGO_CFW_ZINZINO_20.png",
    "website": "https://www.zinzino.com/site/CZ/cs-CZ"
  },
  {
    "id": "official-naturbeds",
    "name": "naturbeds",
    "logo": "partners/official/naturbeds.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: naturbeds",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2024/08/cfw-loga-fullhd_Kreslici-platno-1-kopie-26-500x500.png",
    "website": "https://www.naturbeds.cz/en/"
  },
  {
    "id": "official-anna-brandejs",
    "name": "Anna Brandejs",
    "logo": "partners/official/anna-brandejs.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Anna Brandejs",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/LOGO_CFW_ANNA_BRANDEJS-500x500.png",
    "website": "https://www.annabrandejs.cz/"
  },
  {
    "id": "official-sothys",
    "name": "Sothys Paris",
    "logo": "partners/official/sothys.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Sothys Paris",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/LOGO_CFW_SOTHYS-500x500.png",
    "website": "https://www.sothys.cz/"
  },
  {
    "id": "official-tomas-arsov",
    "name": "Tomáš Arsov",
    "logo": "partners/official/tomas-arsov.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Tomáš Arsov",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/LOGO_CFW_TOMAS_ARSOV-500x500.png",
    "website": "https://tomasarsov.cz/"
  },
  {
    "id": "official-regionalni-noviny",
    "name": "Regionální noviny",
    "logo": "partners/official/regionalni-noviny.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Regionální noviny",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/LOGO_CFW_REGIONALNI_NOVINY-500x500.png",
    "website": "https://www.regionalninoviny.eu/"
  },
  {
    "id": "official-cfw",
    "name": "Czech Fashion Week · pořadatel",
    "logo": "partners/official/cfw.png",
    "width": 500,
    "height": 500,
    "alt": "Logo: Czech Fashion Week · pořadatel",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/05/LOGO_CFW_CFW-500x500.png",
    "website": "https://cfw.cz/",
    "isOrganiser": true
  },
  {
    "id": "official-st-havel",
    "name": "Chateau St. Havel",
    "logo": "partners/official/st-havel.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Chateau St. Havel",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/06/LOGO_CFW_ST_HAVEL.png",
    "website": "https://chateauhotel.cz/"
  },
  {
    "id": "official-nf-max-fitness",
    "name": "Nadační fond Max Fitness",
    "logo": "partners/official/nf-max-fitness.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Nadační fond Max Fitness",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/06/LOGO_CFW_MAX_FITNESS_NADACE.png",
    "website": "https://www.nfmaxfitness.cz/"
  },
  {
    "id": "official-max-fitness",
    "name": "Max Fitness",
    "logo": "partners/official/max-fitness.png",
    "width": 707,
    "height": 707,
    "alt": "Logo: Max Fitness",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2025/06/LOGO_CFW_MAX_FITNESS.png",
    "website": "https://www.maxfitness.cz/"
  },
  {
    "id": "official-u-mateje",
    "name": "U Matěje Kotrby",
    "logo": "partners/official/u-mateje.png",
    "width": 300,
    "height": 300,
    "alt": "Logo: U Matěje Kotrby",
    "category": "official-supporting",
    "sourceLabel": "Oficiální web Czech Fashion Week, partnerský přehled, ověřeno 20. 10. 2026",
    "identification": "source-logo",
    "tone": "dark",
    "sourceUrl": "https://cfw.cz/wp-content/uploads/2026/08/LOGO_U_MATEJE.png",
    "website": "https://www.umatejekotrby.cz/"
  }
];

export const officialMainPartners = officialPartners.filter(partner => partner.category === 'official-main');
export const officialSupportingPartners = officialPartners.filter(partner => partner.category === 'official-supporting');
