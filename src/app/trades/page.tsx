import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { allTrades } from "@/lib/seo/trade-data";
import { canonical } from "@/lib/seo/utils";
import TradesIndexContent from "@/components/seo-pages/TradesIndexContent";

export const metadata: Metadata = {
  title: "All Construction Trades Supplied | 50+ Disciplines | 4A Trades",
  description:
    "Hire skilled construction workers across 20+ trade categories. Labourers, bricklayers, electricians, plumbers, site managers and more. Order online, fast deployment.",
  alternates: { canonical: canonical("/trades") },
  openGraph: {
    title: "All Construction Trades Supplied | 50+ Disciplines | 4A Trades",
    description:
      "Hire skilled construction workers across 20+ trade categories. Order online, fast deployment across England & Wales.",
    url: canonical("/trades"),
    siteName: "4A Trades",
    locale: "en_GB",
    type: "website",
  },
};

export default function TradesIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "All Trades" },
        ]}
      />
      <TradesIndexContent />
    </>
  );
}
