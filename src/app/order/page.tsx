import { Suspense } from "react";
import OrderWizard from "@/components/wizard/OrderWizard";

export default function OrderPage() {
  return (
    <Suspense>
      <OrderWizard />
    </Suspense>
  );
}
