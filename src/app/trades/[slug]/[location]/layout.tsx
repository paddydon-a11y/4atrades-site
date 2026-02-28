import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getTradeBySlug } from "@/lib/seo/trade-data";
import { getLocationBySlug } from "@/lib/seo/location-data";

export default async function CrossLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string; location: string }>;
}) {
  const { slug, location } = await params;
  const trade = getTradeBySlug(slug);
  const loc = getLocationBySlug(location);
  if (!trade || !loc) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Trades", href: "/trades" },
          { label: trade.name, href: `/trades/${slug}` },
          { label: loc.name },
        ]}
      />
      {children}
    </>
  );
}
