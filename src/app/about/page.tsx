
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpHomeAbout from "../components/cp-home-about";
import CpHomeApproach from "../components/cp-home-approach";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "About Majestic Metal Works | Jalandhar, Punjab",
  description:
    "Learn about Majestic Metal Works, a Jalandhar-based manufacturer offering custom metal fabrication, stainless steel railings, gates, welding and architectural glass solutions.",
};

export default function About() {
  return (
    <>
      <CpHeader />

      <main>
        <CpHomeAbout />
        <CpHomeApproach />
      </main>
      
      <CpFooter />
    </>
  );
}
