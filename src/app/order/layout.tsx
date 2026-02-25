import type { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Order Construction Workers Online | 4A Trades",
  description:
    "Order skilled construction workers in minutes. Choose your trade, pick your location, set your team size. Fast deployment across England & Wales.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/order",
  },
  openGraph: {
    title: "Order Construction Workers Online | 4A Trades",
    description:
      "Order skilled construction workers in minutes. Choose your trade, pick your location, set your team size. Fast deployment across England & Wales.",
    url: "https://www.4atrades.co.uk/order",
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
    title: "Order Construction Workers Online | 4A Trades",
    description:
      "Order skilled construction workers in minutes. Choose your trade, pick your location, set your team size. Fast deployment across England & Wales.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Order Workers" },
        ]}
      />
      {children}
    </>
  );
}
