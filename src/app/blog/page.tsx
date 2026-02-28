import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { allBlogPosts } from "@/lib/seo/blog-data";
import { canonical } from "@/lib/seo/utils";
import BlogIndexContent from "@/components/seo-pages/BlogIndexContent";

export const metadata: Metadata = {
  title: "Construction Industry Blog | Guides & Insights | 4A Trades",
  description:
    "Expert guides on construction labour hire, rates, compliance, and workforce management. Practical insights for contractors across England and Wales.",
  alternates: { canonical: canonical("/blog") },
  openGraph: {
    title: "Construction Industry Blog | 4A Trades",
    description:
      "Expert guides on construction labour hire, rates, compliance, and workforce management.",
    url: canonical("/blog"),
    siteName: "4A Trades",
    locale: "en_GB",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogIndexContent />
    </>
  );
}
