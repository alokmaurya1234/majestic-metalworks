
import type { Metadata } from "next";

import CpHeader from "../components/cp-header";
import CpPageBanner from "../components/cp-page-banner";
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

            <main>
                <CpPageBanner
                    eyebrow="WHAT WE DO"
                    title="Metalwork for"
                    highlight="Modern Living."
                    description="Explore our architectural metalwork, stainless steel railings, gates and glass solutions."
                    imageSrc="/images/your-services-banner1.jpg"
                    imageAlt="Architectural metalwork and modern glass railing"
                />
                <CpHomeApproach />
                <CpHomeProducts />
                
                <CpHomeContact />
            </main>

            <CpFooter />
        </>
    );
}
