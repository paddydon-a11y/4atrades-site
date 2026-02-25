import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Strategic Partnerships | Earn Up To 3% Commission | 4A Trades",
  description:
    "Join the 4A Trades partnership programme. Earn 1-3% commission on every referral from your construction network. Three tiers, real money. Get started free.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/join",
  },
  openGraph: {
    title: "Strategic Partnerships | Earn Up To 3% Commission | 4A Trades",
    description:
      "Join the 4A Trades partnership programme. Earn 1-3% commission on every referral from your construction network. Three tiers, real money. Get started free.",
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
    title: "Strategic Partnerships | Earn Up To 3% Commission | 4A Trades",
    description:
      "Join the 4A Trades partnership programme. Earn 1-3% commission on every referral from your construction network. Three tiers, real money. Get started free.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Strategic Partnerships" },
        ]}
      />
      {children}
    </>
  );
}
