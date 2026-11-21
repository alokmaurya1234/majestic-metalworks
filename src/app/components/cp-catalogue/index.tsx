
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

import {
  getAllCategories,
  getCategoryBySlug,
} from "@/sanity/lib/catalogue";

import { urlFor } from "@/sanity/lib/image";

import CpCatalogueGallery from "../cp-catalogue-gallery";

import styles from "./cpCatalogue.module.scss";

interface CategoryGalleryItem {
  _key?: string;
  description?: string;
  altText?: string;
  image?: SanityImageSource | null;
}

interface CatalogueGalleryImage {
  id: string;
  src: string;
  alt: string;
  description: string;
}

interface Category {
  _id: string;
  title: string;
  slug: string;
  description: string;
  displayStatus?: "active" | "comingSoon";
  catalogueOrder?: number;
  coverImage?: SanityImageSource | null;
  coverImageAlt?: string;
  gallery?: CategoryGalleryItem[];
}

interface CpCatalogueProps {
  selectedCategory?: string;
}

const getCategoryHref = (slug: string) =>
  `/catalogue?category=${encodeURIComponent(
    slug
  )}#catalogue-gallery-${slug}`;

const CpCatalogue = async ({
  selectedCategory,
}: CpCatalogueProps) => {
  const categories = (await getAllCategories()) as Category[];

  const activeCategory = selectedCategory
    ? ((await getCategoryBySlug(selectedCategory)) as Category | null)
    : null;

  const activeCategoryIndex = activeCategory
    ? categories.findIndex(
        (category) => category.slug === activeCategory.slug
      )
    : -1;

  const categoryNumber = String(
    activeCategoryIndex >= 0 ? activeCategoryIndex + 1 : 1
  ).padStart(2, "0");

  const galleryImages: CatalogueGalleryImage[] = (
    activeCategory?.gallery ?? []
  ).flatMap((item, index) => {
    if (!item.image) return [];

    return [
      {
        id: item._key || `${activeCategory?._id}-${index}`,
        src: urlFor(item.image)
          .width(1800)
          .quality(88)
          .auto("format")
          .url(),
        alt:
          item.altText?.trim() ||
          `${activeCategory?.title} gallery image ${index + 1}`,
        description: item.description?.trim() || "",
      },
    ];
  });

  return (
    <section
      className={`container-fluid ${styles.catalogue}`}
      aria-labelledby="catalogue-title"
    >
      <div className={`container ${styles.catalogueContainer}`}>
        <header className={styles.catalogueHeader}>
          <div className={styles.eyebrow}>
            <span />
            MAJESTIC METALWORKS / CATALOGUE
          </div>

          <h1 id="catalogue-title">
            {activeCategory ? (
              activeCategory.title
            ) : (
              <>
                Explore our <span>Catalogue.</span>
              </>
            )}
          </h1>

          <p>
            {activeCategory
              ? activeCategory.description
              : "Explore our collection of architectural metalwork, railings, gates and glass solutions."}
          </p>
        </header>

        <nav
          className={styles.categoryNavigation}
          aria-label="Catalogue categories"
        >
          <Link
            href="/catalogue#catalogue-overview"
            className={`${styles.categoryLink} ${
              !selectedCategory ? styles.activeCategory : ""
            }`}
            aria-current={!selectedCategory ? "page" : undefined}
          >
            All Categories
          </Link>

          {categories.map((category) => (
            <Link
              href={getCategoryHref(category.slug)}
              key={category._id}
              className={`${styles.categoryLink} ${
                activeCategory?.slug === category.slug
                  ? styles.activeCategory
                  : ""
              }`}
              aria-current={
                activeCategory?.slug === category.slug
                  ? "page"
                  : undefined
              }
            >
              {category.title}
            </Link>
          ))}
        </nav>

        {!selectedCategory && (
          <div
            id="catalogue-overview"
            className={styles.categoryGrid}
          >
            {categories.map((category, index) => {
              const isComingSoon =
                category.displayStatus === "comingSoon";

              const coverImageUrl = category.coverImage
                ? urlFor(category.coverImage)
                    .width(900)
                    .height(675)
                    .fit("crop")
                    .auto("format")
                    .url()
                : null;

              return (
                <Link
                  href={getCategoryHref(category.slug)}
                  className={styles.categoryCard}
                  key={category._id}
                  aria-label={`View ${category.title} collection`}
                >
                  <div className={styles.categoryCardImage}>
                    {coverImageUrl ? (
                      <Image
                        src={coverImageUrl}
                        alt={
                          category.coverImageAlt ||
                          `${category.title} collection`
                        }
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      />
                    ) : (
                      <div className={styles.categoryImageFallback}>
                        {isComingSoon ? "COMING SOON" : "COLLECTION"}
                      </div>
                    )}

                    {isComingSoon && (
                      <span className={styles.statusBadge}>
                        COMING SOON
                      </span>
                    )}
                  </div>

                  <div className={styles.categoryCardBody}>
                    <span className={styles.categoryNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={styles.categoryDetails}>
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                    </div>

                    <span
                      className={styles.categoryArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {selectedCategory && !activeCategory && (
          <div
            className={styles.galleryEmptyState}
            role="status"
          >
            <h2>Category not found</h2>
            <p>
              This category may have been unpublished or its URL may
              have changed.
            </p>

            <Link
              href="/catalogue#catalogue-overview"
              className={styles.backLink}
            >
              ← Back to all categories
            </Link>
          </div>
        )}

        {activeCategory && (
          <section
            id={`catalogue-gallery-${activeCategory.slug}`}
            className={styles.selectedCategory}
            aria-labelledby="selected-category-title"
          >
            <div className={styles.categoryIntro}>
              <span>{categoryNumber}</span>

              <h2 id="selected-category-title">
                {activeCategory.title} Collection
              </h2>
            </div>

            {activeCategory.displayStatus === "comingSoon" ? (
              <div
                className={styles.galleryPlaceholder}
                role="status"
              >
                <div className={styles.galleryIcon}>
                  <span />
                  <span />
                </div>

                <h3>Coming Soon</h3>

                <p>
                  We&apos;re preparing the{" "}
                  {activeCategory.title.toLowerCase()} collection.
                  Images will be available soon.
                </p>
              </div>
            ) : galleryImages.length > 0 ? (
              <CpCatalogueGallery
                images={galleryImages}
                categoryTitle={activeCategory.title}
              />
            ) : (
              <div
                className={styles.galleryEmptyState}
                role="status"
              >
                <h3>Gallery being updated</h3>
                <p>
                  Images for this collection are being prepared.
                  Please check back soon.
                </p>
              </div>
            )}

            <Link
              href="/catalogue#catalogue-overview"
              className={styles.backLink}
            >
              <span aria-hidden="true">←</span>
              Back to all categories
            </Link>
          </section>
        )}

        {categories.length === 0 && (
          <div
            className={styles.galleryEmptyState}
            role="status"
          >
            <h2>Catalogue being updated</h2>
            <p>Our collections will be available here soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CpCatalogue;
