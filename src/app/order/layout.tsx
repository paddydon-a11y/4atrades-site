import Header from "@/components/Header";

export const metadata = {
  title: "Order Workers | 4A Trades",
  description:
    "Order skilled construction workers for your project. Choose your trade, location, and team size.",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
