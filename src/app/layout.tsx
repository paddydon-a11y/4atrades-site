import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4atrades.co.uk"),
  title: "Construction Labour Hire UK | Skilled Tradesmen | 4A Trades",
  description:
    "Order skilled construction workers online. Labourers, groundworkers, bricklayers, electricians & more across England & Wales. Competitive hourly rates. Fast deployment.",
  keywords:
    "construction labour hire, skilled tradesmen UK, construction staffing, labour supply, construction workers",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk",
  },
  verification: {
    google: "fWqrGNgqKJDWo66jVSWJ-_XX-ogyRPf-jn6XeDjZ3DM",
  },
  openGraph: {
    title: "Construction Labour Hire UK | Skilled Tradesmen | 4A Trades",
    description:
      "Order skilled construction workers online. Labourers, groundworkers, bricklayers, electricians & more across England & Wales. Competitive hourly rates. Fast deployment.",
    url: "https://www.4atrades.co.uk",
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
    title: "Construction Labour Hire UK | Skilled Tradesmen | 4A Trades",
    description:
      "Order skilled construction workers online. Labourers, groundworkers, bricklayers, electricians & more across England & Wales. Competitive hourly rates. Fast deployment.",
    images: ["https://www.4atrades.co.uk/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "4A Trades",
  url: "https://www.4atrades.co.uk",
  logo: "https://www.4atrades.co.uk/logo.png",
  description:
    "Construction labour agency supplying skilled tradesmen across England and Wales",
  telephone: "0330 133 7901",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
};

const employmentAgencySchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "4A Trades",
  url: "https://www.4atrades.co.uk",
  telephone: "0330 133 7901",
  priceRange: "££",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: "Construction Labour Hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="bg-darker text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(employmentAgencySchema),
          }}
        />
        <Header />
        {children}
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
