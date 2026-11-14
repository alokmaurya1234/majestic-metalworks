
import Image from "next/image";
import styles from "./cpHomeHero.module.scss";

const CpHomeHero = () => {
  return (
    <section className={`container-fluid ${styles.hero}`}>
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

      <div className={styles.heroOverlay} />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>MAJESTIC METALWORKS</span>
            <span className={styles.eyebrowDivider}>/</span>
            <span className={styles.eyebrowSecondary}>
              ARCHITECTURAL METAL SOLUTIONS
            </span>
          </div>

          <h1 className={styles.heroTitle}>
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
