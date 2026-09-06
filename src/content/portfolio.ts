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
    "The settings have been very different, but the work usually starts the same way: get close to the problem, decide what matters, and make something real enough to test.",
  loven: {
    label: "01 · Product building",
    title: "Loven",
    url: "https://giveloven.com/",
    summary:
      "I built Loven to help a group collect messages and media for someone they care about, then reveal those contributions over time instead of all at once.",
    status: "Live product · Experiment now paused",
    problem:
      "Collecting meaningful messages from a group usually means chasing people across texts, email threads, and shared folders. Then the recipient gets everything at once, and the moment passes quickly. I wanted to make the organizing easier and the receiving more considered.",
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
      "I took Loven from an idea to a public release using Replit, GitHub, Codex, and an AI-assisted development workflow. That meant defining the product, working through the experience, testing it, fixing what broke, and making the small decisions that helped the whole system work together.",
    tradeoffs: [
      {
        title: "Three roles, one system",
        text: "Organizers, contributors, and recipients each needed different controls, but it still had to feel like one product.",
      },
      {
        title: "Access without friction",
        text: "Tokenized links let contributors participate without creating an account, while keeping each Batch separate.",
      },
      {
        title: "Timing that holds up",
        text: "A scheduled reveal has to arrive at the intended local time, so cadence and time-zone behavior could not be an afterthought.",
      },
      {
        title: "Warmth with clarity",
        text: "The product needed to feel warm without hiding how it worked. That included clear controls, thoughtful analytics, a solid mobile experience, and a reduced-motion option.",
      },
    ],
    outcome:
      "Loven is live at giveloven.com. I shipped the role-based flows, media storage, scheduling, analytics, and recipient reveal as one working product.",
    learning:
      "Shipping the product did not solve distribution. My early experiments did not show a repeatable path from interest to use. I would test that path much earlier before expanding another build.",
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
        "I saw a local need for a simpler way to prepare for emergencies, so I put together a kit and built the small business around it.",
      context: "A local emergency-preparedness business I founded in 2023.",
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
        "I helped bring a neglected guesthouse back into use as a short-term rental, from renovation choices through pricing, listings, and guest communication.",
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
        "I was curious whether there was room for a better over-the-counter canker-sore product. Before going too far, I tested the commercial case, formulation feasibility, and regulatory path.",
      context:
        "An exploratory project; I did not launch a finished medical product.",
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
        "At GCI, I learned how much careful reading, follow-through, and clear communication matter when estimates and open questions affect a real construction project.",
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
    title: "Making good intentions easier to act on.",
    summary:
      "I lead a roughly 10-person outreach team. We build relationships with local nonprofits and handle the planning and logistics behind student volunteer events.",
    details: [
      "Serves as Director of Outreach",
      "Develops relationships with local nonprofit organizations",
      "Plans volunteer events and coordinates logistics for student groups",
    ],
    result:
      "One project I started was a community drive that collected approximately 40 bags of clothing and essentials for unhoused residents.",
  },
  about: [
    "I tend to learn by getting involved. That has meant packing and delivering emergency kits, comparing appliance costs for a guesthouse in Mexico, reading construction plans in San Francisco, researching the FDA path for a healthcare idea, and using AI-assisted development tools to ship a full-stack product.",
    "I started college at Washington University in St. Louis, continued at College of Marin, and then transferred to UC Berkeley. I study Economics and am working toward a minor in Data Science. It was not a straight route, but it taught me how to get oriented quickly and keep moving when the next step is not obvious.",
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
