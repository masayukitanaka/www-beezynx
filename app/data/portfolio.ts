// ASCII coastline art. Each row is kept as a string so wave rows can later
// be shifted for animation (see handoff "今後の予定"). Colors are design tokens.
export type AsciiColor = "sun" | "sky" | "sea" | "foam" | "sand";

export interface CoastLine {
  t: string;
  c: AsciiColor;
}

export const ASCII_COLORS: Record<AsciiColor, string> = {
  sun: "var(--color-ascii-sun)",
  sky: "var(--color-ascii-sky)",
  sea: "var(--color-ascii-sea)",
  foam: "var(--color-ascii-foam)",
  sand: "var(--color-ascii-sand)",
};

export const coast: CoastLine[] = [
  { t: "                                .-~~-.    ", c: "sun" },
  { t: "      .              .         (      )   ", c: "sun" },
  { t: "                                '-..-'    ", c: "sun" },
  { t: "  .          .                     .      ", c: "sky" },
  { t: "~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-", c: "sea" },
  { t: "   ~~    ~~~      ~~      ~~~~     ~~     ", c: "sea" },
  { t: " ~~~~  ~~    ~~~~    ~~~      ~~~    ~~~~ ", c: "sea" },
  { t: "~~   ~~~~  ~~    ~~~~   ~~~~~   ~~~~   ~~ ", c: "sea" },
  { t: "  ~~~~   ~~~~~~    ~~~~~    ~~~~~~   ~~~~ ", c: "sea" },
  { t: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", c: "sea" },
  { t: " _.--~~--._.--~~--._.--~~--._.--~~--._.--~", c: "foam" },
  { t: "  .  ,  .   ,   .  ,   .  ,  .   ,  .   , ", c: "sand" },
  { t: ".:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:.:", c: "sand" },
  { t: "::::::::::::::::::::::::::::::::::::::::::", c: "sand" },
];

// --- Content from the previous Beezynx site, mapped onto the 2a layout ---

export interface Service {
  no: string;
  title: string;
  summary: string;
  tags: string[];
}

export const services: Service[] = [
  {
    no: "01",
    title: "Software Development",
    summary:
      "Custom web applications, mobile apps, and enterprise software built with cutting-edge technologies and best practices.",
    tags: ["Web Apps", "Mobile", "Enterprise"],
  },
  {
    no: "02",
    title: "AI Tools & Automation",
    summary:
      "Intelligent automation solutions, machine learning integration, and AI-powered tools that streamline operations.",
    tags: ["Automation", "Machine Learning", "AI Tools"],
  },
  {
    no: "03",
    title: "Consulting",
    summary:
      "Strategic technology consulting, architecture design, and digital transformation guidance for enterprises.",
    tags: ["Strategy", "Architecture", "Transformation"],
  },
];

export interface Work {
  no: string;
  year: string;
  title: string;
  role: string;
  summary: string;
  tags: string[];
  shot: string;
  /** Real/live site URL. */
  url: string;
  /** LP / details page. */
  lp: string;
  /** Screenshot image (WebP, 16:10). Null = placeholder. */
  image?: string | null;
}

export const works: Work[] = [
  {
    no: "01",
    year: "2022–2023",
    title: "UGC Asynchronous Processing Platform",
    role: "Full Stack (Backend focus)",
    summary:
      "Modernized a 2000s-era legacy system with Go microservices and AWS Step Functions. Cut media processing time by 70% and built for 20× peak traffic.",
    tags: ["Go", "PHP", "AWS Step Functions"],
    shot: "screenshot — processing dashboard",
    url: "#",
    lp: "#",
    image: null,
  },
  {
    no: "02",
    year: "2016–2022",
    title: "Fighting Game Backend Platform",
    role: "Backend / API Design",
    summary:
      "API backend for a fighting game played by millions. Averaged 30ms responses and reduced matchmaking wait times by 40%.",
    tags: ["PHP Symfony", "AWS", "REST API"],
    shot: "screenshot — game / matchmaking",
    url: "#",
    lp: "#",
    image: null,
  },
  {
    no: "03",
    year: "2024–",
    title: "AI Workflow Automation",
    role: "Full Stack",
    summary:
      "(Sample) Business automation tooling with an embedded LLM. Add a 2–3 line project overview here.",
    tags: ["Python", "LLM", "GCP"],
    shot: "screenshot — AI tool UI",
    url: "#",
    lp: "#",
    image: null,
  },
  {
    no: "04",
    year: "2025",
    title: "Product Landing Page",
    role: "Full Stack",
    summary:
      "(Sample) A landing page / service site built end to end, from frontend to backend. Add an overview here.",
    tags: ["TypeScript", "Hono", "Vercel"],
    shot: "screenshot — landing page",
    url: "#",
    lp: "#",
    image: null,
  },
];

export interface StackRow {
  label: string;
  value: string;
}

// "Why Choose Beezynx?" highlights, shown in the 2a document-style table.
export const whyChoose: StackRow[] = [
  {
    label: "Experience",
    value: "10+ years of industry experience across software and AI.",
  },
  {
    label: "Track Record",
    value: "100+ successful projects delivered for businesses of every size.",
  },
  {
    label: "Support",
    value: "24/7 support and maintenance to keep your systems running.",
  },
  {
    label: "Approach",
    value:
      "We combine technical expertise with business acumen to deliver solutions that drive real results.",
  },
];

export interface SpecCell {
  dt: string;
  dd: string;
}

// Hero spec strip — company facts.
export const specs: SpecCell[] = [
  { dt: "Experience", dd: "10+ years" },
  { dt: "Projects", dd: "100+ delivered" },
  { dt: "Focus", dd: "Software · AI · Automation" },
  { dt: "Support", dd: "24/7" },
];
