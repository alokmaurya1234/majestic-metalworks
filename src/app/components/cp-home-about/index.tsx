
import Image from "next/image";
import Link from "next/link";
import styles from "./cpHomeAbout.module.scss";

const CpHomeAbout = () => {
  return (
    <section
      id="home-introduction"
      className={`container-fluid ${styles.aboutSection}`}
      aria-labelledby="home-about-title"
    >
      <div className={`container ${styles.aboutContainer}`}>

        <div className={styles.aboutMedia}>
          <Image
            src="/images/home/company-intro-railing2.jpg"
            alt="Modern architectural staircase with glass and metal railing"
            fill
            sizes="(max-width: 768px) 80vw, 42vw"
          />
        </div>

        <div className={styles.aboutContent}>

          <div className={styles.eyebrow}>
            <span />
            ABOUT MAJESTIC METALWORKS
          </div>

          <h2 id="home-about-title" className={styles.aboutTitle}>
            Where strength meets <span>style.</span>
          </h2>

          <p className={styles.aboutDescription}>
            Majestic Metal Works brings together custom metal
            fabrication, welding and architectural metalwork
            for residential and commercial spaces.
          </p>

          <p className={styles.aboutDescription}>
            From stainless-steel railings and gates to glass
            solutions, we create products that balance
            practical functionality with modern aesthetics.
          </p>

          <ul className={styles.aboutHighlights}>
            <li>Metal fabrication</li>
            <li>Gates & railings</li>
            <li>Glass work</li>
          </ul>

          <Link href="/about" className={styles.aboutLink}>
            Discover our story
            <span aria-hidden="true">↗</span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CpHomeAbout;
