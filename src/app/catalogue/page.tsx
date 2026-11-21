
import type { Metadata } from "next";
import { Suspense } from "react";

import CpHeader from "../components/cp-header";
import CpPageBanner from "../components/cp-page-banner";
import CpCatalogue from "../components/cp-catalogue";
import CpFooter from "../components/cp-footer";

export const metadata: Metadata = {
  title: "Our Catalogue | Majestic Metal Works",
  description:
    "Explore stainless steel railings, glass railings, sliding gates, automated gates, glass solutions and custom metalwork by Majestic Metal Works, Jalandhar.",
};

interface CataloguePageProps {
  searchParams: Promise<{
    category?: string | string[];
  }>;
}

async function CatalogueContent({
  searchParams,
}: CataloguePageProps) {
  const params = await searchParams;

  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  return <CpCatalogue selectedCategory={category} />;
}

export default function CataloguePage({
  searchParams,
}: CataloguePageProps) {
  return (
    <>
      <CpHeader />

      <main>
        {/* Catalogue Banner */}
        <CpPageBanner
          eyebrow="EXPLORE OUR CATALOGUE"
          title="Explore Our"
          highlight="Collection."
          description="Discover architectural metalwork, elegant railing designs, gates and glass solutions crafted for modern spaces."
          imageSrc="/images/Automation_gate1.jpg"
          imageAlt="Automated metal gate by Majestic Metal Works"
          imagePosition="center"
        />

        {/* Catalogue Content */}
        <Suspense
          fallback={
            <div className="container-fluid surface-ivory">
              <div
                className="container"
                style={{
                  paddingTop: "80px",
                  paddingBottom: "80px",
                  minHeight: "40vh",
                }}
              >
                <p role="status">Loading catalogue...</p>
              </div>
            </div>
          }
        >
          <CatalogueContent searchParams={searchParams} />
        </Suspense>
      </main>
      <CpFooter />
    </>
  );
}
