import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "All Construction Trades Supplied | 50+ Disciplines | 4A Trades",
  description:
    "From labourers to quantity surveyors — 50+ construction trades across 6 UK regions. Vetted tradespeople, 24hr turnaround. Order workers online today.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/tt",
  },
  openGraph: {
    title: "All Construction Trades Supplied | 50+ Disciplines | 4A Trades",
    description:
      "From labourers to quantity surveyors — 50+ construction trades across 6 UK regions. Vetted tradespeople, 24hr turnaround. Order workers online today.",
    url: "https://www.4atrades.co.uk/tt",
    siteName: "4A Trades",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.4atrades.co.uk/opengraph-image",
        width: 1200,
        height: 630,
        alt: "4A Trades — Your Workforce. Delivered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Construction Trades Supplied | 50+ Disciplines | 4A Trades",
    description:
      "From labourers to quantity surveyors — 50+ construction trades across 6 UK regions. Vetted tradespeople, 24hr turnaround. Order workers online today.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "All Trades" },
        ]}
      />
      {children}
    </>
  );
}
