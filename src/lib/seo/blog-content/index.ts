export interface BlogSection {
  heading: string;
  content: string;
}

import { constructionLabourCosts2026 } from "./construction-labour-costs-2026";
import { cscsCardsExplained } from "./cscs-cards-explained";
import { scalingConstructionWorkforce } from "./scaling-construction-workforce";
import { workersRightsBillConstruction } from "./workers-rights-bill-construction";
import { hiringBricklayersGuide } from "./hiring-bricklayers-guide";
import { groundworkersVsLabourers } from "./groundworkers-vs-labourers";
import { agencyVsDirectHire } from "./agency-vs-direct-hire-construction";
import { subcontractorComplianceGuide } from "./subcontractor-compliance-guide";
import { electricianShortageUk } from "./electrician-shortage-uk";
import { regionalConstructionRatesBreakdown } from "./regional-construction-rates-breakdown";

const blogContentMap: Record<string, BlogSection[]> = {
  "construction-labour-costs-2026": constructionLabourCosts2026,
  "cscs-cards-explained": cscsCardsExplained,
  "scaling-construction-workforce": scalingConstructionWorkforce,
  "workers-rights-bill-construction": workersRightsBillConstruction,
  "hiring-bricklayers-guide": hiringBricklayersGuide,
  "groundworkers-vs-labourers": groundworkersVsLabourers,
  "agency-vs-direct-hire-construction": agencyVsDirectHire,
  "subcontractor-compliance-guide": subcontractorComplianceGuide,
  "electrician-shortage-uk": electricianShortageUk,
  "regional-construction-rates-breakdown": regionalConstructionRatesBreakdown,
};

export function getBlogContent(slug: string): BlogSection[] | null {
  return blogContentMap[slug] ?? null;
}
