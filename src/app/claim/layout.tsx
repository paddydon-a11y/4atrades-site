import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Claim Your Territory | 4A Trades",
  description:
    "Claim an exclusive territory for your trade with 4A Trades. Select your trade and county to get started.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.4atrades.co.uk/claim",
  },
};

export default function ClaimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Territory Partnerships", href: "/join" },
          { label: "Claim Your Territory" },
        ]}
      />
      {children}
    </>
  );
}
