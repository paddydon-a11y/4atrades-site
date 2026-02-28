export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  relatedTrades: string[];
  relatedLocations: string[];
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: "construction-labour-costs-2026",
    title: "Construction Labour Costs in 2026: What Contractors Need to Know",
    metaTitle: "Construction Labour Costs 2026 | Rate Guide | 4A Trades",
    metaDescription:
      "Comprehensive guide to construction labour costs in 2026. Hourly rates by trade, regional variations, and what's driving prices across England and Wales.",
    date: "2026-01-15",
    author: "4A Trades",
    readTime: "8 min read",
    excerpt:
      "Labour costs continue to be the biggest variable in construction budgets. Here's what you need to know about 2026 rates across every major trade and region.",
    relatedTrades: ["labourers", "bricklayers", "electricians"],
    relatedLocations: ["london", "north-west", "south-east"],
  },
  {
    slug: "cscs-cards-explained",
    title: "CSCS Cards Explained: Every Card Type and What They Mean",
    metaTitle: "CSCS Cards Explained | Full Guide | 4A Trades",
    metaDescription:
      "Complete guide to CSCS card types. Green, blue, gold, black — what each card means, who needs one, and how to check your workers are properly carded.",
    date: "2026-01-22",
    author: "4A Trades",
    readTime: "7 min read",
    excerpt:
      "CSCS cards are the industry standard for proving competence on construction sites. But with multiple card types and colours, it can get confusing. Here's the full breakdown.",
    relatedTrades: ["labourers", "site-managers", "bricklayers"],
    relatedLocations: [],
  },
  {
    slug: "scaling-construction-workforce",
    title: "How to Scale Your Construction Workforce Without the Headaches",
    metaTitle: "Scale Construction Workforce | Growth Guide | 4A Trades",
    metaDescription:
      "Practical guide to scaling your construction workforce. How to manage rapid growth, avoid payroll pitfalls, and maintain quality across multiple sites.",
    date: "2026-02-05",
    author: "4A Trades",
    readTime: "9 min read",
    excerpt:
      "Growing your construction business means growing your workforce — but scaling up brings compliance risks, payroll headaches, and quality challenges. Here's how to do it properly.",
    relatedTrades: ["site-managers", "labourers", "quantity-surveyors"],
    relatedLocations: [],
  },
  {
    slug: "workers-rights-bill-construction",
    title: "The Workers' Rights Bill and What It Means for Construction",
    metaTitle: "Workers' Rights Bill Construction Impact | 4A Trades",
    metaDescription:
      "How the Workers' Rights Bill affects construction employers. Day-one rights, zero-hours changes, and what contractors need to do to stay compliant.",
    date: "2026-02-12",
    author: "4A Trades",
    readTime: "10 min read",
    excerpt:
      "The Workers' Rights Bill is now law, and construction is one of the most affected industries. From day-one unfair dismissal rights to zero-hours contract changes — here's what it means for you.",
    relatedTrades: [],
    relatedLocations: [],
  },
  {
    slug: "hiring-bricklayers-guide",
    title: "The Complete Guide to Hiring Bricklayers in 2026",
    metaTitle: "Hiring Bricklayers Guide 2026 | 4A Trades",
    metaDescription:
      "Everything you need to know about hiring bricklayers in 2026. Rates, qualifications, gang structures, and how to find quality brickies fast.",
    date: "2026-02-19",
    author: "4A Trades",
    readTime: "8 min read",
    excerpt:
      "Bricklayers remain one of the most in-demand trades in UK construction. Here's the complete guide to hiring them — from qualifications and rates to gang structures and availability.",
    relatedTrades: ["bricklayers", "labourers", "scaffolders"],
    relatedLocations: ["north-west", "london", "west-midlands"],
  },
  {
    slug: "groundworkers-vs-labourers",
    title: "Groundworkers vs Labourers: What's the Difference and When to Hire Each",
    metaTitle: "Groundworkers vs Labourers | Hiring Guide | 4A Trades",
    metaDescription:
      "Understanding the difference between groundworkers and labourers. When to hire each, what they do, and the cost difference for your construction project.",
    date: "2026-02-26",
    author: "4A Trades",
    readTime: "6 min read",
    excerpt:
      "It's one of the most common questions we get: should I hire groundworkers or labourers? The answer depends on your project, but here's how to decide.",
    relatedTrades: ["groundworkers", "labourers", "machine-operators"],
    relatedLocations: [],
  },
  {
    slug: "agency-vs-direct-hire-construction",
    title: "Agency vs Direct Hire: Which Is Better for Construction Companies?",
    metaTitle: "Agency vs Direct Hire Construction | 4A Trades",
    metaDescription:
      "Comparing agency labour hire vs direct employment for construction companies. Costs, compliance, flexibility, and the real pros and cons of each approach.",
    date: "2026-03-05",
    author: "4A Trades",
    readTime: "9 min read",
    excerpt:
      "Should you hire construction workers directly or use a labour agency? Both approaches have trade-offs. Here's an honest comparison to help you decide.",
    relatedTrades: ["labourers", "site-managers"],
    relatedLocations: [],
  },
  {
    slug: "subcontractor-compliance-guide",
    title: "Subcontractor Compliance: A Practical Guide for Main Contractors",
    metaTitle: "Subcontractor Compliance Guide | 4A Trades",
    metaDescription:
      "Practical guide to managing subcontractor compliance on construction sites. CIS, insurance, qualifications, and how to avoid the common pitfalls.",
    date: "2026-03-12",
    author: "4A Trades",
    readTime: "8 min read",
    excerpt:
      "Managing subcontractor compliance is one of the biggest headaches in construction. Here's a practical, no-nonsense guide to getting it right.",
    relatedTrades: ["site-managers", "quantity-surveyors"],
    relatedLocations: [],
  },
  {
    slug: "electrician-shortage-uk",
    title: "The UK Electrician Shortage: Causes, Impact, and What to Do About It",
    metaTitle: "UK Electrician Shortage 2026 | 4A Trades",
    metaDescription:
      "The UK faces a critical shortage of qualified electricians. What's causing it, how it affects your projects, and practical steps to secure the sparkies you need.",
    date: "2026-03-19",
    author: "4A Trades",
    readTime: "7 min read",
    excerpt:
      "The UK needs thousands more qualified electricians, and the shortage is getting worse. Here's what's behind it and how to make sure your projects aren't held up.",
    relatedTrades: ["electricians", "plumbers", "labourers"],
    relatedLocations: ["london", "south-east"],
  },
  {
    slug: "regional-construction-rates-breakdown",
    title: "Regional Construction Rates Breakdown: Where Labour Costs the Most",
    metaTitle: "Regional Construction Rates UK 2026 | 4A Trades",
    metaDescription:
      "Complete breakdown of construction labour rates by region across England and Wales. Compare costs in London, the North West, South East, and beyond.",
    date: "2026-03-26",
    author: "4A Trades",
    readTime: "10 min read",
    excerpt:
      "Construction labour rates vary significantly across England and Wales. Here's the complete regional breakdown — so you can budget accurately for your next project.",
    relatedTrades: ["labourers", "bricklayers", "electricians"],
    relatedLocations: ["london", "north-west", "south-east", "wales", "north-east"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}
