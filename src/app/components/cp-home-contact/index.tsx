
import Link from "next/link";
import styles from "./cpHomeContact.module.scss";

const CpHomeContact = () => {
  return (
    <section
      id="home-contact"
      className={`container-fluid ${styles.contactSection}`}
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactPanel}>
          <div className={styles.contactContent}>
            <div className={styles.eyebrow}>
              <span />
              LET&apos;S BUILD SOMETHING TOGETHER
            </div>

            <h2 id="contact-title" className={styles.sectionTitle}>
              Have a project in mind?
              <span> Let&apos;s build something that lasts.</span>
            </h2>

            <p className={styles.sectionDescription}>
              From architectural railings and gates to custom
              metalwork and glass solutions, let&apos;s discuss
              what you have in mind and find the right solution
              for your space.
            </p>
          </div>

          <div className={styles.contactActions}>
            <Link href="/contact" className={styles.primaryAction}>
              Let&apos;s Discuss
              <span aria-hidden="true">↗</span>
            </Link>

            <div className={styles.socialLinks}>
              <a
                href="tel:+919814426117"
                className={styles.socialLink}
                aria-label="Call Majestic Metalworks"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M8.4 3.5H5.7a2 2 0 0 0-2 2.2c1 8.1 6.5 13.6 14.6 14.6a2 2 0 0 0 2.2-2v-2.7l-4.3-1.4-1.8 2a14 14 0 0 1-6.7-6.7l2-1.8-1.3-4.2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/majestic_metal117/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit Majestic Metalworks on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=majesticworks10%40gmail.com&su=Project%20Enquiry%20-%20Majestic%20Metalworks"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Email Majestic Metalworks through Gmail"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="2.5"
                    y="4.5"
                    width="19"
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="m3.5 6 8.5 7 8.5-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <p className={styles.socialCaption}>
              Call, follow or email us directly
            </p>
          </div>

          <div
            className={styles.decorativeCircle}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default CpHomeContact;
