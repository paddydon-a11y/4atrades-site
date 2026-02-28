import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLocations, getLocationBySlug } from "@/lib/seo/location-data";
import { canonical } from "@/lib/seo/utils";
import { regionCounties } from "@/lib/rates";
import LocationPageContent from "@/components/seo-pages/LocationPageContent";

export function generateStaticParams() {
  return allLocations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: canonical(`/locations/${slug}`) },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonical(`/locations/${slug}`),
      siteName: "4A Trades",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const counties =
    regionCounties[location.name as keyof typeof regionCounties] ?? [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Construction Labour Hire — ${location.name}`,
    provider: {
      "@type": "EmploymentAgency",
      name: "4A Trades",
      url: "https://www.4atrades.co.uk",
      telephone: "0330 133 7901",
    },
    areaServed: counties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    description: location.metaDescription,
    url: canonical(`/locations/${slug}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LocationPageContent location={location} />
    </>
  );
}
