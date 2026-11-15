
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpPageBanner from "../components/cp-page-banner";
import CpHomeClients from "../components/cp-home-clients";
import CpHomeContact from "../components/cp-home-contact";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "Our Clients | Majestic Metal Works",
  description:
    "Discover organisations associated with Majestic Metal Works and our architectural metalwork solutions in Jalandhar, Punjab.",
};

export default function ClientsPage() {
  return (
    <>
      <CpHeader />

      <main>
        {/* Clients Page Banner */}
        <CpPageBanner
          eyebrow="OUR CLIENTS"
          title="Built on Trust."
          highlight="Driven by Relationships."
          description="A look at the organisations featured among the clients of Majestic Metal Works."
          imageSrc="/images/client.jpg"
          imageAlt="Architectural glass railing"
          imagePosition="center"
        />

        {/* Clients Carousel */}
        <CpHomeClients />

        {/* Contact Section */}
        <CpHomeContact />
      </main>
      <CpFooter />
    </>
  );
}
