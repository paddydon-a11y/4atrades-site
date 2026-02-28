import type { MetadataRoute } from "next";
import { allTrades } from "@/lib/seo/trade-data";
import { allLocations } from "@/lib/seo/location-data";
import { allBlogPosts } from "@/lib/seo/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.4atrades.co.uk";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/trades`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/join`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/claim`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const tradePages: MetadataRoute.Sitemap = allTrades.map((trade) => ({
    url: `${baseUrl}/trades/${trade.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = allLocations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const crossPages: MetadataRoute.Sitemap = allTrades.flatMap((trade) =>
    allLocations.map((loc) => ({
      url: `${baseUrl}/trades/${trade.slug}/${loc.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...tradePages, ...locationPages, ...crossPages, ...blogPages];
}
