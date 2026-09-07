export type Link = { label: string; href: string };
export type Experience = {
  id: string;
  name: string;
  dates: string;
  role: string;
  location?: string;
  context?: string;
  body: string;
  links?: Link[];
};

export const portfolio = {
  name: "Nick Lieberman",
  hero: {
    heading: "Hi, I’m Nick.",
    body: "I’m an economics student at UC Berkeley. I like the part where an idea stops being hypothetical—whether that means shipping a product, pricing a project, fixing up a space, or organizing people around something useful.",
    education: "UC Berkeley · Economics · Data Science minor in progress · December 2027",
  },
  contact: {
    email: "nlieberman27@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/nicholaslieberman/",
  },
  now: [
    { name: "UC Berkeley", body: "Studying economics and completing a Data Science minor." },
    { name: "Lake Street Labs", body: "Building practical health resources with my dad, a dentist and retired professor of dentistry." },
    { name: "Cura Health at Berkeley", body: "Leading outreach and organizing hands-on service projects around the Bay Area." },
  ],
  loven: {
    name: "Loven",
    dates: "2026",
    line: "Messages worth saving, delivered when they matter.",
    body: "I built Loven to help friends and family write messages now and let them arrive over time. I designed the organizer, contributor, and recipient experience, then turned it into a working web app using AI-assisted development tools.",
    role: "Product concept, UX and build",
    url: "https://giveloven.com/",
    sequence: ["Create a batch", "Invite people to add messages", "Open a message when it is ready"],
  },
  current: [
    {
      id: "lake-street-labs", name: "Lake Street Labs", dates: "2026–Present", role: "Co-founder",
      body: "With my dad, a dentist and retired professor of dentistry, I’m building practical resources for people who deal with canker sores. I created the brand and storefront and co-authored the first guide and tracker.",
    },
    {
      id: "cura", name: "Cura Health at Berkeley", dates: "2025–Present", role: "Director of Outreach",
      body: "As Director of Outreach for Cura Health at Berkeley, I organize service projects for a roughly 50-member student organization. That has included clothing drives and volunteer days with Glide and Project Open Hand.",
    },
  ] satisfies Experience[],
  experience: [
    {
      id: "gci", name: "GCI General Contractors", dates: "2025", role: "Project Engineer Intern", location: "San Francisco",
      body: "At GCI, I worked across cost estimating, financial analysis and project coordination for commercial interiors. I helped price multimillion-dollar office projects and supported the successful Flagstar Bank bid.",
    },
    {
      id: "jar-farms", name: "JAR Farms / Paradise Del Mar", dates: "2024", role: "Entrepreneur in Residence · Operations & Property Management", context: "A teen-led nonprofit and retreat in Tiburon.",
      body: "At JAR Farms, I worked as an Entrepreneur in Residence and helped turn former staff quarters into a guest-ready waterfront bungalow. I launched and managed its Airbnb operation, which generated about $30,000 in revenue.",
      links: [
        { label: "JAR Farms", href: "https://www.jarfarms.com/" },
        { label: "Paradise Del Mar", href: "https://www.paradisedelmar.com/" },
        { label: "Airbnb", href: "https://www.airbnb.com/rooms/1167382332620530428" },
      ],
    },
    {
      id: "marin-kits", name: "Marin Emergency Kits", dates: "2023", role: "Founder",
      body: "I started Marin Emergency Kits with my younger brother after seeing how unprepared many households were for wildfire and earthquake risk. We sourced, packed and distributed 50 kits in Marin, then worked with two attorneys on a plan to scale the business.",
    },
  ] satisfies Experience[],
  archive: {
    name: "3GuysWhoCare", dates: "2020",
    body: "At 15, I co-founded 3GuysWhoCare with two friends during COVID-19. I led operations for the mask business and learned unit economics by actually having to make and ship the product.",
    links: [
      { label: "Original site", href: "https://www.3guyswhocare.com/" },
      { label: "Press", href: "https://www.3guyswhocare.com/in-the-news" },
    ],
  },
  about: "I’m most drawn to strategy, operations and product work. I like small teams, steep learning curves and work with a visible result. Outside of that, I run, lift and spend as much time outside as Berkeley weather allows.",
} as const;
