
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

            <h2
              id="contact-title"
              className={styles.sectionTitle}
            >
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
            <Link
              href="/contact"
              className={styles.primaryAction}
            >
              Let&apos;s Discuss
              <span aria-hidden="true">↗</span>
            </Link>

            <div className={styles.socialLinks}>
              {/* Phone */}
              <a
                href="tel:+919814426117"
                className={styles.socialLink}
                aria-label="Call Majestic Metal Works"
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

              {/* Instagram */}
              <a
                href="https://www.instagram.com/majestic_metal117/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit Majestic Metal Works on Instagram"
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
                  <circle
                    cx="17.5"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=majesticworks10%40gmail.com&su=Project%20Enquiry%20-%20Majestic%20Metalworks"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Email Majestic Metal Works"
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

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@majesticmetalworks117"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit Majestic Metal Works on YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="2.5"
                    y="5"
                    width="19"
                    height="14"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <path
                    d="m10 9 5 3-5 3V9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100080169324624&rdid=dmF44a0TvaQr1sGk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18sRC9r1Z4%2F#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit Majestic Metal Works on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
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
