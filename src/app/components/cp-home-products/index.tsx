
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

import {
  getAllCategories,
  getFeaturedCategories,
} from "@/sanity/lib/catalogue";

import { urlFor } from "@/sanity/lib/image";

import styles from "./cpHomeProducts.module.scss";

interface ProductItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage?: SanityImageSource | null;
  coverImageAlt?: string;
  displayStatus?: "active" | "comingSoon";
}

interface CpHomeProductsProps {
  showAllCategories?: boolean;
}

const getCategoryHref = (slug: string) =>
  `/catalogue?category=${encodeURIComponent(
    slug
  )}#catalogue-gallery-${slug}`;

const CpHomeProducts = async ({
  showAllCategories = false,
}: CpHomeProductsProps) => {
  const categories = (
    showAllCategories
      ? await getAllCategories()
      : await getFeaturedCategories()
  ) as ProductItem[];

  return (
    <section
      id="home-products"
      className={`container-fluid ${styles.productsSection}`}
      aria-labelledby="products-title"
    >
      <div className={`container ${styles.productsContainer}`}>
        <header className={styles.sectionHeader}>
          <div className={styles.sectionHeading}>
            <div className={styles.eyebrow}>
              <span />
              WHAT WE OFFER
            </div>

            <h2
              id="products-title"
              className={styles.sectionTitle}
            >
              Solutions shaped around your{" "}
              <span>space.</span>
            </h2>
          </div>

          <p className={styles.sectionDescription}>
            Explore our collection of architectural products,
            custom fabrication and design solutions from
            Majestic Metal Works.
          </p>
        </header>

        <div className={styles.productsGrid}>
          {categories.map((item) => {
            const isComingSoon =
              item.displayStatus === "comingSoon";

            const imageUrl = item.coverImage
              ? urlFor(item.coverImage)
                  .width(900)
                  .height(675)
                  .fit("crop")
                  .auto("format")
                  .url()
              : null;

            return (
              <Link
                href={getCategoryHref(item.slug)}
                className={styles.productLink}
                key={item._id}
                aria-label={`Explore ${item.title} catalogue`}
              >
                <article className={styles.productCard}>
                  <div className={styles.productImage}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={
                          item.coverImageAlt ||
                          `${item.title} product collection`
                        }
                        fill
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 38vw, 26vw"
                      />
                    ) : (
                      <div className={styles.comingSoonVisual}>
                        <span>COMING SOON</span>
                      </div>
                    )}

                    <div
                      className={styles.cardOverlay}
                      aria-hidden="true"
                    />

                    <div className={styles.cardContent}>
                      <div className={styles.cardDetails}>
                        {isComingSoon && (
                          <span className={styles.comingSoonLabel}>
                            COMING SOON
                          </span>
                        )}

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>

                      <span
                        className={styles.cardArrow}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}

          {!showAllCategories && (
            <Link
              href="/catalogue"
              className={`${styles.productLink} ${styles.exploreLink}`}
              aria-label="Explore the complete catalogue"
            >
              <article
                className={`${styles.productCard} ${styles.exploreCard}`}
              >
                <div className={styles.exploreCardContent}>
                  <span className={styles.exploreEyebrow}>
                    DISCOVER MORE
                  </span>

                  <h3>
                    Explore the full
                    <span> catalogue.</span>
                  </h3>

                  <p>
                    Browse all our categories and discover
                    more of what we create.
                  </p>

                  <span
                    className={styles.exploreArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </article>
            </Link>
          )}
        </div>

        {categories.length === 0 && (
          <p className={styles.emptyMessage}>
            Our collection is being updated. Please check back soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default CpHomeProducts;
