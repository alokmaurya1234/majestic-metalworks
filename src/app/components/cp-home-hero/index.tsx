import Image from "next/image";
import styles from "./cpHomeHero.module.scss";

const CpHomeHero = () => {
  return (
    <section
      className={`container-fluid ${styles.hero}`}
      aria-labelledby="home-hero-title"
    >
      {/* Background Image */}
      <div className={styles.heroMedia} aria-hidden="true">
        <Image
          src="/images/home/hero-architecture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>

      {/* Dark Overlay */}
      <div
        className={styles.heroOverlay}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className={styles.heroContentWrapper}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>MAJESTIC METALWORKS</span>

            <span className={styles.eyebrowDivider}>/</span>

            <span className={styles.eyebrowSecondary}>
              ARCHITECTURAL METAL SOLUTIONS
            </span>
          </div>

          <h1
            id="home-hero-title"
            className={styles.heroTitle}
          >
            Crafted in Metal.
            <span>Designed for Living.</span>
          </h1>

          <p className={styles.heroDescription}>
            Gates, railings and glass solutions, thoughtfully
            crafted to bring character, elegance and lasting
            appeal to modern spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CpHomeHero;