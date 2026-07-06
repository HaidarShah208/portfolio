/**
 * Central site configuration used for SEO metadata, sitemap, robots, and JSON-LD.
 * Update NEXT_PUBLIC_SITE_URL (env) or the fallback below to your production domain.
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ali-haidar.vercel.app").replace(
    /\/$/,
    ""
  ),
  name: "Ali Haidar",
  title: "Ali Haidar | Full Stack & AI Developer",
  shortTitle: "Ali Haidar",
  description:
    "Portfolio of Ali Haidar, a Full Stack & AI Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and Python with a focus on scalable web applications and AI-powered solutions.",
  jobTitle: "Full Stack & AI Developer",
  locale: "en_US",
  ogImage: "/assests/new.png",
  keywords: [
    "Ali Haidar",
    "Full Stack Developer",
    "AI Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LLM Integration",
    "Portfolio",
  ],
  email: "alhi7896542@gmail.com",
  social: {
    linkedin:
      "https://www.linkedin.com/in/ali-haider-5181a5276",
    whatsapp: "https://wa.me/923107580073",
  },
} as const;

export type SiteConfig = typeof siteConfig;
