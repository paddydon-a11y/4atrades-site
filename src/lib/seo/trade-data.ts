export interface TradeData {
  slug: string;
  name: string;
  rateName: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  category: "General & Civil" | "Building & Fit-Out" | "Management & Technical";
  whatWeProvide: string[];
  experienceTiers: { label: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedTrades: string[];
}

export const allTrades: TradeData[] = [
  {
    slug: "labourers",
    name: "Labourers",
    rateName: "Labourers",
    metaTitle: "Hire Labourers UK | Construction Labour Hire | 4A Trades",
    metaDescription:
      "Hire vetted construction labourers across England & Wales. From general labourers to experienced site operatives. Competitive hourly rates, 24-hour deployment.",
    heroHeadline: "Reliable Labourers. On Site Fast.",
    heroSubtitle:
      "From site clearance to materials handling, our labourers are CSCS-carded, vetted, and ready to work. Order online and get workers deployed within 24 hours.",
    category: "General & Civil",
    whatWeProvide: [
      "General site labourers for clearance, loading, and materials handling",
      "Experienced labourers for bricklaying gangs and finishing trades",
      "CSCS-carded operatives with valid right to work documentation",
      "Flexible hire from one day to ongoing contracts",
      "Full payroll, pension, and holiday pay compliance handled",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "General labourers suited to site clearance, materials handling, and basic tasks" },
      { label: "4-10 years", description: "Experienced labourers capable of working alongside skilled trades and operating basic plant" },
      { label: "10+ years", description: "Senior labourers with extensive site knowledge, often used as working chargehands" },
    ],
    faqs: [
      { question: "What qualifications do your labourers have?", answer: "All our labourers hold valid CSCS cards (minimum Green Labourer card), have verified right to work, and complete our internal vetting process including reference checks." },
      { question: "How quickly can you get labourers on site?", answer: "We typically deploy labourers within 24 hours of your order. For urgent requirements, same-day deployment may be available depending on your location." },
      { question: "What is the minimum hire period?", answer: "You can hire labourers for as little as one day. We also offer weekly, monthly, and ongoing arrangements at the same competitive hourly rates." },
      { question: "Do I need to provide PPE?", answer: "Our labourers arrive with their own basic PPE (boots, hard hat, hi-vis). Any site-specific PPE requirements should be communicated when ordering." },
    ],
    relatedTrades: ["groundworkers", "bricklayers", "scaffolders"],
  },
  {
    slug: "groundworkers",
    name: "Groundworkers",
    rateName: "Groundworkers",
    metaTitle: "Hire Groundworkers UK | Foundations & Drainage | 4A Trades",
    metaDescription:
      "Hire skilled groundworkers for foundations, drainage, and earthworks across England & Wales. CSCS-carded, vetted operatives. Competitive hourly rates.",
    heroHeadline: "Skilled Groundworkers. Foundations Done Right.",
    heroSubtitle:
      "Foundations, drainage, concreting, and earthworks — our groundworkers have the experience to get it done properly. Fully vetted and CSCS-carded.",
    category: "General & Civil",
    whatWeProvide: [
      "Experienced groundworkers for foundations, footings, and substructure",
      "Drainage specialists including foul and surface water systems",
      "Concreting teams for slabs, bases, and structural pours",
      "Earthworks operatives for excavation and levelling",
      "Full compliance with CDM regulations and site safety standards",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Junior groundworkers suited to trenching, backfilling, and general groundworks support" },
      { label: "4-10 years", description: "Competent groundworkers experienced in drainage, foundations, and concrete placement" },
      { label: "10+ years", description: "Senior groundworkers capable of running gangs and complex substructure works" },
    ],
    faqs: [
      { question: "Can you supply groundworkers for residential and commercial projects?", answer: "Yes. Our groundworkers cover everything from single house foundations to large commercial and infrastructure projects across England and Wales." },
      { question: "Do your groundworkers hold CPCS or NPORS cards?", answer: "Many of our experienced groundworkers hold additional plant qualifications such as CPCS or NPORS alongside their CSCS cards, particularly those who also operate mini-diggers." },
      { question: "Can you supply full groundwork gangs?", answer: "Absolutely. We can supply individual groundworkers or full gangs including labourers, machine operators, and experienced foremen." },
      { question: "What drainage work can your groundworkers handle?", answer: "Our operatives cover foul drainage, surface water systems, soakaways, attenuation tanks, and connections to existing mains." },
    ],
    relatedTrades: ["labourers", "machine-operators", "rebar-workers"],
  },
  {
    slug: "machine-operators",
    name: "Machine Operators",
    rateName: "Machine Operators",
    metaTitle: "Hire Machine Operators UK | Plant Operatives | 4A Trades",
    metaDescription:
      "Hire CPCS/NPORS-certified machine operators across England & Wales. Dumpers, telehandlers, excavators and more. Fast deployment, competitive rates.",
    heroHeadline: "Certified Machine Operators. Plant-Ready.",
    heroSubtitle:
      "CPCS and NPORS-certified operators for dumpers, telehandlers, excavators, and more. Fully vetted, insured, and ready to mobilise within 24 hours.",
    category: "General & Civil",
    whatWeProvide: [
      "CPCS/NPORS-certified dumper operators (forward tip and articulated)",
      "Telehandler operators for materials handling and loading",
      "360 excavator operators from micro to 30-tonne machines",
      "Ride-on roller and compaction plant operators",
      "All operators carry valid certification and CSCS cards",
    ],
    experienceTiers: [
      { label: "Dumper", description: "Forward-tip and articulated dumper operators for earthmoving and material transport" },
      { label: "Telehandler", description: "Telehandler operators for loading, unloading, and materials distribution on site" },
      { label: "Machine", description: "360 excavator and specialist plant operators for complex earthworks and demolition" },
    ],
    faqs: [
      { question: "What plant certifications do your operators hold?", answer: "Our operators hold valid CPCS (blue card) or NPORS certifications for their specific machine categories, plus CSCS cards and right to work documentation." },
      { question: "Do you supply the plant as well?", answer: "We supply the operators. Plant hire can be arranged separately or you can use your own machines. Our operators are experienced across all major manufacturer models." },
      { question: "Can you provide operators at short notice?", answer: "Yes. We maintain a large pool of machine operators and can typically deploy within 24 hours. Same-day may be available for common machine categories." },
      { question: "What size excavators can your operators handle?", answer: "From micro excavators (under 1 tonne) up to 30-tonne tracked machines. We match the operator to your specific plant requirements." },
    ],
    relatedTrades: ["groundworkers", "labourers", "landscapers"],
  },
  {
    slug: "bricklayers",
    name: "Bricklayers",
    rateName: "Bricklayers",
    metaTitle: "Hire Bricklayers UK | Brickwork Contractors | 4A Trades",
    metaDescription:
      "Hire skilled bricklayers across England & Wales. Experienced in residential, commercial, and industrial brickwork. Competitive hourly rates, fast deployment.",
    heroHeadline: "Expert Bricklayers. Quality Brickwork Guaranteed.",
    heroSubtitle:
      "From housing developments to commercial builds, our bricklayers deliver quality brickwork on time. CSCS-carded, NVQ-qualified, and properly vetted.",
    category: "General & Civil",
    whatWeProvide: [
      "NVQ-qualified bricklayers for residential and commercial projects",
      "Blockwork specialists for internal and external walls",
      "Feature brickwork including arches, soldier courses, and decorative bonds",
      "Bricklaying gangs with labourers included",
      "Full compliance with building regulations and quality standards",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified bricklayers suited to standard blockwork and basic facing brick" },
      { label: "4-10 years", description: "Experienced bricklayers capable of feature work, mixed bonds, and high-quality finishes" },
      { label: "10+ years", description: "Master bricklayers for premium projects, restoration work, and gang supervision" },
    ],
    faqs: [
      { question: "Are your bricklayers NVQ-qualified?", answer: "Yes. All our bricklayers hold a minimum NVQ Level 2 in Trowel Occupations (Bricklaying) and valid CSCS blue skilled worker cards." },
      { question: "Can you supply bricklaying gangs?", answer: "Yes. We supply individual bricklayers or full gangs including labourers for mixing, carrying, and scaffolding moves. Gang rates are available on request." },
      { question: "What types of brickwork can your bricklayers handle?", answer: "Our bricklayers cover facing brick, engineering brick, blockwork, stonework, decorative bonds, arches, and feature panels across all project types." },
      { question: "Do you cover both residential and commercial projects?", answer: "Absolutely. From single house builds to large housing developments and commercial projects — we have bricklayers experienced across all sectors." },
    ],
    relatedTrades: ["labourers", "scaffolders", "plasterers"],
  },
  {
    slug: "electricians",
    name: "Electricians",
    rateName: "Electricians",
    metaTitle: "Hire Electricians UK | Electrical Contractors | 4A Trades",
    metaDescription:
      "Hire qualified electricians across England & Wales. 18th Edition certified, JIB-graded operatives for commercial and residential projects. Competitive hourly rates.",
    heroHeadline: "Qualified Electricians. Wired for Success.",
    heroSubtitle:
      "18th Edition certified, JIB-graded electricians for first fix, second fix, and everything in between. Fully vetted and ready to mobilise.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "18th Edition (BS 7671) certified electricians",
      "JIB-graded operatives from approved electricians to technicians",
      "First fix and second fix electrical installation",
      "Commercial and industrial wiring specialists",
      "Testing and inspection qualified operatives (2391/2394/2395)",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Approved electricians suited to first fix containment and basic installation work" },
      { label: "4-10 years", description: "Experienced electricians handling full installations, distribution boards, and testing" },
      { label: "10+ years", description: "Senior electricians for complex commercial systems, design input, and supervision" },
    ],
    faqs: [
      { question: "What qualifications do your electricians hold?", answer: "All our electricians hold 18th Edition certification (BS 7671), valid ECS/CSCS cards, and relevant NVQ or City & Guilds qualifications. Many also hold 2391 inspection and testing." },
      { question: "Can you supply electricians for commercial projects?", answer: "Yes. We supply electricians experienced in commercial, industrial, and residential sectors including new builds, refurbishments, and maintenance contracts." },
      { question: "Do your electricians carry their own tools?", answer: "Yes. Our electricians arrive with a full set of hand tools, insulated tools, and basic test equipment. Specialist equipment should be arranged on site." },
      { question: "Can you supply electrical gangs?", answer: "Yes. We can supply individual electricians or full teams including mates and labourers for larger installation projects." },
    ],
    relatedTrades: ["plumbers", "joiners", "labourers"],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    rateName: "Plumbers",
    metaTitle: "Hire Plumbers UK | Plumbing Contractors | 4A Trades",
    metaDescription:
      "Hire qualified plumbers across England & Wales. Experienced in commercial and domestic plumbing, heating, and pipework. Fast deployment, competitive rates.",
    heroHeadline: "Qualified Plumbers. No Leaks, No Delays.",
    heroSubtitle:
      "From first fix pipework to final connections, our plumbers are qualified, vetted, and ready to work. Commercial and residential specialists available.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "Qualified plumbers for first fix and second fix installations",
      "Commercial plumbing specialists for large-scale projects",
      "Heating engineers for boiler installations and underfloor heating",
      "Pipework specialists for copper, plastic, and steel systems",
      "Gas Safe registered operatives available on request",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified plumbers for basic pipework, sanitary installations, and domestic work" },
      { label: "4-10 years", description: "Experienced plumbers handling complex commercial systems and multi-storey installations" },
      { label: "10+ years", description: "Senior plumbers for design input, complex systems, and team supervision" },
    ],
    faqs: [
      { question: "Are your plumbers Gas Safe registered?", answer: "Gas Safe registered plumbers are available on request. Please specify your gas work requirements when ordering and we will ensure appropriately certified operatives are deployed." },
      { question: "What types of plumbing projects do you cover?", answer: "Everything from domestic bathroom installations to large commercial fit-outs, including first fix, second fix, heating systems, and specialist pipework." },
      { question: "Can you supply plumbers for ongoing contracts?", answer: "Yes. We offer flexible hire from one day to ongoing contracts. Many of our clients have plumbers on long-term placements across multiple projects." },
      { question: "Do your plumbers work with all pipe materials?", answer: "Yes. Our plumbers are experienced with copper, plastic (push-fit and solvent weld), stainless steel, and press-fit systems." },
    ],
    relatedTrades: ["electricians", "joiners", "labourers"],
  },
  {
    slug: "joiners",
    name: "Joiners",
    rateName: "Joiners",
    metaTitle: "Hire Joiners UK | Carpentry Contractors | 4A Trades",
    metaDescription:
      "Hire skilled joiners and carpenters across England & Wales. First fix, second fix, and specialist joinery. NVQ-qualified, competitive hourly rates.",
    heroHeadline: "Skilled Joiners. Precision Carpentry.",
    heroSubtitle:
      "First fix framing to second fix finishing — our joiners are NVQ-qualified, experienced, and deliver quality carpentry on every project.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "NVQ-qualified joiners for first fix and second fix carpentry",
      "Structural timber frame erectors and roofing carpenters",
      "Door hanging, skirting, architrave, and finishing specialists",
      "Kitchen and bathroom fit-out joiners",
      "Formwork and shuttering carpenters for concrete works",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified joiners suited to basic first fix, stud walls, and standard finishing" },
      { label: "4-10 years", description: "Experienced joiners handling complex second fix, staircases, and bespoke joinery" },
      { label: "10+ years", description: "Master joiners for high-end finishes, restoration, and specialist timber work" },
    ],
    faqs: [
      { question: "Do your joiners cover both first fix and second fix?", answer: "Yes. We supply joiners experienced in all aspects of carpentry from structural first fix (timber frame, floor joists, roof trusses) to fine second fix (doors, skirting, kitchens)." },
      { question: "Can you supply shuttering joiners?", answer: "Yes. We have experienced shuttering and formwork carpenters available for concrete works, including complex forms for walls, columns, and slabs." },
      { question: "What qualifications do your joiners hold?", answer: "All our joiners hold minimum NVQ Level 2 in Wood Occupations and valid CSCS blue skilled worker cards. Many hold NVQ Level 3 for advanced work." },
      { question: "Do your joiners work on both residential and commercial projects?", answer: "Absolutely. From house builds to office fit-outs, our joiners cover all sectors with equal expertise." },
    ],
    relatedTrades: ["labourers", "plasterers", "painters"],
  },
  {
    slug: "roofers",
    name: "Roofers",
    rateName: "Roofers",
    metaTitle: "Hire Roofers UK | Roofing Contractors | 4A Trades",
    metaDescription:
      "Hire experienced roofers across England & Wales. Pitched roofing, flat roofing, and lead work specialists. Vetted operatives, competitive hourly rates.",
    heroHeadline: "Experienced Roofers. Watertight Results.",
    heroSubtitle:
      "Pitched roofing, flat roofing, lead work, and more. Our roofers are qualified, experienced, and deliver watertight results on every project.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "Pitched roof tilers and slaters for new build and refurbishment",
      "Flat roofing specialists (felt, single-ply, GRP, and liquid systems)",
      "Lead workers for flashings, valleys, and heritage roofing",
      "Fascia, soffit, and rainwater goods installers",
      "Roof repair and maintenance operatives",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified roofers suited to standard tiling, slating, and basic flat roofing" },
      { label: "4-10 years", description: "Experienced roofers handling complex roof designs, lead work, and specialist systems" },
      { label: "10+ years", description: "Master roofers for heritage projects, complex geometries, and gang supervision" },
    ],
    faqs: [
      { question: "What types of roofing do your operatives cover?", answer: "Our roofers cover pitched roofing (tiles and slates), flat roofing (felt, single-ply, GRP), lead work, and specialist systems. We match the operative to your specific requirements." },
      { question: "Do your roofers have working at height training?", answer: "Yes. All our roofers hold valid CSCS cards and have completed working at height training. Many also hold IPAF or other access equipment certifications." },
      { question: "Can you supply full roofing gangs?", answer: "Yes. We supply individual roofers or full gangs including labourers for battening, tiling, and material handling." },
      { question: "Do you supply roofers for both new build and refurbishment?", answer: "Absolutely. Our roofers work across new build housing, commercial projects, and refurbishment/re-roofing contracts." },
    ],
    relatedTrades: ["scaffolders", "joiners", "labourers"],
  },
  {
    slug: "scaffolders",
    name: "Scaffolders",
    rateName: "Scaffolders",
    metaTitle: "Hire Scaffolders UK | Scaffolding Erectors | 4A Trades",
    metaDescription:
      "Hire qualified scaffolders across England & Wales. CISRS-carded operatives for tube and fitting, system scaffold, and bespoke access solutions.",
    heroHeadline: "Qualified Scaffolders. Safe Access Sorted.",
    heroSubtitle:
      "CISRS-carded scaffolders for tube and fitting, system scaffold, and complex access solutions. Safety-first, properly qualified, and ready to build.",
    category: "General & Civil",
    whatWeProvide: [
      "CISRS-carded scaffolders (Part 1, Part 2, and Advanced)",
      "Tube and fitting scaffold erectors",
      "System scaffold specialists (HAKI, Layher, Cuplok)",
      "Temporary roof and containment scaffold teams",
      "Scaffold labourers for loading and material handling",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "CISRS Part 1 scaffolders for basic independent and putlog scaffolds" },
      { label: "4-10 years", description: "CISRS Part 2 scaffolders for complex structures and system scaffold erection" },
      { label: "10+ years", description: "Advanced scaffolders for suspended, cantilevered, and bespoke access solutions" },
    ],
    faqs: [
      { question: "What scaffold certifications do your operatives hold?", answer: "All our scaffolders hold valid CISRS cards (Part 1, Part 2, or Advanced) plus CSCS cards. They are trained in the specific scaffold systems required for your project." },
      { question: "Do you supply scaffold labourers as well?", answer: "Yes. We supply scaffolders and scaffold labourers as a package or individually, depending on your gang requirements." },
      { question: "Can your scaffolders work with system scaffold?", answer: "Yes. We have operatives experienced with all major system scaffold brands including HAKI, Layher, Cuplok, and Kwikstage." },
      { question: "Do you cover temporary roofs and containment?", answer: "Yes. Our advanced scaffolders are experienced in temporary roofs, containment scaffolds, and other specialist access structures." },
    ],
    relatedTrades: ["roofers", "labourers", "bricklayers"],
  },
  {
    slug: "plasterers",
    name: "Plasterers",
    rateName: "Plasterers",
    metaTitle: "Hire Plasterers UK | Plastering Contractors | 4A Trades",
    metaDescription:
      "Hire skilled plasterers across England & Wales. Skimming, rendering, dry lining, and specialist finishes. NVQ-qualified, competitive hourly rates.",
    heroHeadline: "Skilled Plasterers. Smooth Finishes Every Time.",
    heroSubtitle:
      "From dry lining to decorative rendering, our plasterers are NVQ-qualified and deliver flawless finishes. Vetted, insured, and ready to start.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "NVQ-qualified plasterers for skimming and multi-coat work",
      "Dry lining specialists (metal and timber stud, dot and dab)",
      "External rendering operatives (sand/cement, monocouche, silicone)",
      "Suspended ceiling installers and partition wall erectors",
      "Specialist finishes including Venetian plaster and acoustic systems",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified plasterers for standard skimming, boarding, and basic rendering" },
      { label: "4-10 years", description: "Experienced plasterers handling dry lining systems, external render, and complex finishes" },
      { label: "10+ years", description: "Master plasterers for heritage restoration, specialist finishes, and gang supervision" },
    ],
    faqs: [
      { question: "Do your plasterers cover dry lining as well?", answer: "Yes. Our plasterers cover all aspects including dot-and-dab, metal and timber stud partitions, suspended ceilings, and traditional wet plastering." },
      { question: "Can you supply plasterers for external rendering?", answer: "Yes. We have operatives experienced in sand/cement render, monocouche, silicone render systems, and insulated render systems (EWI)." },
      { question: "What qualifications do your plasterers hold?", answer: "All our plasterers hold NVQ Level 2 in Plastering (minimum) and valid CSCS blue skilled worker cards. Many hold NVQ Level 3 for advanced work." },
      { question: "Can you supply full plastering gangs?", answer: "Yes. We supply individual plasterers or gangs including labourers for mixing, carrying, and general support work." },
    ],
    relatedTrades: ["joiners", "painters", "labourers"],
  },
  {
    slug: "painters",
    name: "Painters",
    rateName: "Painters",
    metaTitle: "Hire Painters & Decorators UK | Painting Contractors | 4A Trades",
    metaDescription:
      "Hire skilled painters and decorators across England & Wales. Commercial and residential painting, spraying, and specialist finishes. Competitive rates.",
    heroHeadline: "Professional Painters. Perfect Finishes.",
    heroSubtitle:
      "Commercial spraying, residential decorating, and specialist finishes — our painters deliver quality results on schedule. Vetted and ready to start.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "NVQ-qualified painters and decorators for all project types",
      "Commercial airless spraying operatives",
      "Residential decorators for new build and refurbishment",
      "Industrial painting specialists including protective coatings",
      "Wallpapering and specialist finish operatives",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified painters for standard emulsion, gloss, and basic preparation work" },
      { label: "4-10 years", description: "Experienced painters handling commercial spraying, specialist coatings, and high-quality finishes" },
      { label: "10+ years", description: "Master decorators for heritage properties, specialist finishes, and large-scale contracts" },
    ],
    faqs: [
      { question: "Do your painters cover both residential and commercial work?", answer: "Yes. Our painters work across all sectors from new build housing to large commercial fit-outs, including spray application and traditional brush-and-roller work." },
      { question: "Can you supply spray painters?", answer: "Yes. We have operatives experienced with airless spraying equipment for commercial and residential projects, including HVLP systems for fine finish work." },
      { question: "Do your painters do preparation work?", answer: "Yes. Our painters handle all preparation including filling, sanding, priming, and surface repair before applying final finishes." },
      { question: "What finishes can your painters apply?", answer: "Emulsion, gloss, eggshell, specialist coatings, protective finishes, wallpaper, and decorative effects. We match the operative to your specification." },
    ],
    relatedTrades: ["plasterers", "tilers", "labourers"],
  },
  {
    slug: "tilers",
    name: "Tilers",
    rateName: "Tilers",
    metaTitle: "Hire Tilers UK | Wall & Floor Tiling Contractors | 4A Trades",
    metaDescription:
      "Hire skilled tilers across England & Wales. Wall and floor tiling for commercial and residential projects. Experienced, vetted, competitive hourly rates.",
    heroHeadline: "Expert Tilers. Precision From Floor to Wall.",
    heroSubtitle:
      "Ceramic, porcelain, natural stone, and large format — our tilers handle every material and setting. Qualified, vetted, and ready to deliver.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "Experienced wall and floor tilers for all tile types and sizes",
      "Large format tile specialists (up to 1200x600mm and beyond)",
      "Natural stone installation (marble, granite, travertine, slate)",
      "Commercial tiling for retail, hospitality, and office fit-outs",
      "Waterproofing and tanking in wet areas (bathrooms, swimming pools)",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Qualified tilers for standard ceramic and porcelain wall and floor installations" },
      { label: "4-10 years", description: "Experienced tilers handling large format, natural stone, and complex layouts" },
      { label: "10+ years", description: "Master tilers for bespoke designs, heritage restoration, and high-end commercial projects" },
    ],
    faqs: [
      { question: "What tile sizes can your tilers work with?", answer: "From small mosaics to large format tiles (1200mm+ and beyond). Our tilers are experienced with all standard and oversized formats." },
      { question: "Do your tilers handle waterproofing?", answer: "Yes. Our tilers are experienced with tanking and waterproofing systems for wet rooms, bathrooms, and swimming pool areas." },
      { question: "Can you supply tilers for commercial projects?", answer: "Absolutely. We supply tilers for retail fit-outs, restaurants, hotels, offices, and other commercial environments." },
      { question: "Do your tilers work with natural stone?", answer: "Yes. We have tilers experienced with marble, granite, travertine, slate, and other natural stones, including sealing and specialist adhesives." },
    ],
    relatedTrades: ["plasterers", "plumbers", "labourers"],
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    rateName: "Landscapers",
    metaTitle: "Hire Landscapers UK | Landscaping Operatives | 4A Trades",
    metaDescription:
      "Hire skilled landscapers across England & Wales. Hard and soft landscaping, groundworks, and external works. Vetted operatives, competitive hourly rates.",
    heroHeadline: "Skilled Landscapers. Transforming Outdoor Spaces.",
    heroSubtitle:
      "Hard landscaping, soft landscaping, and external works — our operatives transform outdoor spaces on residential, commercial, and public realm projects.",
    category: "General & Civil",
    whatWeProvide: [
      "Hard landscaping operatives (paving, walling, kerbing, edging)",
      "Soft landscaping teams (turfing, planting, seeding, mulching)",
      "Groundworks for external areas (sub-base, drainage, levels)",
      "Fencing and boundary treatment installers",
      "Public realm and commercial landscape specialists",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Landscaping operatives for basic paving, turfing, and external works support" },
      { label: "4-10 years", description: "Experienced landscapers handling complex hard landscaping, natural stone, and water features" },
      { label: "10+ years", description: "Senior landscapers for public realm projects, design input, and team supervision" },
    ],
    faqs: [
      { question: "Do your landscapers cover both hard and soft landscaping?", answer: "Yes. Our operatives handle everything from paving and walling to turfing, planting, and irrigation systems." },
      { question: "Can you supply landscapers for public realm projects?", answer: "Absolutely. We have operatives experienced in streetscaping, public parks, amenity areas, and Section 278/38 works." },
      { question: "Do your landscapers handle drainage?", answer: "Yes. Our landscapers are experienced with surface water drainage, French drains, soakaways, and external groundworks." },
      { question: "What paving materials can your landscapers work with?", answer: "Block paving, natural stone, porcelain, concrete slabs, resin-bound, and tarmac. We match operatives to your specification." },
    ],
    relatedTrades: ["fencers", "machine-operators", "labourers"],
  },
  {
    slug: "fencers",
    name: "Fencers",
    rateName: "Fencers",
    metaTitle: "Hire Fencers UK | Fencing Contractors | 4A Trades",
    metaDescription:
      "Hire experienced fencing operatives across England & Wales. Security fencing, timber fencing, and boundary treatments. Competitive hourly rates.",
    heroHeadline: "Professional Fencers. Boundaries Secured.",
    heroSubtitle:
      "Security fencing, timber panels, post and rail, and specialist boundary treatments — our fencing operatives deliver quality installations on every project.",
    category: "General & Civil",
    whatWeProvide: [
      "Security fencing specialists (palisade, mesh, anti-climb)",
      "Timber fencing operatives (close-board, panels, post and rail)",
      "Acoustic and environmental barrier installers",
      "Bollard and vehicle barrier installation teams",
      "Gate hanging and automation specialists",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Fencing operatives for standard timber and wire fencing installations" },
      { label: "4-10 years", description: "Experienced fencers handling security fencing, metal work, and commercial boundary systems" },
      { label: "10+ years", description: "Senior fencing specialists for complex security projects, automation, and team supervision" },
    ],
    faqs: [
      { question: "What types of fencing do your operatives install?", answer: "Everything from residential timber panels to commercial security fencing including palisade, welded mesh, chain-link, and specialist acoustic barriers." },
      { question: "Can your fencers handle security fencing?", answer: "Yes. We have operatives experienced in palisade, anti-climb mesh, Heras temporary fencing, and other security-grade boundary systems." },
      { question: "Do your fencers install gates?", answer: "Yes. Our operatives handle gate hanging for pedestrian, vehicle, and sliding gates. Automation can be specified when ordering." },
      { question: "Do you cover both residential and commercial fencing?", answer: "Yes. From garden fencing to commercial site perimeters and industrial security fencing — we cover all sectors." },
    ],
    relatedTrades: ["landscapers", "labourers", "groundworkers"],
  },
  {
    slug: "streetworkers",
    name: "Streetworkers",
    rateName: "Streetworkers",
    metaTitle: "Hire Streetworkers UK | Highways Operatives | 4A Trades",
    metaDescription:
      "Hire qualified streetworkers and highways operatives across England & Wales. NRSWA-trained, Chapter 8 certified. Competitive hourly rates.",
    heroHeadline: "Qualified Streetworkers. Highways Done Safely.",
    heroSubtitle:
      "NRSWA-trained, Chapter 8 certified streetworkers for utility works, reinstatements, and highways projects. Fully compliant and ready to mobilise.",
    category: "General & Civil",
    whatWeProvide: [
      "NRSWA-qualified streetworkers for utility reinstatements",
      "Chapter 8 certified operatives for highways works",
      "Traffic management operatives (Sector 12 and NHSS 12A/B)",
      "Reinstatement teams for road, footway, and verge works",
      "Utility operatives for gas, water, electric, and telecoms",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Streetworkers with NRSWA units for basic excavation and reinstatement" },
      { label: "4-10 years", description: "Experienced streetworkers handling complex reinstatements and multi-utility works" },
      { label: "10+ years", description: "Senior streetworkers for supervision, complex highways projects, and compliance" },
    ],
    faqs: [
      { question: "What qualifications do your streetworkers hold?", answer: "All our streetworkers hold NRSWA (New Roads and Street Works Act) qualifications and Chapter 8 highway works certification, plus valid CSCS cards." },
      { question: "Can you supply traffic management operatives?", answer: "Yes. We have operatives with Sector 12 and NHSS 12A/B qualifications for traffic management on highways works." },
      { question: "Do your streetworkers cover utility reinstatements?", answer: "Yes. Our operatives are experienced in reinstatements to SROH (Specification for the Reinstatement of Openings in Highways) standards for all utility types." },
      { question: "Can you supply full highways gangs?", answer: "Yes. We supply individual streetworkers or full gangs including labourers, operatives, and supervisors for highways and utilities projects." },
    ],
    relatedTrades: ["groundworkers", "machine-operators", "labourers"],
  },
  {
    slug: "rebar-workers",
    name: "Rebar Workers",
    rateName: "Rebar Workers",
    metaTitle: "Hire Rebar Workers UK | Steel Fixers | 4A Trades",
    metaDescription:
      "Hire skilled rebar workers and steel fixers across England & Wales. Reinforcement installation for foundations, slabs, and structures. Competitive rates.",
    heroHeadline: "Skilled Rebar Workers. Reinforcement Done Right.",
    heroSubtitle:
      "Experienced steel fixers for foundations, slabs, columns, and structural reinforcement. Properly qualified, safety-conscious, and ready to work.",
    category: "General & Civil",
    whatWeProvide: [
      "Experienced steel fixers for all types of reinforcement",
      "Foundation and substructure rebar installation",
      "Slab, column, and beam reinforcement specialists",
      "Rebar cutting, bending, and tying operatives",
      "Reading and working from structural drawings",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "Rebar workers suited to basic cutting, bending, and tying under supervision" },
      { label: "4-10 years", description: "Experienced steel fixers capable of complex reinforcement from drawings" },
      { label: "10+ years", description: "Senior rebar specialists for complex structures, pile caps, and gang supervision" },
    ],
    faqs: [
      { question: "Can your rebar workers read structural drawings?", answer: "Yes. Our experienced steel fixers can work directly from structural engineering drawings and bar bending schedules without constant supervision." },
      { question: "What types of structures can your rebar workers reinforce?", answer: "Foundations, pile caps, ground beams, suspended slabs, columns, walls, retaining structures, and precast elements." },
      { question: "Do you supply full rebar gangs?", answer: "Yes. We supply individual steel fixers or full gangs for large-scale reinforcement projects including labourers for material handling." },
      { question: "What certifications do your rebar workers hold?", answer: "All our rebar workers hold valid CSCS cards and have relevant experience in steel fixing. Senior operatives often hold additional CPCS certifications for cranage support." },
    ],
    relatedTrades: ["groundworkers", "labourers", "machine-operators"],
  },
  {
    slug: "upvc-fitters",
    name: "UPVC Fitters",
    rateName: "UPVC Fitters",
    metaTitle: "Hire UPVC Fitters UK | Window & Door Installers | 4A Trades",
    metaDescription:
      "Hire experienced UPVC fitters across England & Wales. Window, door, and conservatory installers for new build and refurbishment. Competitive hourly rates.",
    heroHeadline: "Expert UPVC Fitters. Windows & Doors Installed Right.",
    heroSubtitle:
      "Experienced UPVC window, door, and conservatory installers for new build and refurbishment projects. Qualified, vetted, and ready to fit.",
    category: "Building & Fit-Out",
    whatWeProvide: [
      "UPVC window installers for new build and replacement projects",
      "Composite and UPVC door fitters",
      "Conservatory and orangery installation teams",
      "Bi-fold and sliding door specialists",
      "FENSA/CERTASS-aware operatives for building regulations compliance",
    ],
    experienceTiers: [
      { label: "1-3 years", description: "UPVC fitters for standard window and door installations" },
      { label: "4-10 years", description: "Experienced fitters handling bi-folds, large glazed units, and complex openings" },
      { label: "10+ years", description: "Senior fitters for specialist installations, conservatories, and quality supervision" },
    ],
    faqs: [
      { question: "Do your UPVC fitters work on new builds?", answer: "Yes. Our fitters work on new build housing developments, commercial projects, and refurbishment contracts. We supply operatives experienced in high-volume new build installation." },
      { question: "Can your fitters install aluminium windows?", answer: "Yes. While primarily UPVC specialists, many of our fitters also have experience with aluminium and timber window systems." },
      { question: "Do your fitters handle building regulations compliance?", answer: "Our fitters are aware of FENSA and CERTASS requirements. The installing company typically registers the work — our operatives ensure correct installation standards." },
      { question: "Can you supply UPVC fitters for a full housing development?", answer: "Absolutely. We regularly supply fitters for housing developers, handling window and door installation across multi-plot sites." },
    ],
    relatedTrades: ["joiners", "scaffolders", "labourers"],
  },
  {
    slug: "site-managers",
    name: "Site Managers",
    rateName: "Site Managers",
    metaTitle: "Hire Site Managers UK | Construction Management | 4A Trades",
    metaDescription:
      "Hire experienced site managers, foremen, and project managers across England & Wales. SMSTS-certified, CSCS black card holders. Competitive day rates.",
    heroHeadline: "Experienced Site Managers. Projects Run Properly.",
    heroSubtitle:
      "From working foremen to project managers — our site management professionals keep your projects on time, on budget, and compliant.",
    category: "Management & Technical",
    whatWeProvide: [
      "Working foremen for hands-on site supervision",
      "Site managers for day-to-day project management",
      "Project managers for multi-site and complex programme delivery",
      "SMSTS-certified, CSCS black card holders",
      "Experienced across residential, commercial, and infrastructure sectors",
    ],
    experienceTiers: [
      { label: "Foremen", description: "Working foremen providing hands-on supervision of trade gangs and site activities" },
      { label: "Site Managers", description: "Experienced site managers handling programme, quality, health & safety, and subcontractor coordination" },
      { label: "Project Manager", description: "Senior project managers for complex multi-site delivery, client liaison, and commercial management" },
    ],
    faqs: [
      { question: "What qualifications do your site managers hold?", answer: "All our site managers hold SMSTS (Site Management Safety Training Scheme) certification and CSCS black manager cards. Many also hold NEBOSH, first aid, and fire marshal certifications." },
      { question: "Can you supply a working foreman?", answer: "Yes. We have experienced foremen who combine hands-on trade skills with supervisory capability — ideal for smaller sites or gang supervision on larger projects." },
      { question: "Do your site managers handle health and safety?", answer: "Yes. Our site managers are trained and experienced in CDM compliance, risk assessments, method statements, and daily H&S management on site." },
      { question: "What sectors do your site managers cover?", answer: "Residential, commercial, industrial, infrastructure, and refurbishment. We match management experience to your specific project requirements." },
    ],
    relatedTrades: ["site-engineers", "quantity-surveyors", "labourers"],
  },
  {
    slug: "site-engineers",
    name: "Site Engineers",
    rateName: "Site Engineers",
    metaTitle: "Hire Site Engineers UK | Construction Engineers | 4A Trades",
    metaDescription:
      "Hire qualified site engineers across England & Wales. Setting out, levelling, and quality control specialists. Degree-qualified, competitive day rates.",
    heroHeadline: "Qualified Site Engineers. Precision On Every Project.",
    heroSubtitle:
      "Setting out, levelling, quality control, and technical support — our site engineers bring precision and expertise to your construction projects.",
    category: "Management & Technical",
    whatWeProvide: [
      "Degree-qualified site engineers for setting out and levelling",
      "Total station and GPS equipment operators",
      "Quality control and inspection specialists",
      "As-built survey and record drawing preparation",
      "Technical support for substructure and superstructure works",
    ],
    experienceTiers: [
      { label: "Basic", description: "Graduate engineers handling standard setting out, levelling, and quality checks" },
      { label: "Senior", description: "Experienced engineers managing complex setting out, earthworks control, and technical coordination" },
      { label: "Project Lead", description: "Lead engineers for multi-discipline coordination, design input, and technical management" },
    ],
    faqs: [
      { question: "What qualifications do your site engineers hold?", answer: "Our site engineers hold relevant degrees (civil engineering, construction management) and CSCS cards. Senior engineers often hold ICE or CIOB membership." },
      { question: "Do your site engineers bring their own equipment?", answer: "Basic equipment (levels, tapes, lasers) is typically carried. Total stations and GPS equipment should be provided on site or can be arranged." },
      { question: "Can you supply engineers for groundworks?", answer: "Yes. We have engineers experienced in earthworks control, foundation setting out, drainage levels, and substructure quality control." },
      { question: "What software do your engineers use?", answer: "Our engineers are experienced with AutoCAD, Revit, and common construction software. Specific software requirements should be discussed when ordering." },
    ],
    relatedTrades: ["site-managers", "quantity-surveyors", "groundworkers"],
  },
  {
    slug: "quantity-surveyors",
    name: "Quantity Surveyors",
    rateName: "Quantity Surveyors",
    metaTitle: "Hire Quantity Surveyors UK | QS Contractors | 4A Trades",
    metaDescription:
      "Hire experienced quantity surveyors across England & Wales. Cost management, valuations, and commercial support. RICS-qualified, competitive day rates.",
    heroHeadline: "Experienced Quantity Surveyors. Commercial Control.",
    heroSubtitle:
      "Cost planning, valuations, variations, and final accounts — our quantity surveyors keep your projects commercially tight and properly managed.",
    category: "Management & Technical",
    whatWeProvide: [
      "Site-based QS support for measurement and valuation",
      "Senior QS for cost planning and commercial management",
      "Commercial managers for multi-project portfolio oversight",
      "Subcontractor procurement and package management",
      "Final account preparation and dispute resolution support",
    ],
    experienceTiers: [
      { label: "Site", description: "Site-based quantity surveyors handling measurement, interim valuations, and variation recording" },
      { label: "Senior", description: "Senior QS managing cost plans, subcontractor accounts, and commercial reporting" },
      { label: "Commercial Manager", description: "Commercial directors/managers overseeing multiple projects, procurement strategy, and P&L" },
    ],
    faqs: [
      { question: "Are your quantity surveyors RICS-qualified?", answer: "Many of our senior QS professionals hold MRICS or FRICS status. All our QS operatives have relevant degree qualifications and significant industry experience." },
      { question: "Can you supply a QS for a short-term project?", answer: "Yes. We offer flexible QS hire from project-specific engagements to ongoing placements. Many clients use our QS service to cover busy periods or specific project phases." },
      { question: "What sectors do your QS professionals cover?", answer: "Residential, commercial, industrial, infrastructure, and refurbishment. We match QS experience to your specific sector requirements." },
      { question: "Do your QS professionals use industry-standard software?", answer: "Yes. Our QS professionals are experienced with CostX, CATO, Bluebeam, and standard Microsoft Office applications for measurement and reporting." },
    ],
    relatedTrades: ["site-managers", "site-engineers", "labourers"],
  },
];

export function getTradeBySlug(slug: string): TradeData | undefined {
  return allTrades.find((t) => t.slug === slug);
}

export function getAllTradeSlugs(): string[] {
  return allTrades.map((t) => t.slug);
}
