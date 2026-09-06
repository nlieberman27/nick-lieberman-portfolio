export type Project = {
  id: string;
  label: string;
  title: string;
  summary: string;
  context: string;
  result?: string;
  resultDetail?: string;
  details: string[];
};

export type ContactConfig = {
  email?: string;
  linkedInUrl?: string;
  resumeUrl?: string;
};

// Public portfolio content is intentionally centralized here for safe future updates.
export const portfolio = {
  name: "Nick Lieberman",
  location: "Berkeley, California",
  contact: {} as ContactConfig,
  hero: {
    headline:
      "I take ambiguous ideas far enough to find out whether they work.",
    supporting:
      "I’m a UC Berkeley Economics student. My work spans digital products, small businesses, property operations, commercial construction, and community leadership.",
  },
  workIntro:
    "Different settings, same pattern: understand the problem, make the tradeoffs, and get something concrete into the world.",
  loven: {
    label: "01 · Product building",
    title: "Loven",
    url: "https://giveloven.com/",
    summary:
      "A full-stack product for organizing messages and media for someone else, then delivering them through a paced recipient experience.",
    status: "Publicly deployed · Business experiment frozen",
    problem:
      "Collecting meaningful messages from multiple people is often disorganized, while delivering everything at once can make the experience feel fleeting. Loven was an attempt to make both the coordination and the eventual recipient experience feel deliberate.",
    built: [
      "Batch creation",
      "Organizer, contributor, and recipient experiences",
      "Tokenized links",
      "Written messages and multimedia uploads",
      "Scheduling, cadence, and time-zone controls",
      "Recipient reveal experience",
      "Sender and sign-off controls",
      "Privacy-conscious analytics",
      "Mobile usability",
      "Reduced-motion considerations",
      "Public deployment",
    ],
    ownership: [
      "Product definition",
      "User flows",
      "Brand and interface decisions",
      "Testing",
      "Iterative implementation",
      "Troubleshooting",
      "Deployment",
      "Early distribution experiments",
    ],
    process:
      "Nick designed, built, refined, and deployed Loven through an AI-assisted workflow involving Replit, GitHub, and Codex. The work extended beyond prompting: sustained product judgment, experience design, testing, troubleshooting, implementation, and iteration shaped the released product.",
    tradeoffs: [
      {
        title: "Three roles, one system",
        text: "Making organizer, contributor, and recipient journeys feel connected without making their experiences identical.",
      },
      {
        title: "Access without friction",
        text: "Using tokenized links to make contributing easier while preserving clear boundaries between experiences.",
      },
      {
        title: "Timing that holds up",
        text: "Designing scheduling and cadence controls around real time zones rather than idealized handoffs.",
      },
      {
        title: "Warmth with clarity",
        text: "Supporting emotional media and a warm brand while keeping controls understandable, privacy-conscious, mobile-friendly, and considerate of reduced motion.",
      },
    ],
    outcome:
      "Built and publicly deployed a functioning product at giveloven.com, from the underlying role-based experience through storage, scheduling, analytics, and the recipient reveal.",
    learning:
      "Building the product was only part of the problem. Early distribution experiments did not establish repeatable conversion, which changed how I think about validating demand and distribution before expanding a build.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Node/Express",
      "PostgreSQL",
      "Drizzle",
      "Supabase Storage",
      "PostHog",
    ],
  },
  projects: [
    {
      id: "marin-emergency-kits",
      label: "02 · Entrepreneurship and operations",
      title: "Marin Emergency Kits",
      summary:
        "Nick turned a local preparedness need into an operating business, handling the work from sourcing and pricing through marketing and fulfillment.",
      context:
        "Founded in 2023 after identifying a local emergency-preparedness need.",
      result: "≈ $10,000",
      resultDetail: "in sales within two months",
      details: [
        "Selected kit contents and evaluated suppliers and product costs",
        "Set pricing and managed inventory",
        "Built the website and worked on SEO and local marketing",
        "Fulfilled orders and delivered kits",
      ],
    },
    {
      id: "paradise-del-mar",
      label: "03 · Operations and commercial decision-making",
      title: "Paradise Del Mar",
      summary:
        "Nick helped turn a neglected guesthouse into a launch-ready short-term rental, combining renovation decisions, pricing, listing operations, and guest experience.",
      context:
        "Operations and property management near La Paz, Mexico · Summer 2024",
      result: "≈ $30,000",
      resultDetail:
        "in rental revenue generated by the property within three months",
      details: [
        "Analyzed tradeoffs across furnishings, appliances, materials, and costs",
        "Helped make renovation and launch decisions",
        "Managed Airbnb and Vrbo pricing",
        "Handled guest communication and listing optimization",
      ],
    },
    {
      id: "lake-street-labs",
      label: "04 · Early-stage research and market testing",
      title: "Lake Street Labs",
      summary:
        "Before committing to a regulated product, Nick investigated whether the opportunity was commercially, technically, and regulatorily viable.",
      context:
        "An exploratory effort focused on over-the-counter solutions for canker sores; no finished medical product launched.",
      result: "40+ practices",
      resultDetail: "contacted as one part of early demand testing",
      details: [
        "Analyzed competitive products, pricing, and positioning",
        "Recruited a UC Berkeley bioengineering PhD candidate and consulted a dentist",
        "Investigated formulation feasibility and the FDA regulatory pathway",
        "Created two patient-education digital books",
        "Tested assumptions through conversations, Google Ads, social media, Shopify, and dental-practice outreach",
      ],
    },
    {
      id: "gci",
      label: "05 · Professional project execution",
      title: "GCI General Contractors",
      summary:
        "At GCI, Nick applied quantitative and organizational judgment in a professional environment where accuracy affected real project decisions.",
      context: "Project Engineer Intern · San Francisco · Summer 2025",
      result: "Multimillion-dollar",
      resultDetail: "office projects estimated with project teams",
      details: [
        "Read project plans and built cost estimates",
        "Supported a successful Flagstar Bank bid",
        "Coordinated procurement and worked across RFIs and submittals",
        "Communicated with project teams, architects, and subcontractors",
        "Helped resolve project requirements and execution questions",
      ],
    },
  ] satisfies Project[],
  leadership: {
    label: "Leadership · Cira Health at Berkeley",
    title: "Turning community intent into coordinated action.",
    summary:
      "Nick leads a roughly 10-person outreach team, builds nonprofit relationships, and turns volunteer ideas into coordinated events.",
    details: [
      "Serves as Director of Outreach",
      "Develops relationships with local nonprofit organizations",
      "Plans volunteer events and coordinates logistics for student groups",
    ],
    result:
      "Started a community drive that collected approximately 40 bags of clothing and essentials for unhoused residents.",
  },
  about: [
    "Most of my experience has come from entering unfamiliar situations and learning quickly enough to contribute. I’ve built a local emergency-preparedness business, helped launch a short-term rental in Mexico, worked on construction estimates in San Francisco, explored a regulated healthcare product, and shipped a full-stack digital product with AI-assisted development tools.",
    "I started college at Washington University in St. Louis, continued at College of Marin, and transferred to UC Berkeley, where I study Economics and am completing a minor in Data Science. The route was not linear, but it made me comfortable turning uncertainty into concrete next steps.",
  ],
  education: {
    school: "University of California, Berkeley",
    degree: "B.A. Economics · Expected December 2027",
    minor: "Data Science minor in progress",
  },
  capabilities: [
    "Product framing and iteration",
    "Market and competitive research",
    "Pricing and analytical decision-making",
    "Operations",
    "Stakeholder coordination",
    "AI-assisted product development",
  ],
} as const;
