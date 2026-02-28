import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allTrades } from "@/lib/seo/trade-data";
import { allLocations } from "@/lib/seo/location-data";
import { getCrossPageData } from "@/lib/seo/cross-data";
import { canonical } from "@/lib/seo/utils";
import CrossPageContent from "@/components/seo-pages/CrossPageContent";

export function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const trade of allTrades) {
    for (const loc of allLocations) {
      params.push({ slug: trade.slug, location: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; location: string }>;
}): Promise<Metadata> {
  const { slug, location } = await params;
  const data = getCrossPageData(slug, location);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: canonical(`/trades/${slug}/${location}`) },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonical(`/trades/${slug}/${location}`),
      siteName: "4A Trades",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function CrossPage({
  params,
}: {
  params: Promise<{ slug: string; location: string }>;
}) {
  const { slug, location } = await params;
  const data = getCrossPageData(slug, location);
  if (!data) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.tradeName} Hire — ${data.locationName}`,
    provider: {
      "@type": "EmploymentAgency",
      name: "4A Trades",
      url: "https://www.4atrades.co.uk",
      telephone: "0330 133 7901",
    },
    areaServed: data.counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    description: data.metaDescription,
    url: canonical(`/trades/${slug}/${location}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CrossPageContent data={data} />
    </>
  );
}
