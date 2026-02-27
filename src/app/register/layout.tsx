import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Register as a Worker | 4A Trades",
  description:
    "Register as a construction worker with 4A Trades. Choose your trade, select your region, and sign up in minutes. Opportunities across England & Wales.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/register",
  },
  openGraph: {
    title: "Register as a Worker | 4A Trades",
    description:
      "Register as a construction worker with 4A Trades. Choose your trade, select your region, and sign up in minutes. Opportunities across England & Wales.",
    url: "https://www.4atrades.co.uk/register",
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
    title: "Register as a Worker | 4A Trades",
    description:
      "Register as a construction worker with 4A Trades. Choose your trade, select your region, and sign up in minutes. Opportunities across England & Wales.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Register as a Worker" },
        ]}
      />
      {children}
    </>
  );
}
