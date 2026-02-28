import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getLocationBySlug } from "@/lib/seo/location-data";

export default async function LocationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/trades" },
          { label: location.name },
        ]}
      />
      {children}
    </>
  );
}
