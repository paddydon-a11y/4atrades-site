import { regionCounties } from "@/lib/rates";
import { getRateRange, formatRate, regionSlugToName, tradeSlugToName } from "./utils";
import type { WorkerType as RateWorkerType } from "@/lib/rates";

export interface CrossPageData {
  tradeSlug: string;
  locationSlug: string;
  tradeName: string;
  locationName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  counties: readonly string[];
  rateRange: { min: number; max: number } | null;
  introText: string;
  faqs: { question: string; answer: string }[];
}

export function getCrossPageData(
  tradeSlug: string,
  locationSlug: string,
): CrossPageData | null {
  const tradeName = tradeSlugToName(tradeSlug);
  const locationName = regionSlugToName(locationSlug);

  const counties =
    regionCounties[locationName as keyof typeof regionCounties];
  if (!counties) return null;

  const rateRange = getRateRange(locationName, tradeName as RateWorkerType);

  const rateText = rateRange
    ? `Hourly rates for ${tradeName.toLowerCase()} in the ${locationName} start from ${formatRate(rateRange.min)} per hour.`
    : "";

  return {
    tradeSlug,
    locationSlug,
    tradeName,
    locationName,
    metaTitle: `Hire ${tradeName} in ${locationName} | ${tradeName} ${locationName} | 4A Trades`,
    metaDescription: `Hire vetted ${tradeName.toLowerCase()} across the ${locationName}. Covering ${counties.slice(0, 3).join(", ")} & more. ${rateText} Fast deployment.`,
    heroHeadline: `${tradeName} in the ${locationName}`,
    heroSubtitle: `Hire vetted, CSCS-carded ${tradeName.toLowerCase()} across ${counties.length} ${counties.length === 1 ? "area" : "counties"} in the ${locationName}. ${rateText} Order online and get workers on site within 24 hours.`,
    counties,
    rateRange,
    introText: generateIntro(tradeName, locationName, counties, rateRange),
    faqs: generateFaqs(tradeName, locationName, counties, rateRange),
  };
}

function generateIntro(
  tradeName: string,
  locationName: string,
  counties: readonly string[],
  rateRange: { min: number; max: number } | null,
): string {
  const countyList =
    counties.length <= 3
      ? counties.join(", ")
      : `${counties.slice(0, 3).join(", ")}, and ${counties.length - 3} more ${counties.length - 3 === 1 ? "county" : "counties"}`;

  const rateInfo = rateRange
    ? ` Hourly rates across the ${locationName} range from ${formatRate(rateRange.min)} to ${formatRate(rateRange.max)} depending on experience and specialisation.`
    : "";

  return `4A Trades supplies vetted ${tradeName.toLowerCase()} across the ${locationName}, covering ${countyList}. All our ${tradeName.toLowerCase()} are CSCS-carded, reference-checked, and ready to deploy within 24 hours of your order.${rateInfo} Whether you need a single operative or a full team, we handle payroll, pensions, holiday pay, and compliance — so you can focus on building.`;
}

function generateFaqs(
  tradeName: string,
  locationName: string,
  counties: readonly string[],
  rateRange: { min: number; max: number } | null,
): { question: string; answer: string }[] {
  const faqs = [
    {
      question: `How quickly can you get ${tradeName.toLowerCase()} on site in the ${locationName}?`,
      answer: `We typically deploy ${tradeName.toLowerCase()} within 24 hours across all ${locationName} counties including ${counties.slice(0, 3).join(", ")}. For urgent requirements, same-day deployment may be available.`,
    },
    {
      question: `What areas in the ${locationName} do you cover?`,
      answer: `We cover the entire ${locationName} region including ${counties.join(", ")}. Our ${tradeName.toLowerCase()} are based locally and understand the regional construction market.`,
    },
    {
      question: `Are your ${tradeName.toLowerCase()} in the ${locationName} properly vetted?`,
      answer: `Yes. Every operative goes through our full vetting process: CSCS card verification, right to work checks, reference checks, and qualification verification. All ${tradeName.toLowerCase()} deployed in the ${locationName} meet our strict standards.`,
    },
  ];

  if (rateRange) {
    faqs.push({
      question: `What are the hourly rates for ${tradeName.toLowerCase()} in the ${locationName}?`,
      answer: `Rates for ${tradeName.toLowerCase()} in the ${locationName} range from ${formatRate(rateRange.min)} to ${formatRate(rateRange.max)} per hour, depending on experience level and specialisation. You can see exact rates for your county when you order online.`,
    });
  }

  return faqs;
}
