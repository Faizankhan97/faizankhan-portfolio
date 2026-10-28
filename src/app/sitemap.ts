import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://faizankhan-portfolio.netlify.app",
      lastModified: new Date("2025-06-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
