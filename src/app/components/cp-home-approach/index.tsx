
import styles from "./cpHomeApproach.module.scss";

interface ApproachItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

const approachItems: ApproachItem[] = [
  {
    id: "fabrication",
    label: "CUSTOM WORK",
    title: "Tailored fabrication",
    description:
      "Custom metal fabrication and welding for residential and commercial spaces, shaped around individual requirements.",
  },
  {
    id: "functionality",
    label: "FORM & FUNCTION",
    title: "Designed for everyday use",
    description:
      "Railings, gates and glass solutions that bring together practical functionality and considered visual appeal.",
  },
  {
    id: "versatility",
    label: "METAL & GLASS",
    title: "Made for modern spaces",
    description:
      "A considered range of architectural metalwork and glass solutions for different residential and commercial settings.",
  },
];

const CpHomeApproach = () => {
  return (
    <section
      id="home-approach"
      className={`container-fluid ${styles.approachSection}`}
      aria-labelledby="approach-title"
    >
      <div className={`container ${styles.approachContainer}`}>
        <header className={styles.approachHeader}>
          <div className={styles.approachHeading}>
            <div className={styles.eyebrow}>
              <span />
              THE MAJESTIC APPROACH
            </div>

            <h2 id="approach-title" className={styles.sectionTitle}>
              Thoughtful metalwork.
              <span> Made for modern spaces.</span>
            </h2>
          </div>

          <p className={styles.sectionDescription}>
            Every space has its own requirements. Our approach
            brings together custom fabrication, practical
            functionality and architectural aesthetics to
            create metal and glass solutions that belong.
          </p>
        </header>

        <div className={styles.approachGrid}>
          {approachItems.map((item) => (
            <article
              className={styles.approachCard}
              key={item.id}
            >
              <div className={styles.cardAccent} />

              <span className={styles.cardLabel}>
                {item.label}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span
                className={styles.cardDecoration}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpHomeApproach;
