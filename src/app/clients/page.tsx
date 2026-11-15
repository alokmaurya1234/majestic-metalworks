
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpHomeClients from "../components/cp-home-clients";
import CpHomeContact from "../components/cp-home-contact";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "Our Clients | Majestic Metal Works",
  description:
    "Explore the organisations associated with Majestic Metal Works and our architectural metalwork solutions in Jalandhar, Punjab.",
};

export default function Clients() {
  return (
    <>
      <CpHeader />

      <main>
        <CpHomeClients />
        <CpHomeContact />
      </main>
      <CpFooter />
    </>
  );
}
