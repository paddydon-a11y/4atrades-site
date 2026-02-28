import { rates, regionCounties, type WorkerType as RateWorkerType } from "@/lib/rates";

const BASE_URL = "https://www.4atrades.co.uk";

export function canonical(path: string): string {
  return `${BASE_URL}${path}`;
}

export function tradeSlugToName(slug: string): string {
  const map: Record<string, string> = {
    labourers: "Labourers",
    groundworkers: "Groundworkers",
    "machine-operators": "Machine Operators",
    streetworkers: "Streetworkers",
    "rebar-workers": "Rebar Workers",
    bricklayers: "Bricklayers",
    joiners: "Joiners",
    roofers: "Roofers",
    scaffolders: "Scaffolders",
    "upvc-fitters": "UPVC Fitters",
    electricians: "Electricians",
    plumbers: "Plumbers",
    plasterers: "Plasterers",
    painters: "Painters",
    tilers: "Tilers",
    landscapers: "Landscapers",
    fencers: "Fencers",
    "site-managers": "Site Managers",
    "site-engineers": "Site Engineers",
    "quantity-surveyors": "Quantity Surveyors",
  };
  return map[slug] ?? slug;
}

export function regionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ and the /g, "-and-the-")
    .replace(/ of /g, "-of-")
    .replace(/ /g, "-");
}

export function regionSlugToName(slug: string): string {
  const regions = Object.keys(regionCounties);
  return regions.find((r) => regionSlug(r) === slug) ?? slug;
}

/**
 * Get the min and max hourly rate for a given worker type across all counties in a region.
 */
export function getRateRange(
  regionName: string,
  workerType: RateWorkerType,
): { min: number; max: number } | null {
  const counties = regionCounties[regionName as keyof typeof regionCounties];
  if (!counties) return null;

  let min = Infinity;
  let max = -Infinity;

  for (const county of counties) {
    const countyRates = (rates as Record<string, Record<string, Record<string, number>>>)[county];
    if (!countyRates) continue;
    const tierPrices = countyRates[workerType];
    if (!tierPrices) continue;
    for (const price of Object.values(tierPrices)) {
      if (price < min) min = price;
      if (price > max) max = price;
    }
  }

  if (min === Infinity) return null;
  return { min, max };
}

/**
 * Get the overall min and max hourly rate for a worker type across ALL regions.
 */
export function getNationalRateRange(
  workerType: RateWorkerType,
): { min: number; max: number } | null {
  let min = Infinity;
  let max = -Infinity;

  for (const region of Object.keys(regionCounties)) {
    const range = getRateRange(region, workerType);
    if (!range) continue;
    if (range.min < min) min = range.min;
    if (range.max > max) max = range.max;
  }

  if (min === Infinity) return null;
  return { min, max };
}

export function formatRate(rate: number): string {
  return `\u00A3${rate.toFixed(2)}`;
}
