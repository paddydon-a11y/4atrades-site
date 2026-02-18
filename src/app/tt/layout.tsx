import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Construction Trades Supplied — 50+ Disciplines | 4A Trades",
  description:
    "From site labourers to quantity surveyors — 4A Trades supplies 50+ construction trades across 6 UK regions. Vetted tradespeople, 24-hour turnaround, one invoice.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
