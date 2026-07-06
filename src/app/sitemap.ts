import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

const SECTIONS = [
  "about",
  "skills",
  "services",
  "journey",
  "projects",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  };

  const sections = SECTIONS.map((section) => ({
    url: `${siteConfig.url}/#${section}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...sections];
}
