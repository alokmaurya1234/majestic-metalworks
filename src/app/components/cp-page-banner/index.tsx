
import Image from "next/image";
import styles from "./cpPageBanner.module.scss";

interface CpPageBannerProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}

const CpPageBanner = ({
  eyebrow = "MAJESTIC METALWORKS",
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "center",
}: CpPageBannerProps) => {
  return (
    <section
      className={styles.banner}
      aria-labelledby="page-banner-title"
    >
      {/* Background Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
          style={{ objectPosition: imagePosition }}
        />
      </div>

      {/* Dark Overlay */}
      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      {/* Banner Content */}
      <div className={styles.contentWrapper}>
        <div className={`container ${styles.content}`}>

          {eyebrow && (
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {eyebrow}
            </p>
          )}

          <h1 id="page-banner-title" className={styles.title}>
            <span>{title}</span>

            {highlight && (
              <span className={styles.highlight}>
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default CpPageBanner;
