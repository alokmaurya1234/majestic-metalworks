
import { Suspense } from "react";
import CpHeader from "../components/cp-header";
import CpCatalogue from "../components/cp-catalogue";

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

      <Suspense
        fallback={
          <div className="container-fluid surface-ivory">
            <div
              className="container"
              style={{ paddingTop: "155px", minHeight: "60vh" }}
            >
              <p role="status">Loading catalogue...</p>
            </div>
          </div>
        }
      >
        <CatalogueContent searchParams={searchParams} />
      </Suspense>
    </>
  );
}
