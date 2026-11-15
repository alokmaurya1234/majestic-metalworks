
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpHomeProducts from "../components/cp-home-products";
import CpHomeApproach from "../components/cp-home-approach";
import CpHomeContact from "../components/cp-home-contact";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "Metal Fabrication, Railings & Gates | Majestic Metal Works",
  description:
    "Explore stainless steel railings, glass railings, sliding gates, automated gates, window and bathroom glass, and custom metalwork services by Majestic Metal Works in Jalandhar, Punjab.",
};

export default function ServicesPage() {
  return (
    <>
      <CpHeader />

      
        <CpHomeProducts />
        <CpHomeApproach />
        <CpHomeContact />
      
      <CpFooter />
    </>
  );
}
