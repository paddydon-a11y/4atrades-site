import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Territory Partnerships | Exclusive Leads for Your Trade | 4A Trades",
  description:
    "Claim your exclusive territory with 4A Trades. For £4,995 one-off, get a dedicated telesales team, marketing, QS support, and live project introductions in your county. No monthly fees.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/join",
  },
  openGraph: {
    title: "Territory Partnerships | Exclusive Leads for Your Trade | 4A Trades",
    description:
      "Claim your exclusive territory with 4A Trades. For £4,995 one-off, get a dedicated telesales team, marketing, QS support, and live project introductions in your county. No monthly fees.",
    url: "https://www.4atrades.co.uk/join",
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
    title: "Territory Partnerships | Exclusive Leads for Your Trade | 4A Trades",
    description:
      "Claim your exclusive territory with 4A Trades. For £4,995 one-off, get a dedicated telesales team, marketing, QS support, and live project introductions in your county. No monthly fees.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Territory Partnerships" },
        ]}
      />
      {children}
    </>
  );
}
