
"use client";

import { type FormEvent } from "react";
import styles from "./cpContactForm.module.scss";

const CpContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello Majestic Metalworks,",
      "",
      "I would like to discuss a project.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/919814426117?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      className={`container-fluid ${styles.contactPage}`}
    >
      <div className={`container ${styles.contactContainer}`}>
        <header className={styles.pageHeader}>
          <div className={styles.eyebrow}>
            <span />
            GET IN TOUCH
          </div>

          <h1>
            Let&apos;s talk about
            <span> your project.</span>
          </h1>

          <p>
            Tell us a little about what you have in mind.
            We&apos;ll be happy to discuss the right metalwork
            or glass solution for your space.
          </p>
        </header>

        <div className={styles.contactLayout}>
          <aside className={styles.contactInfo}>
            <h2>Start a conversation.</h2>

            <p>
              Whether it&apos;s a new installation or a
              custom requirement, get in touch with our team.
            </p>

            <div className={styles.infoItem}>
              <span>Email</span>
              <a href="mailto:majesticworks10@gmail.com">
                majesticworks10@gmail.com
              </a>
            </div>

            <div className={styles.infoItem}>
              <span>Phone / WhatsApp</span>
              <a href="tel:+919814426117">
                +91 98144 26117
              </a>
            </div>

            <div className={styles.infoItem}>
              <span>Instagram</span>
              <a
                href="https://www.instagram.com/majestic_metal117/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @majestic_metal117
              </a>
            </div>
          </aside>

          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.formHeading}>
              <h2>Tell us about your project</h2>
              <p>
                Fill in the details below to continue to WhatsApp.
              </p>
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-name">Full name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-phone">
                Phone number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                autoComplete="tel"
                maxLength={20}
                required
              />
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-service">
                What are you looking for?
              </label>

              <select
                id="contact-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Stainless Steel Railings">
                  Stainless Steel Railings
                </option>
                <option value="Glass Railings">
                  Glass Railings
                </option>
                <option value="Sliding Gates">
                  Sliding Gates
                </option>
                <option value="Automated Gates">
                  Automated Gates
                </option>
                <option value="Window & Bathroom Glass">
                  Window & Bathroom Glass
                </option>
                <option value="Jhula">
                  Jhula
                </option>
                <option value="Custom Metalwork">
                  Custom Metalwork
                </option>
                <option value="Other">
                  Other Requirement
                </option>
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="contact-message">
                Tell us about your project
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Describe your requirements..."
                minLength={10}
                maxLength={1500}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Continue to WhatsApp
              <span aria-hidden="true">↗</span>
            </button>

            <p className={styles.formNote}>
              Your enquiry will open in WhatsApp with the
              information you provided. Review and send the
              message to reach our team.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CpContactForm;
