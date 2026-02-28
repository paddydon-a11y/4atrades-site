import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allTrades, getTradeBySlug } from "@/lib/seo/trade-data";
import { canonical } from "@/lib/seo/utils";
import TradePageContent from "@/components/seo-pages/TradePageContent";

export function generateStaticParams() {
  return allTrades.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) return {};

  return {
    title: trade.metaTitle,
    description: trade.metaDescription,
    alternates: { canonical: canonical(`/trades/${slug}`) },
    openGraph: {
      title: trade.metaTitle,
      description: trade.metaDescription,
      url: canonical(`/trades/${slug}`),
      siteName: "4A Trades",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${trade.name} Hire`,
    provider: {
      "@type": "EmploymentAgency",
      name: "4A Trades",
      url: "https://www.4atrades.co.uk",
      telephone: "0330 133 7901",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: trade.metaDescription,
    url: canonical(`/trades/${slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trade.faqs.map((faq) => ({
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
      <TradePageContent trade={trade} />
    </>
  );
}
