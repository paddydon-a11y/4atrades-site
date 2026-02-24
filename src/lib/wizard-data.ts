// ---------------------------------------------------------------------------
// Order Wizard – Data Definitions
// ---------------------------------------------------------------------------

// ---- Worker Types ---------------------------------------------------------

export interface WorkerType {
  id: string;
  name: string;
  rateName: string;
  tierLabel: string;
  tiers: string[];
}

export const workerTypes: WorkerType[] = [
  {
    id: "labourers",
    name: "Labourers",
    rateName: "Labourers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "groundworkers",
    name: "Groundworkers",
    rateName: "Groundworkers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "machine-operators",
    name: "Machine Operators",
    rateName: "Machine Operators",
    tierLabel: "Machine Type",
    tiers: ["Dumper", "TH", "Machine"],
  },
  {
    id: "streetworkers",
    name: "Streetworkers",
    rateName: "Streetworkers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "rebar-workers",
    name: "Rebar Workers",
    rateName: "Rebar Workers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "bricklayers",
    name: "Bricklayers",
    rateName: "Bricklayers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "joiners",
    name: "Joiners",
    rateName: "Joiners",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "roofers",
    name: "Roofers",
    rateName: "Roofers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "scaffolders",
    name: "Scaffolders",
    rateName: "Scaffolders",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "upvc-fitters",
    name: "UPVC Fitters",
    rateName: "UPVC Fitters",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "electricians",
    name: "Electricians",
    rateName: "Electricians",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "plumbers",
    name: "Plumbers",
    rateName: "Plumbers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "plasterers",
    name: "Plasterers",
    rateName: "Plasterers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "painters",
    name: "Painters",
    rateName: "Painters",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "tilers",
    name: "Tilers",
    rateName: "Tilers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "landscapers",
    name: "Landscapers",
    rateName: "Landscapers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "fencers",
    name: "Fencers",
    rateName: "Fencers",
    tierLabel: "Experience",
    tiers: ["1-3", "4-10", "10+"],
  },
  {
    id: "site-managers",
    name: "Site Managers",
    rateName: "Site Managers",
    tierLabel: "Role",
    tiers: ["Foremen", "Site Managers", "Project Manager"],
  },
  {
    id: "site-engineers",
    name: "Site Engineers",
    rateName: "Site Engineers",
    tierLabel: "Level",
    tiers: ["Basic", "Senior", "Project Lead"],
  },
  {
    id: "quantity-surveyors",
    name: "Quantity Surveyors",
    rateName: "Quantity Surveyors",
    tierLabel: "Level",
    tiers: ["Site", "Senior", "Commercial Manager"],
  },
];

// ---- Contractor Types -----------------------------------------------------

export interface ContractorType {
  id: string;
  name: string;
  description: string;
  priorityWorkers: string[];
}

export const contractorTypes: ContractorType[] = [
  {
    id: "groundwork",
    name: "Groundwork Contractor",
    description: "Foundations, drainage, and earthworks",
    priorityWorkers: ["groundworkers", "machine-operators", "labourers"],
  },
  {
    id: "building",
    name: "Building Contractor",
    description: "General building and structural works",
    priorityWorkers: ["bricklayers", "joiners", "labourers", "plasterers"],
  },
  {
    id: "roofing",
    name: "Roofing Contractor",
    description: "Roof installation and repair",
    priorityWorkers: ["roofers", "scaffolders", "labourers"],
  },
  {
    id: "civil",
    name: "Civil Engineering Contractor",
    description: "Roads, utilities, and infrastructure",
    priorityWorkers: [
      "streetworkers",
      "groundworkers",
      "machine-operators",
      "labourers",
    ],
  },
  {
    id: "fitout",
    name: "Fit-Out / Finishing Contractor",
    description: "Interior finishing and fit-out works",
    priorityWorkers: [
      "joiners",
      "plasterers",
      "painters",
      "tilers",
      "upvc-fitters",
    ],
  },
  {
    id: "mande",
    name: "M&E Contractor",
    description: "Mechanical and electrical installations",
    priorityWorkers: ["electricians", "plumbers", "labourers"],
  },
  {
    id: "landscaping",
    name: "Landscaping Contractor",
    description: "Landscaping, fencing, and external works",
    priorityWorkers: [
      "landscapers",
      "fencers",
      "machine-operators",
      "labourers",
    ],
  },
  {
    id: "main",
    name: "Main Contractor / Developer",
    description: "Project management and site supervision",
    priorityWorkers: [
      "site-managers",
      "site-engineers",
      "quantity-surveyors",
    ],
  },
];

// ---- Sorted Worker Types Helper -------------------------------------------

/**
 * Returns all worker types sorted so the priority workers for the given
 * contractor type appear first (in their defined priority order), followed
 * by the remaining worker types in their default order.
 */
export function getSortedWorkerTypes(contractorId: string): WorkerType[] {
  const contractor = contractorTypes.find((c) => c.id === contractorId);

  if (!contractor) {
    return workerTypes;
  }

  const prioritySet = new Set(contractor.priorityWorkers);

  const priority: WorkerType[] = contractor.priorityWorkers
    .map((id) => workerTypes.find((w) => w.id === id))
    .filter((w): w is WorkerType => w !== undefined);

  const rest = workerTypes.filter((w) => !prioritySet.has(w.id));

  return [...priority, ...rest];
}

// ---- Duration Options -----------------------------------------------------

export const durationOptions = [
  "1 day",
  "1 week",
  "2 weeks",
  "1 month",
  "3 months",
  "6 months",
  "Ongoing",
] as const;

export type Duration = (typeof durationOptions)[number];

// ---- Order Item -----------------------------------------------------------

export interface OrderItem {
  workerType: WorkerType;
  tier: string;
  quantity: number;
  ratePerHour: number;
}

// ---- Job Details ----------------------------------------------------------

export interface JobDetails {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  siteAddress: string;
  postcode: string;
  startDate: string;
  duration: string;
  specialRequirements: string;
}
