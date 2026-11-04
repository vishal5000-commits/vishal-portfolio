export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: 'PR & Leadership' | 'Marketing' | 'Innovation & Fellowship' | 'Summits & Industry';
  dateLabel?: string;
  context: string;
  responsibilities: string[];
  keyCompetencies: string[];
  isFeatured?: boolean;
}

export interface ProtoSemWeek {
  weekNumber: number;
  sessionTitle: string;
  subtitle: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  learningObjectives: string[];
  keyTakeaways: string[];
  personalReflections: string;
  photographUrl?: string;
  photographCaption?: string;
  resources: { title: string; type: 'Document' | 'Presentation' | 'Link' | 'Framework'; url: string }[];
  relatedActivities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  concept: string;
  vision: string;
  status: 'Conceptual Exploration' | 'Feasibility Stage' | 'Pilot Model';
  focusAreas: string[];
  description: string;
  imageUrl: string;
  opportunityStatement: string;
  valueProposition: string[];
  distributionStrategy: string;
  targetAudience: string;
}

export interface BentoCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  iconName: string;
  accent: string;
}

export const portfolioData = {
  personalInfo: {
    name: "KS Vishal",
    title: "Entrepreneurial Enthusiast | Marketing Strategist | Business Development Enthusiast | Creative Thinker",
    brandStatement: "THINK. CONNECT. EXECUTE.",
    heroIntro: "Hello, I’m KS Vishal.",
    heroSubtitle: "A business-minded individual passionate about entrepreneurship, marketing, innovation and building meaningful connections.",
    heroPhilosophy: "I believe in transforming ideas into opportunities through strategic thinking, effective communication and execution.",
    avatarUrl: "/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.58.04_AM_fa9a33d4.jpeg",
    location: "Coimbatore, Tamil Nadu, India",
    institution: "Kumaraguru College of Liberal Arts and Science (KCLAS)",
    degree: "Bachelor of Business Administration (BBA)",
    quote: "An idea becomes an opportunity only when someone has the courage to execute it.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ks-vishal",
      github: "https://github.com/vishal5000-commits",
      instagram: "https://instagram.com/ksvishal",
      email: "vishal.ks@example.com",
    },
    animatedInterests: [
      "Entrepreneurial Strategy",
      "Brand & Marketing Growth",
      "Agri-Business Innovation",
      "Business Development",
      "Public Relations & Leadership",
      "Startup Ecosystems"
    ]
  },

  about: {
    bio: "I am a Bachelor of Business Administration student at Kumaraguru College of Liberal Arts and Science (KCLAS) with a strong passion for entrepreneurship, international business, marketing, business development, and startup ecosystems. I thrive on organising high-impact events, connecting with diverse innovators, identifying unmet business opportunities, and exploring scalable business models.",
    philosophy: "An idea becomes an opportunity only when someone has the courage to execute it.",
    strengths: [
      { name: "Strategic Execution", desc: "Turning high-level concepts into actionable, on-the-ground operational milestones." },
      { name: "Marketing Strategy", desc: "Crafting resonant narratives, ambassador channels, and high-conversion student outreach." },
      { name: "Public Relations", desc: "Maintaining trust, coordinating stakeholders, and amplifying organizational initiatives." },
      { name: "Business Development", desc: "Discovering customer pain points, distribution bottlenecks, and collaborative synergies." },
      { name: "Event Management", desc: "Coordinating multi-tier campus summits, workshops, and large-scale youth festivals." },
      { name: "Communication & PR", desc: "Articulating ideas persuasively across peers, leadership, and external industry partners." },
      { name: "Creative Thinking", desc: "Synthesizing unconventional solutions to classic distribution and community challenges." },
      { name: "Networking", desc: "Cultivating genuine, lasting relationships with mentors, founders, and peer leaders." }
    ]
  },

  bentoGrid: [
    {
      id: "bento-1",
      category: "Education",
      title: "Academic Foundation",
      subtitle: "BBA — Kumaraguru College of Liberal Arts and Science (KCLAS)",
      description: "Undergraduate study focused on modern management principles, market dynamics, commercial law, and organizational leadership.",
      highlight: "KCLAS Coimbatore",
      iconName: "GraduationCap",
      accent: "from-sky-500/20 to-blue-600/10"
    },
    {
      id: "bento-2",
      category: "Entrepreneurship",
      title: "Startup Ecosystem Involvement",
      subtitle: "Active Ecosystem Engager",
      description: "Hands-on immersion in startup summits, incubation labs, venture pitch sessions, and founder-driven student forums.",
      highlight: "Venture Catalyst",
      iconName: "Rocket",
      accent: "from-amber-500/20 to-orange-600/10"
    },
    {
      id: "bento-3",
      category: "Marketing",
      title: "Marketing Leadership",
      subtitle: "Yugam 2026 & Institutional Campaigns",
      description: "Spearheading multi-channel marketing campaigns, student ambassador initiatives, and youth engagement strategies.",
      highlight: "Campaign Strategist",
      iconName: "Megaphone",
      accent: "from-emerald-500/20 to-teal-600/10"
    },
    {
      id: "bento-4",
      category: "Public Relations",
      title: "Public Relations Executive",
      subtitle: "Entrepreneurship Vertical — KCLAS",
      description: "Managing organizational communications, welcoming guest entrepreneurs, and aligning collaborative student verticals.",
      highlight: "Stakeholder Relations",
      iconName: "Users",
      accent: "from-purple-500/20 to-indigo-600/10"
    },
    {
      id: "bento-5",
      category: "Networking",
      title: "Relationship Building",
      subtitle: "Connecting Leaders & Innovative Thinkers",
      description: "Deeply committed to bridging the gap between student talent, seasoned business founders, and institutional resources.",
      highlight: "Ecosystem Connector",
      iconName: "Network",
      accent: "from-rose-500/20 to-pink-600/10"
    },
    {
      id: "bento-6",
      category: "Interests",
      title: "Strategic Focus Verticals",
      subtitle: "Commerce & Agritech Exploration",
      description: "Exploring scalable solutions in agri-business supply chains, FMCG distribution pipelines, and retail modernization.",
      highlight: "Agri-Tech & Retail",
      iconName: "Compass",
      accent: "from-amber-400/20 to-yellow-600/10"
    }
  ] as BentoCard[],

  experiences: [
    {
      id: "exp-1",
      role: "Public Relations Executive",
      organization: "Entrepreneurship Vertical – KCLAS",
      category: "PR & Leadership",
      context: "Driving external communications and institutional engagement for the core entrepreneurship vertical at Kumaraguru College of Liberal Arts and Science.",
      responsibilities: [
        "Managing formal communication and coordination among committee heads, faculty advisors, and student members.",
        "Facilitating networking with guest speakers, startup founders, alumni entrepreneurs, and external participants.",
        "Supporting end-to-end planning and logistics for entrepreneurship workshops, idea jams, and startup pitch events.",
        "Promoting entrepreneurial activities across campus departments to maximize student involvement and cross-disciplinary innovation."
      ],
      keyCompetencies: ["Public Relations", "Stakeholder Engagement", "Event Coordination", "Institutional Communication"],
      isFeatured: true
    },
    {
      id: "exp-2",
      role: "Marketing Team Member (with Leadership Responsibilities)",
      organization: "YUGAM 2026",
      category: "Marketing",
      context: "Playing a pivotal role in the comprehensive marketing operations for Yugam 2026, the premier inter-collegiate techno-cultural and sports festival of South India.",
      responsibilities: [
        "Strategizing and executing internal campus marketing drives to engage student bodies across Kumaraguru Institutions.",
        "Leading external outreach campaigns targeting colleges and universities across Tamil Nadu and neighbouring states.",
        "Coordinating and mentoring the student ambassador program to build localized peer networks.",
        "Planning high-impact social media promotional campaigns and engagement content calendar.",
        "Driving large-scale event registration campaigns to achieve record participation across flagship competitions.",
        "Assisting in marketing strategy, sponsorship deck collateral, and multi-channel audience conversion."
      ],
      keyCompetencies: ["Marketing Strategy", "Campaign Execution", "Ambassador Programs", "Social Media Outreach"],
      isFeatured: true
    },
    {
      id: "exp-3",
      role: "ProtoSem Ambassador",
      organization: "PRICE ProtoSem (FORGE Innovation & Ventures × RAI × Kumaraguru Institutions)",
      category: "Innovation & Fellowship",
      context: "Representing and advocating for the prestigious ProtoSem program, an experiential innovation fellowship co-created by FORGE, Retailers Association of India (RAI), and Kumaraguru Institutions.",
      responsibilities: [
        "Promoting the ProtoSem programme to high-aptitude students across undergraduate departments.",
        "Organising and moderating student awareness sessions detailing the curriculum, industry mentors, and venture support.",
        "Coordinating program activities, design thinking sessions, and student registration onboarding.",
        "Supporting entrepreneurship education initiatives and bridging students with real-world startup venture incubation."
      ],
      keyCompetencies: ["Innovation Advocacy", "Program Management", "Student Mentorship", "Cross-Institutional Coordination"],
      isFeatured: true
    },
    {
      id: "exp-4",
      role: "Participant & Event Organising Exposure",
      organization: "India Student Startup Summit 2025",
      category: "Summits & Industry",
      context: "Engaging in hands-on organizing and active participation in the nationwide student startup congregation hosted at Kumaraguru Institutions.",
      responsibilities: [
        "Actively supported event coordination, stage management, and guest delegation logistics.",
        "Gained direct exposure to founder masterclasses, angel investor keynotes, and early-stage startup showcases.",
        "Interacted with emerging student startup teams to understand ideation, business validation, and product milestones."
      ],
      keyCompetencies: ["Summit Management", "Startup Networking", "Logistical Planning"],
      isFeatured: false
    },
    {
      id: "exp-5",
      role: "Volunteer & Professional Exposure",
      organization: "Chennai Retail Summit",
      category: "Summits & Industry",
      context: "Volunteered and attended sessions at the prestigious regional retail summit, gaining real-time exposure to the retail ecosystem and corporate networking.",
      responsibilities: [
        "Supported on-ground delegate registrations, session ushering, and executive briefing assistance.",
        "Gained deep exposure to FMCG distribution discussions, omnichannel retail models, and supply chain technologies.",
        "Networked with seasoned retail leaders, business heads, and brand strategists across diverse enterprise verticals."
      ],
      keyCompetencies: ["Retail Industry Insights", "Corporate Networking", "Professional Volunteering"],
      isFeatured: false
    }
  ] as ExperienceItem[],

  protoSemJourney: {
    sectionTitle: "THE PROTOSEM JOURNEY – LEARNING THROUGH EXPERIENCE",
    subtitle: "A weekly documentation of practical entrepreneurship, product innovation, and design-thinking sprints under FORGE Innovation & Ventures, RAI & Kumaraguru Institutions.",
    cohortOverview: "ProtoSem represents an experiential learning fellowship designed to instill industrial product thinking, market discovery methodologies, and structured venture creation.",
    weeks: [
      {
        weekNumber: 1,
        sessionTitle: "Orientation & Problem Discovery",
        subtitle: "Unpacking Customer Pain Points & Opportunity Landscapes",
        status: "Completed",
        learningObjectives: [
          "Understand the core philosophy of design-thinking and user-centric innovation.",
          "Distinguish between perceived customer desires and authentic foundational pain points.",
          "Formulate precise problem hypotheses within selected industry domains (Agri & Retail)."
        ],
        keyTakeaways: [
          "A business does not fail because the product cannot be built; it fails because people do not need it.",
          "Interviewing customers requires listening without pitching the solution prematurely.",
          "Framing the 'Problem Statement' correctly saves months of misguided development."
        ],
        personalReflections: "This opening week shifted my mindset from brainstorming product features to deeply analyzing user frictions. Hearing real case studies on failed startups reinforced how critical early validation is before committing resources.",
        photographUrl: "/src/assets/images/protosem_innovation_1793769462256.jpg",
        photographCaption: "Interactive ideation sprint and problem tree formulation session.",
        resources: [
          { title: "Customer Problem Discovery Framework", type: "Framework", url: "#" },
          { title: "Weekly Sprint 01 Overview Deck", type: "Presentation", url: "#" }
        ],
        relatedActivities: [
          "Domain selection & peer team alignment",
          "Drafting 15 qualitative customer interview questions",
          "Stakeholder mapping for retail supply chains"
        ]
      },
      {
        weekNumber: 2,
        sessionTitle: "Customer Validation & Empathy Mapping",
        subtitle: "Engaging the Field: On-Ground Field Work and User Personas",
        status: "Completed",
        learningObjectives: [
          "Conduct qualitative discovery conversations with local vendors and consumers.",
          "Synthesize raw field responses into actionable Empathy Maps and User Personas.",
          "Map the emotional journey, friction triggers, and behavioral workarounds of targets."
        ],
        keyTakeaways: [
          "Actions speak louder than claimed preferences; observe actual purchase habits.",
          "Intermediaries in agri-supply chains add significant markups while creating trust deficits for both parties.",
          "Trust and freshness reliability are the two primary metrics consumers value in daily farm goods."
        ],
        personalReflections: "Conducting field interactions taught me how nuanced customer communication must be. People will rarely tell you their problems directly; you must observe where they expend time, money, and stress.",
        photographUrl: "/src/assets/images/pure_harvest_farm_1793769461119.jpg",
        photographCaption: "Field discovery notes and user journey synthesis workshop.",
        resources: [
          { title: "Empathy Canvas & Persona Guide", type: "Document", url: "#" },
          { title: "Field Interview Recording Rubric", type: "Document", url: "#" }
        ],
        relatedActivities: [
          "Ground visits to vegetable distribution hubs",
          "Synthesis of 12 target customer responses",
          "Creation of primary persona profiles"
        ]
      },
      {
        weekNumber: 3,
        sessionTitle: "Value Proposition & Business Model Foundations",
        subtitle: "Translating Frictions into Sustainable Economic Models",
        status: "Completed",
        learningObjectives: [
          "Utilize Alexander Osterwalder's Value Proposition Canvas for product-market fit.",
          "Formulate unique selling propositions (USPs) that create clear competitive advantage.",
          "Explore revenue models across direct-to-consumer and institutional B2B pipelines."
        ],
        keyTakeaways: [
          "Pain relievers and gain creators must directly map to customer job-to-be-done.",
          "Price is rarely the sole differentiator; convenience, traceability, and consistency command margins.",
          "Drafting a lean canvas highlights the riskiest assumptions that must be tested first."
        ],
        personalReflections: "This session opened my eyes to the unit economics behind consumer distribution. It is easy to be enthusiastic about high gross margins, but logistics and spoilage in perishables quickly erode profits if not methodically calculated.",
        photographUrl: "/src/assets/images/agri_fmcg_distribution_1793769462206.jpg",
        photographCaption: "Value Proposition canvas workshop with industry mentors.",
        resources: [
          { title: "Value Proposition Canvas Template", type: "Framework", url: "#" },
          { title: "Unit Economics in FMCG Distribution", type: "Document", url: "#" }
        ],
        relatedActivities: [
          "Mapping pain points to Pure Harvest product lines",
          "Evaluating competitive margins in cold-pressed oil distribution",
          "Peer review of unit economics models"
        ]
      },
      {
        weekNumber: 4,
        sessionTitle: "Supply Chain & Distribution Mechanics",
        subtitle: "Designing Resilient Sourcing and Direct Delivery Networks",
        status: "In Progress",
        learningObjectives: [
          "Analyze modern cold-chain and direct-delivery logistics structures.",
          "Examine aggregator vs. peer-to-peer distribution models in perishable commodities.",
          "Design minimum viable delivery pilot routes for urban consumer clusters."
        ],
        keyTakeaways: [
          "Last-mile delivery is often the most expensive component of FMCG logistics.",
          "Consolidation hubs enable farm produce to be sorted, graded, and dispatched in under 4 hours.",
          "Strategic partnerships with local retail touchpoints can slash initial capex drastically."
        ],
        personalReflections: "Currently analyzing how small-scale farmers in the Coimbatore belt interact with collection centers. Discovering that digital coordination can bridge information asymmetry without needing massive physical infrastructure.",
        photographUrl: "/src/assets/images/protosem_innovation_1793769462256.jpg",
        photographCaption: "Supply chain network mapping and route architecture.",
        resources: [
          { title: "Micro-Hub Distribution Guide", type: "Document", url: "#" },
          { title: "Perishables Inventory Management Blueprint", type: "Presentation", url: "#" }
        ],
        relatedActivities: [
          "Surveying local cold-storage availability",
          "Drafting pilot distribution workflow for urban apartment societies",
          "Reviewing compliance and food hygiene standards"
        ]
      },
      {
        weekNumber: 5,
        sessionTitle: "Financial Modelling & Unit Viability",
        subtitle: "Forecasting Capex, Opex, and Contribution Margins",
        status: "Upcoming",
        learningObjectives: [
          "Build financial projections for early-stage distribution pilot.",
          "Calculate customer acquisition cost (CAC) and customer lifetime value (LTV).",
          "Stress-test working capital requirements and seasonal fluctuations."
        ],
        keyTakeaways: [
          "[Upcoming Session — Content will be documented post-workshop]",
          "Understanding working capital cycles in retail inventory",
          "Setting break-even milestones for pilot test runs"
        ],
        personalReflections: "Awaiting session. Will focus on creating realistic financial templates for the Pure Harvest farm-to-doorstep distribution model.",
        resources: [
          { title: "Financial Model Blueprint Placeholder", type: "Document", url: "#" }
        ],
        relatedActivities: [
          "Preparing baseline cost assumptions for farm sourcing",
          "Reviewing packaging and transportation quotes"
        ]
      },
      {
        weekNumber: 6,
        sessionTitle: "Venture Pitch & Industry Mentorship Showcase",
        subtitle: "Synthesizing Findings into an Investor-Grade Proposition",
        status: "Upcoming",
        learningObjectives: [
          "Condense market discovery, product validation, and logistics into a 5-minute pitch.",
          "Receive direct tactical feedback from FORGE enterprise venture partners.",
          "Identify immediate pilot execution next steps."
        ],
        keyTakeaways: [
          "[Upcoming Session — Content will be documented post-workshop]"
        ],
        personalReflections: "Looking forward to presenting our validated concept to the ProtoSem review board and refining the commercial execution plan.",
        resources: [
          { title: "ProtoSem Final Pitch Template", type: "Presentation", url: "#" }
        ],
        relatedActivities: [
          "Drafting 10-slide venture deck",
          "Creating prototype packaging mockup showcase"
        ]
      }
    ] as ProtoSemWeek[]
  },

  projects: [
    {
      id: "project-1",
      title: "PURE HARVEST",
      category: "Agri-Tech & Direct Distribution",
      concept: "Direct farm-to-consumer business model and logistics framework.",
      vision: "Connecting farmers directly with consumers by reducing unnecessary intermediaries, ensuring fair farmer realization and peak consumer freshness.",
      status: "Conceptual Exploration",
      imageUrl: "/src/assets/images/pure_harvest_farm_1793769461119.jpg",
      focusAreas: [
        "Fresh Agricultural Produce",
        "Milk and Dairy Sourcing",
        "Farm-to-Door Logistics",
        "Perishable Supply Chain Management",
        "Customer Retention & Subscription Dynamics"
      ],
      description: "Pure Harvest is an entrepreneurial exploration into disrupting the fragmented agricultural value chain. In traditional supply routes, perishable crops pass through 4 to 6 middlemen, causing severe price inflation, 25-30% transit wastage, and sub-optimal farmer earnings. Pure Harvest conceptualizes a streamlined direct-to-household distribution framework that sources directly from agrarian clusters in the morning and delivers to residential communities by afternoon.",
      opportunityStatement: "Eliminating the multi-tiered brokerage layer allows consumers to receive pesticide-monitored, farm-fresh harvest at competitive market prices, while granting local cultivating farmers up to 40% higher realization.",
      valueProposition: [
        "Zero-Middleman Sourcing: Direct procurement contracts with verified regional farmers.",
        "Guaranteed 12-Hour Harvest-to-Table Cycle: Preserving peak nutritional content.",
        "Pre-Scheduled Community Deliveries: Clustered drop-offs inside apartment complexes to eliminate last-mile delivery losses.",
        "Transparent Farmer Backstories: Complete traceability for discerning consumers."
      ],
      distributionStrategy: "Hub-and-spoke aggregation model: Regional harvest collection centers feed suburban sorting hubs, connected to automated batch routing for pre-ordered residential milk and vegetable hampers.",
      targetAudience: "Health-conscious urban households, gated residential societies, and wellness-focused families seeking unadulterated daily staples."
    },
    {
      id: "project-2",
      title: "AGRI-BUSINESS & FMCG DISTRIBUTION",
      category: "Commodities & Traditional FMCG",
      concept: "Exploring business opportunities in agricultural products, traditional wood-pressed oils and FMCG distribution pipelines.",
      vision: "Revitalizing authentic, traditional cold-pressed goods through modern hygienic packaging, certified quality standards, and systematic retail distribution.",
      status: "Feasibility Stage",
      imageUrl: "/src/assets/images/agri_fmcg_distribution_1793769462206.jpg",
      focusAreas: [
        "Traditional Wood-Pressed (Marachekku) Oils",
        "Native Grains & Cold-Milled Flours",
        "FMCG Wholesale & Modern Trade Pipelines",
        "Brand Identity & Clean-Label Packaging",
        "Retail Shelf Placement & Margin Structures"
      ],
      description: "An entrepreneurial initiative studying consumer migration towards unrefined, preservative-free dietary staples. With increasing awareness around industrial seed oil processing, demand for traditional wood-pressed (Chekku) groundnut, sesame, and coconut oils has surged. This project examines the operational economics of bridging decentralized traditional artisanal oil producers with urban supermarkets, organic grocers, and institutional bulk purchasers.",
      opportunityStatement: "The traditional wood-pressed oil industry is highly fragmented and plagued by trust deficits regarding adulteration. Establishing an audited, batch-tested distribution brand brings corporate reliability to an artisanal craft.",
      valueProposition: [
        "Cold Extraction Purity: Preserving natural polyphenols, aroma, and essential fatty acids without thermal degradation.",
        "Audited Sourcing: Raw seeds inspected for aflatoxin and pesticide residues before cold-pressing.",
        "Competitive Retail Margins: Providing tier-2 and tier-3 grocers with attractive retail spreads.",
        "Eco-Conscious Packaging: Utilizing recyclable UV-protective amber glass containers."
      ],
      distributionStrategy: "Dual-channel approach: Consignment partnerships with premium organic grocers paired with direct-to-institution bulk supplies for university guest houses, wellness clinics, and gourmet eateries.",
      targetAudience: "Health-conscious urban consumers, organic specialty stores, gourmet chefs, and wellness institutions."
    },
    {
      id: "project-3",
      title: "LOCAL BUSINESS DISTRIBUTION MODELS",
      category: "B2B Logistics & Wholesale Commerce",
      concept: "Exploring modern efficiency opportunities in wholesale, retail, and institutional supply networks.",
      vision: "Streamlining regional procurement for educational institutions, canteens, and local enterprises through consolidated bulk supply and transparent credit management.",
      status: "Conceptual Exploration",
      imageUrl: "/src/assets/images/protosem_innovation_1793769462256.jpg",
      focusAreas: [
        "Wholesale Consolidation Models",
        "Institutional Canteen & Hostel Supply",
        "Inventory Turnover Optimization",
        "Receivables & Credit Cycle Management",
        "Local SME Sourcing Partnerships"
      ],
      description: "Small-to-medium retail vendors and institutional canteens often purchase goods across dozens of disparate suppliers with irregular credit terms and unpredictable delivery timings. This initiative models a centralized B2B supplier node that aggregates dry groceries, FMCG consumables, and cleaning supplies, offering institutional buyers single-invoice monthly procurement with predictable service-level agreements.",
      opportunityStatement: "Consolidating fragmented small-scale orders into unified logistics runs decreases transport costs for suppliers while giving institutional buyers volume pricing and reliable replenishment.",
      valueProposition: [
        "Single-Window Procurement: Reducing vendor management overhead from 20+ contacts down to 1 trusted partner.",
        "Structured Working Capital Terms: Predictable 15/30-day credit cycles tailored to institutional cash flow.",
        "Emergency Stock Buffer: Preventing kitchen or retail downtime through localized micro-warehousing."
      ],
      distributionStrategy: "Scheduled weekly replenishment runs powered by order batching, with automated inventory alerts for high-consumption staples.",
      targetAudience: "College hostels, institutional cafeterias, corporate catering services, and regional grocery outlets."
    }
  ] as ProjectItem[],

  skills: {
    professional: [
      { name: "Marketing Strategy", focus: "Multi-channel campaign planning & positioning" },
      { name: "Public Relations", focus: "Corporate communications & media relations" },
      { name: "Business Development", focus: "Lead generation, B2B partnerships & expansion" },
      { name: "Event Management", focus: "Campus summits, conferences & festival logistics" },
      { name: "Communication", focus: "Executive presentation & persuasive pitching" },
      { name: "Networking", focus: "Building high-value mentor & stakeholder ties" },
      { name: "Leadership", focus: "Team coordination & cross-functional alignment" },
      { name: "Strategic Planning", focus: "Milestone setting & operational roadmaps" }
    ],
    creative: [
      { name: "Photography", focus: "Event coverage & studio product aesthetics" },
      { name: "Videography", focus: "Short-form promotional video & storytelling" },
      { name: "Content Creation", focus: "Copywriting, editorial journals & newsletters" },
      { name: "Social Media Marketing", focus: "Audience growth & engagement campaigns" },
      { name: "Branding", focus: "Visual identity, tone of voice & positioning" }
    ],
    businessInterests: [
      { name: "Entrepreneurship", focus: "Zero-to-one venture creation & validation" },
      { name: "International Business", focus: "Global supply networks & cross-border trade" },
      { name: "Agri-Business", focus: "Sustainable farming & direct-to-consumer routes" },
      { name: "Retail Management", focus: "Store operations, merchandising & consumer flow" },
      { name: "Trading & Distribution", focus: "Wholesale logistics, bulk arbitrage & supply" },
      { name: "Startup Ecosystems", focus: "Incubators, angel syndicates & founder circles" }
    ]
  },

  education: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Kumaraguru College of Liberal Arts and Science (KCLAS)",
    location: "Coimbatore, Tamil Nadu",
    status: "Undergraduate Program",
    highlights: [
      "Active participant in campus entrepreneurial clubs and student governance initiatives.",
      "Hands-on exposure to practical business simulations, organizational research, and field studies.",
      "Integrated coursework in Marketing Management, Strategic Management, Financial Accounting, and Business Law.",
      "Collaborative exposure with FORGE Innovation & Ventures, PRICE, and RAI partner networks."
    ],
    academicAchievementsPlaceholder: [
      {
        title: "Academic Achievement Placeholder",
        issuer: "KCLAS / Institutional Body",
        date: "Academic Year 2024-2026",
        note: "Details to be updated as official semester recognitions and academic accolades are announced."
      },
      {
        title: "Executive Business Certification Placeholder",
        issuer: "Industry Partner / Accredited Board",
        date: "In Progress",
        note: "Ongoing specialized certificate in digital marketing strategy and market research methodologies."
      }
    ]
  },

  currentFocus: [
    {
      title: "Entrepreneurship & Startup Development",
      description: "Iterating on early-stage venture ideas, validating target customer pain points, and experimenting with lean launch strategies.",
      badge: "Venture Ideation"
    },
    {
      title: "Marketing & Brand Strategy",
      description: "Developing modern communication campaigns for student summits and community initiatives with high-retention storytelling.",
      badge: "Brand Voice"
    },
    {
      title: "Business Development & Sales Operations",
      description: "Mastering the mechanics of pipeline generation, strategic outreach, and long-term stakeholder value creation.",
      badge: "Partnerships"
    },
    {
      title: "Agri-Business Opportunities",
      description: "Investigating direct farm-to-consumer distribution pipelines, perishable crop cold chains, and cold-pressed oil value addition.",
      badge: "Agri-Commerce"
    },
    {
      title: "Building Professional Networks",
      description: "Proactively engaging with industry veterans, startup founders, and retail executives across national business forums.",
      badge: "Network Building"
    },
    {
      title: "Institutional & Industry Collaborations",
      description: "Leveraging the dynamic ecosystem at Kumaraguru, FORGE, and RAI to bridge academic theory with real-world enterprise practice.",
      badge: "Collaborative Learning"
    }
  ]
};
