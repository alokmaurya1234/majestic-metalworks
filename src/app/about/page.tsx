
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpPageBanner from "../components/cp-page-banner";
import CpHomeAbout from "../components/cp-home-about";
import CpHomeApproach from "../components/cp-home-approach";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "About Us | Majestic Metal Works, Jalandhar",
  description:
    "Learn about Majestic Metal Works, a Jalandhar-based metal fabrication business specialising in stainless steel railings, gates, glass solutions and custom metalwork.",
};

export default function AboutPage() {
  return (
    <>
      <CpHeader />

      <main>
        <CpPageBanner
          eyebrow="ABOUT MAJESTIC METALWORKS"
          title="Built on"
          highlight="Craftsmanship."
          description="Bringing together metal, glass and thoughtful fabrication to create functional solutions for modern spaces."
          imageSrc="/images/Glass-railing.jpg"
          imageAlt="Architectural glass railing by Majestic Metal Works"
          imagePosition="center"
        />

        {/* Company Introduction */}
        <CpHomeAbout />

        {/* Our Approach */}
        <CpHomeApproach />
      </main>
      <CpFooter />
    </>
  );
}
