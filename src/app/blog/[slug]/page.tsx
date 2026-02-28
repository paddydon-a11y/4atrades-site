import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { allBlogPosts, getBlogPostBySlug } from "@/lib/seo/blog-data";
import { canonical } from "@/lib/seo/utils";
import { getBlogContent } from "@/lib/seo/blog-content";
import BlogPostContent from "@/components/seo-pages/BlogPostContent";

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: canonical(`/blog/${slug}`) },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonical(`/blog/${slug}`),
      siteName: "4A Trades",
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const sections = getBlogContent(slug);
  if (!sections) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: "4A Trades",
      url: "https://www.4atrades.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "4A Trades",
      url: "https://www.4atrades.co.uk",
      logo: "https://www.4atrades.co.uk/logo.png",
    },
    datePublished: post.date,
    url: canonical(`/blog/${slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <BlogPostContent post={post} sections={sections} />
    </>
  );
}
