import { regionSlug } from "./utils";

export interface LocationData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  majorCities: string[];
  regionalDescription: string;
  neighbouringRegions: string[];
}

export const allLocations: LocationData[] = [
  {
    slug: regionSlug("North East"),
    name: "North East",
    metaTitle: "Construction Workers North East | Newcastle, Sunderland | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the North East. Covering County Durham, Northumberland, Tyne and Wear & Teesside. Competitive hourly rates, fast deployment.",
    heroHeadline: "Construction Workers Across the North East",
    heroSubtitle:
      "From Newcastle city centre to the Northumberland countryside — we supply vetted construction workers across every county in the North East. Order online, get workers on site within 24 hours.",
    majorCities: ["Newcastle", "Sunderland", "Durham", "Middlesbrough", "Gateshead", "South Shields"],
    regionalDescription:
      "The North East is home to major construction projects across Tyne and Wear, County Durham, Northumberland, and the Teesside area. From the regeneration programmes in Newcastle and Gateshead to housing developments across the region, 4A Trades supplies skilled construction workers at competitive hourly rates. Our North East operatives know the local sites, understand the regional market, and are ready to deploy at short notice.",
    neighbouringRegions: ["North West", "Yorkshire and the Humber"],
  },
  {
    slug: regionSlug("North West"),
    name: "North West",
    metaTitle: "Construction Workers North West | Manchester, Liverpool | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the North West. Covering Greater Manchester, Lancashire, Merseyside, Cheshire & Cumbria. Competitive rates.",
    heroHeadline: "Construction Workers Across the North West",
    heroSubtitle:
      "Manchester, Liverpool, Preston, Chester, and beyond — we supply vetted construction workers across the entire North West region. Order online, workers on site within 24 hours.",
    majorCities: ["Manchester", "Liverpool", "Preston", "Chester", "Blackpool", "Bolton"],
    regionalDescription:
      "The North West is one of the UK's busiest construction regions, with major projects across Greater Manchester, Merseyside, Lancashire, Cheshire, and Cumbria. From the ongoing regeneration of Manchester's city centre to Liverpool's waterfront developments and housing projects across the region, 4A Trades supplies the skilled construction workforce you need at competitive hourly rates.",
    neighbouringRegions: ["North East", "Yorkshire and the Humber", "West Midlands", "Wales"],
  },
  {
    slug: regionSlug("Yorkshire and the Humber"),
    name: "Yorkshire and the Humber",
    metaTitle: "Construction Workers Yorkshire | Leeds, Sheffield | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across Yorkshire and the Humber. Covering West Yorkshire, South Yorkshire, North Yorkshire & East Riding. Competitive rates.",
    heroHeadline: "Construction Workers Across Yorkshire",
    heroSubtitle:
      "Leeds, Sheffield, York, Hull, and across the county — we supply vetted construction workers throughout Yorkshire and the Humber. Fast deployment, competitive rates.",
    majorCities: ["Leeds", "Sheffield", "York", "Hull", "Bradford", "Huddersfield"],
    regionalDescription:
      "Yorkshire and the Humber is seeing significant construction growth, from the commercial developments in Leeds and Sheffield to residential projects across North, South, West, and East Yorkshire. 4A Trades supplies skilled operatives who understand the regional market and are ready to deploy across this thriving construction region.",
    neighbouringRegions: ["North East", "North West", "East Midlands"],
  },
  {
    slug: regionSlug("East Midlands"),
    name: "East Midlands",
    metaTitle: "Construction Workers East Midlands | Nottingham, Leicester | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the East Midlands. Covering Nottinghamshire, Leicestershire, Derbyshire, Lincolnshire & Northamptonshire. Competitive rates.",
    heroHeadline: "Construction Workers Across the East Midlands",
    heroSubtitle:
      "Nottingham, Leicester, Derby, Lincoln, and Northampton — we supply vetted construction workers across the entire East Midlands region. Order online today.",
    majorCities: ["Nottingham", "Leicester", "Derby", "Lincoln", "Northampton", "Kettering"],
    regionalDescription:
      "The East Midlands is a growing construction hub, with major logistics, residential, and commercial projects across Nottinghamshire, Leicestershire, Derbyshire, Lincolnshire, Northamptonshire, and Rutland. 4A Trades provides the skilled construction workers this growing region demands, at competitive hourly rates with rapid deployment.",
    neighbouringRegions: ["Yorkshire and the Humber", "West Midlands", "East of England"],
  },
  {
    slug: regionSlug("West Midlands"),
    name: "West Midlands",
    metaTitle: "Construction Workers West Midlands | Birmingham, Coventry | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the West Midlands. Covering Birmingham, Coventry, Wolverhampton, Staffordshire & Warwickshire. Competitive rates.",
    heroHeadline: "Construction Workers Across the West Midlands",
    heroSubtitle:
      "Birmingham, Coventry, Wolverhampton, and across the region — we supply vetted construction workers throughout the West Midlands. Fast deployment guaranteed.",
    majorCities: ["Birmingham", "Coventry", "Wolverhampton", "Stoke-on-Trent", "Shrewsbury", "Worcester"],
    regionalDescription:
      "The West Midlands is at the heart of UK construction, driven by HS2, the Commonwealth Games legacy, and major residential and commercial developments across Birmingham and the wider region. 4A Trades supplies skilled construction operatives across Staffordshire, Warwickshire, Worcestershire, Shropshire, and Herefordshire at competitive hourly rates.",
    neighbouringRegions: ["North West", "East Midlands", "South West", "Wales"],
  },
  {
    slug: regionSlug("East of England"),
    name: "East of England",
    metaTitle: "Construction Workers East of England | Cambridge, Essex | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the East of England. Covering Essex, Hertfordshire, Cambridgeshire, Norfolk, Suffolk & Bedfordshire. Competitive rates.",
    heroHeadline: "Construction Workers Across the East of England",
    heroSubtitle:
      "Cambridge, Chelmsford, Ipswich, Norwich, and beyond — we supply vetted construction workers across the entire East of England. Order online today.",
    majorCities: ["Cambridge", "Chelmsford", "Ipswich", "Norwich", "Luton", "Watford"],
    regionalDescription:
      "The East of England is experiencing rapid construction growth, driven by the Cambridge biotech corridor, housing demand across Essex and Hertfordshire, and commercial developments throughout the region. 4A Trades supplies skilled workers across Bedfordshire, Cambridgeshire, Essex, Hertfordshire, Norfolk, and Suffolk.",
    neighbouringRegions: ["London", "South East", "East Midlands"],
  },
  {
    slug: regionSlug("London"),
    name: "London",
    metaTitle: "Construction Workers London | Central, Greater London | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across London. From central London to the outer boroughs. CSCS-carded, vetted operatives. Competitive hourly rates.",
    heroHeadline: "Construction Workers Across London",
    heroSubtitle:
      "From Zone 1 to the outer boroughs — we supply vetted construction workers across the whole of London. The capital's construction demands met with 24-hour deployment.",
    majorCities: ["Central London", "Canary Wharf", "Stratford", "Croydon", "Ealing", "Bromley"],
    regionalDescription:
      "London is the UK's largest construction market, with constant demand for skilled operatives across residential, commercial, infrastructure, and refurbishment projects. From high-rise developments in the City and Canary Wharf to housing projects across the boroughs, 4A Trades supplies the construction workers London needs at competitive hourly rates.",
    neighbouringRegions: ["South East", "East of England"],
  },
  {
    slug: regionSlug("South East"),
    name: "South East",
    metaTitle: "Construction Workers South East | Surrey, Kent, Hampshire | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the South East. Covering Surrey, Kent, Hampshire, Berkshire, Sussex, Oxfordshire & Buckinghamshire. Competitive rates.",
    heroHeadline: "Construction Workers Across the South East",
    heroSubtitle:
      "Brighton, Reading, Oxford, Canterbury, and across the region — we supply vetted construction workers throughout the South East of England.",
    majorCities: ["Brighton", "Reading", "Oxford", "Canterbury", "Guildford", "Southampton"],
    regionalDescription:
      "The South East is one of England's most active construction regions, with major projects across Surrey, Kent, Hampshire, Berkshire, Sussex, Oxfordshire, and Buckinghamshire. 4A Trades supplies skilled construction operatives at competitive rates, with workers ready to deploy across this economically vibrant region.",
    neighbouringRegions: ["London", "South West", "East of England"],
  },
  {
    slug: regionSlug("South West"),
    name: "South West",
    metaTitle: "Construction Workers South West | Bristol, Exeter, Bath | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across the South West. Covering Bristol, Cornwall, Devon, Dorset, Gloucestershire, Somerset & Wiltshire. Competitive rates.",
    heroHeadline: "Construction Workers Across the South West",
    heroSubtitle:
      "Bristol, Exeter, Bath, Plymouth, and beyond — we supply vetted construction workers across the entire South West region. Fast deployment, competitive rates.",
    majorCities: ["Bristol", "Exeter", "Bath", "Plymouth", "Swindon", "Cheltenham"],
    regionalDescription:
      "The South West offers diverse construction opportunities, from Bristol's booming commercial sector to residential developments across Devon, Cornwall, and Somerset. 4A Trades supplies skilled construction workers across every South West county, including Gloucestershire, Dorset, and Wiltshire, at competitive hourly rates.",
    neighbouringRegions: ["South East", "West Midlands", "Wales"],
  },
  {
    slug: regionSlug("Wales"),
    name: "Wales",
    metaTitle: "Construction Workers Wales | Cardiff, Swansea, Newport | 4A Trades",
    metaDescription:
      "Hire skilled construction workers across Wales. Covering Cardiff, Swansea, Newport, and all 22 Welsh counties. Competitive hourly rates, fast deployment.",
    heroHeadline: "Construction Workers Across Wales",
    heroSubtitle:
      "Cardiff, Swansea, Newport, and across all 22 counties — we supply vetted construction workers throughout Wales. Order online, get workers on site fast.",
    majorCities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor", "Carmarthen"],
    regionalDescription:
      "Wales is seeing growing investment in construction, from the regeneration of Cardiff Bay and the South Wales Valleys to infrastructure projects in North Wales. 4A Trades supplies skilled construction operatives across all 22 Welsh counties, at competitive hourly rates with rapid deployment anywhere in the principality.",
    neighbouringRegions: ["North West", "West Midlands", "South West"],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return allLocations.map((l) => l.slug);
}
