import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getTradeBySlug } from "@/lib/seo/trade-data";

export default async function TradeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trade = getTradeBySlug(slug);
  if (!trade) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Trades", href: "/trades" },
          { label: trade.name },
        ]}
      />
      {children}
    </>
  );
}
