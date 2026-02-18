export const trades = {
  "General & Civil": [
    "Site Labourers", "Telehandler Drivers", "Groundworkers", "Machine Operators",
    "Streetworks Operatives", "Deep Drainage Teams", "Steel Fixers",
    "Shuttering Joiners", "Bricklayers", "Scaffolders", "Flaggers",
    "Tarmacers", "Landscapers",
  ],
  "Building & Fit-Out": [
    "Joiners", "Roofers", "UPVC Installers", "Solar Panel Installers",
    "Electricians", "Plumbers", "Heating Engineers", "Plasterers",
    "Dryliners", "Insulation Installers", "Painters & Decorators",
    "Ceramic Tilers", "Sealant Installers", "Kitchen Fitters", "Site Cleaners",
  ],
  "Management & Technical": [
    "Site Managers", "Engineers", "Quantity Surveyors", "Project Planners",
  ],
};

export const regions = [
  { name: "North West", cities: "Manchester, Liverpool, Preston, Chester" },
  { name: "North East", cities: "Newcastle, Sunderland, Durham, Middlesbrough" },
  { name: "Midlands", cities: "Birmingham, Nottingham, Leicester, Derby" },
  { name: "South West", cities: "Bristol, Exeter, Bath, Plymouth" },
  { name: "South East", cities: "London, Brighton, Reading, Oxford" },
  { name: "Scotland", cities: "Glasgow, Edinburgh, Aberdeen, Dundee" },
];

export const partnershipTiers = [
  {
    level: 1,
    name: "Strategic Referrer",
    price: "FREE",
    commission: "1%",
    earningsExample: "£1,000/week",
    description: "The easiest way to earn. Refer a client, earn commission on every invoice. No cost, no commitment.",
    benefits: [
      "1% commission on all referred invoices",
      "5% labour discount on your own bookings",
      "Instant credit account",
      "Ad-hoc flexibility — refer when you want",
      "Dedicated account manager",
      "Monthly commission statements",
    ],
  },
  {
    level: 2,
    name: "Market Access",
    price: "£995",
    commission: "2%",
    earningsExample: "£2,000/week",
    description: "For serious operators who want network access and enhanced earning potential.",
    benefits: [
      "2% commission on all referred invoices",
      "Full network access — connect with other partners",
      "Priority introductions to major contractors",
      "Enhanced partner status and branding",
      "Quarterly strategy reviews",
      "All Level 1 benefits included",
    ],
  },
  {
    level: 3,
    name: "Exclusive Territory",
    price: "£4,995",
    commission: "3%",
    earningsExample: "£3,000/week",
    description: "The ultimate partnership. Exclusive county territory, maximum commission, full operational support.",
    benefits: [
      "3% commission on all referred invoices",
      "Exclusive county territory — no competition",
      "Tender list inclusions on major projects",
      "Dispute resolution and QS support",
      "Full marketing and branding support",
      "VIP networking events and introductions",
      "All Level 1 & 2 benefits included",
    ],
  },
];

export const trustPoints = [
  { icon: "shield", text: "No Payroll Risk" },
  { icon: "check", text: "Vetted Tradespeople" },
  { icon: "phone", text: "One Call Solutions" },
  { icon: "credit", text: "Instant Credit Account" },
];

export const differentiators = [
  {
    title: "Decades of Combined Experience",
    description: "Our team has spent years on construction sites. We know the difference between a skilled tradesperson and a warm body.",
  },
  {
    title: "We Understand Construction Sites",
    description: "We've walked the sites, managed the gangs, and dealt with the headaches. We get it because we've lived it.",
  },
  {
    title: "Properly Vetted Tradespeople",
    description: "Every operative is checked, qualified, and ready to work. CSCS cards, qualifications, right to work — all verified before they reach your site.",
  },
  {
    title: "One Operative to Full Project Delivery",
    description: "Need a spark for a day or a full gang for six months? We scale with you. Labour, plant, materials, management — the lot.",
  },
];
