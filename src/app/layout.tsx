import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "4A Trades — UK Construction Labour Supply & Strategic Partnerships",
  description:
    "One call for your entire construction workforce. Skilled tradespeople, site personnel, plant and materials across 6 UK regions. Labour supply, fixed-price packages, and strategic partnerships with up to 3% commission.",
  keywords: "construction labour supply, tradespeople UK, construction staffing, strategic partnerships, labour hire",
  openGraph: {
    title: "4A Trades — Your Workforce. Delivered.",
    description: "UK construction labour supply and strategic partnership network. 50+ trades, 6 regions, 24hr turnaround.",
    url: "https://www.4atrades.co.uk",
    siteName: "4A Trades",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="bg-darker text-text antialiased">
        <Header />
        {children}
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
