/**
 * Facts transcribed from the published company website. These are published
 * statements, not independently verified business records.
 */
const source = "https://majesticmetalworks.com/";

export const companyContent = {
  name: "Majestic Metal Works",
  website: source,
  introduction: {
    tagline: "Where Strength Meets Style",
    summary:
      "The company website describes custom metal fabrication, welding, structural metalwork, and architectural metal products for residential and commercial settings.",
    sourcePage: source,
    status: "published-claim",
  },
  products: [
    { name: "S.S Railing", sourcePage: `${source}services/` },
    { name: "Residential S.S. Railing", sourcePage: `${source}services/` },
    { name: "Sliding Gate", sourcePage: `${source}services/` },
    { name: "Automation Gate", sourcePage: `${source}services/` },
    { name: "Window Glass", sourcePage: `${source}services/` },
    { name: "Bathroom Glass", sourcePage: `${source}services/` },
    { name: "Jhula", sourcePage: `${source}services/` },
    { name: "Glass Railing", sourcePage: `${source}services/` },
  ],
  services: [
    {
      name: "Custom metal fabrication, welding, and structural metalwork",
      sourcePage: source,
    },
    {
      name: "Automated gate supply and installation",
      detailsPublished: [
        "Sliding, swing, telescopic, and boom barrier gate types",
        "Remote or sensor access options",
        "Residential, commercial, and industrial applications",
        "Installation and after-sales support",
      ],
      sourcePage: `${source}services/`,
    },
    {
      name: "Sliding gate supply",
      detailsPublished: ["Manual or automated options"],
      sourcePage: `${source}services/`,
    },
    {
      name: "Residential railing and glass railing",
      detailsPublished: [
        "Balconies, staircases, terraces, entrances, and pools are listed as applications",
        "Framed and frameless glass railing options are described",
      ],
      sourcePage: `${source}services/`,
    },
    {
      name: "Window glass",
      detailsPublished: ["Clear, tinted, frosted, laminated, and toughened glass"],
      sourcePage: `${source}services/`,
    },
    {
      name: "Bathroom glass",
      detailsPublished: [
        "Enclosures, partitions, doors, and mirrors",
        "Frosted, clear, tinted, textured, and toughened glass",
      ],
      sourcePage: `${source}services/`,
    },
    { name: "Jhula", sourcePage: `${source}services/` },
  ],
  clients: [
    "ITC",
    "Reliance Group",
    "NIT College Jalandhar",
    "IIT",
    "Nivia Sports",
  ].map((name) => ({
    name,
    sourcePage: `${source}client/`,
    status: "published-association-unverified",
  })),
  contact: {
    phone: "+91 98144 26117",
    email: "majesticworks10@gmail.com",
    address: "Milk Plant Near Asr. Bye Pass C.J.S Public School, Punjab 144008",
    sourcePage: `${source}contact/`,
    status: "published-contact-details-confirm-before-launch",
  },
  claimsRequiringConfirmation: [
    {
      claim: "ISO 9001:2015 certified company",
      sourcePage: `${source}about/`,
    },
    {
      claim: "Years of experience, advanced techniques, timely delivery, and satisfaction claims",
      sourcePage: source,
    },
  ],
} as const;
