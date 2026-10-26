import { MetadataRoute } from "next";
import { siteContent } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://theeducatee.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2026-10-26",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: "2026-10-26",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: "2026-10-26",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/success`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const courseRoutes: MetadataRoute.Sitemap = siteContent.programs.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: "2026-10-26",
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...courseRoutes];
}
