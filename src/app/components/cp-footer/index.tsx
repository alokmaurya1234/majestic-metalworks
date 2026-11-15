
import Image from "next/image";
import Link from "next/link";
import styles from "./cpFooter.module.scss";

const CURRENT_YEAR = 2026;

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#home-products" },
  { label: "Our Approach", href: "/#home-approach" },
  { label: "Our Clients", href: "/#home-clients" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Stainless Steel Railings", id: "stainless-steel-railings" },
  { label: "Glass Railings", id: "glass-railings" },
  { label: "Sliding Gates", id: "sliding-gates" },
  { label: "Automated Gates", id: "automated-gates" },
  { label: "Window & Bathroom Glass", id: "glass-solutions" },
  { label: "Jhula", id: "jhula" },
];

const address =
  "Milk Plant, Near ASR Bypass, C.J.S. Public School, Jalandhar, Punjab - 144008, India";

const mapsListingUrl =
  "https://www.google.com/maps/place/Majestic+Metal+Works/@31.3672338,75.5555052,17z/data=!3m1!4b1!4m6!3m5!1s0x391a50696542b43b:0xf0f39c24be4ea1f3!8m2!3d31.3672338!4d75.5555052!16s%2Fg%2F11c7vtjywt?hl=en&entry=ttu";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=31.3672338%2C75.5555052";

const embeddedMapUrl =
  "https://www.google.com/maps?q=31.3672338,75.5555052&z=17&output=embed";

const CpFooter = () => {
  return (
    <footer className={`container-fluid ${styles.footerSection}`}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerMain}>
          {/* Company Information */}

          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.logoWrap}
              aria-label="Majestic Metal Works homepage"
            >
              <Image
                src="/images/branding/cropped-Majestic-Metal-works.png"
                alt="Majestic Metal Works logo"
                width={220}
                height={51}
                sizes="220px"
              />
            </Link>

            <h2>
              Architectural metalwork
              <span> in Jalandhar, Punjab.</span>
            </h2>

            <p className={styles.brandDescription}>
              Majestic Metal Works provides custom metal
              fabrication, stainless steel railings, gates
              and glass solutions for residential and
              commercial spaces.
            </p>

            <div className={styles.socialLinks}>
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

              <a
                href="https://wa.me/919814426117"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp Majestic Metal Works"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 11.5a8 8 0 0 1-11.8 7l-4.2 1 1.1-4.1A8 8 0 1 1 20 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 8.5c.2-.5.5-.5.8-.5h.5l1 2-1 1c.7 1.5 1.5 2.3 3 3l1-1 2 1v.5c0 .3 0 .6-.5.8-1 .5-2 .4-3-.1-2.2-1-3.9-2.7-4.8-4.8-.5-1-.6-2-.1-3Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
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
                aria-label="Majestic Metal Works Instagram"
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
                href="mailto:majesticworks10@gmail.com"
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
            </div>
          </div>

          {/* Navigation Links */}

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Explore</h3>

            <ul>
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Our Services</h3>

            <ul>
              {serviceLinks.map((item) => (
                <li key={item.id}>
                  <Link href={`/catalogue?category=${item.id}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Location */}

          <div className={styles.locationColumn}>
            <h3 className={styles.columnTitle}>Visit Our Workshop</h3>

            <div className={styles.locationHeading}>
              <span className={styles.locationIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>

              <div>
                <h4>Majestic Metal Works</h4>
                <p>{address}</p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              <span>Get Directions</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={mapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              View Business on Google Maps ↗
            </a>

            <div className={styles.mapFrame}>
              <iframe
                src={embeddedMapUrl}
                title="Majestic Metal Works workshop location in Jalandhar"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="tel:+919814426117"
              className={styles.contactItem}
            >
              +91 98144 26117
            </a>

            <a
              href="mailto:majesticworks10@gmail.com"
              className={styles.contactItem}
            >
              majesticworks10@gmail.com
            </a>

            <a
              href="https://www.instagram.com/majestic_metal117/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              @majestic_metal117
            </a>
          </div>
        </div>

        {/* Local SEO Description */}

        <div className={styles.localDescription}>
          <p>
            Looking for stainless steel railings, glass railings,
            sliding gates, automated gates or custom metalwork
            in Jalandhar, Punjab? Explore the architectural
            metal and glass solutions offered by Majestic Metal Works.
          </p>
        </div>

        {/* Copyright */}

        <div className={styles.footerBottom}>
          <p>
            © {CURRENT_YEAR} Majestic Metal Works. All rights reserved.
          </p>

          <p>Based in Jalandhar, Punjab, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default CpFooter;
