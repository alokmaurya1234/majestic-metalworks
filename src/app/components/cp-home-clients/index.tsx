
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./cpHomeClients.module.scss";

interface ClientItem {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
}

const clientItems: ClientItem[] = [
  {
    id: "itc",
    name: "ITC",
    image: "/images/clients/itc.jpeg",
    imageAlt: "Illustrative commercial architecture photograph",
  },
  {
    id: "reliance",
    name: "Reliance Group",
    image: "/images/clients/reliance-group1.jpeg",
    imageAlt: "Illustrative industrial architecture photograph",
  },
  {
    id: "nit-jalandhar",
    name: "NIT College Jalandhar",
    image: "/images/clients/nit-college-jalandhar.jpeg",
    imageAlt: "Illustrative educational campus photograph",
  },
  {
    id: "iit",
    name: "ITI Mardi",
    image: "/images/clients/iti.jpeg",
    imageAlt: "Illustrative institutional architecture photograph",
  },
  {
    id: "nivia-sports",
    name: "Nivia Sports",
    image: "/images/clients/nivia-sports.avif",
    imageAlt: "Illustrative sports facility photograph",
  },
];

const positionClasses: Record<number, string> = {
  [-2]: styles.farLeft,
  [-1]: styles.left,
  0: styles.active,
  1: styles.right,
  2: styles.farRight,
};

const AUTO_SLIDE_INTERVAL = 2000;

const CpHomeClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalClients = clientItems.length;

  // Automatically move the carousel from left to right.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current - 1 + totalClients) % totalClients);
    }, AUTO_SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [totalClients]);

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % totalClients);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalClients) % totalClients);
  };

  const getRelativePosition = (index: number) => {
    let offset = index - activeIndex;

    if (offset > 2) {
      offset -= totalClients;
    }

    if (offset < -2) {
      offset += totalClients;
    }

    return offset;
  };

  return (
    <section
      id="home-clients"
      className={`container-fluid ${styles.clientsSection}`}
      aria-labelledby="clients-title"
    >
      <div className={`container ${styles.clientsContainer}`}>
        <header className={styles.clientsHeader}>
          <div className={styles.eyebrow}>
            <span />
            OUR CLIENTS
            <span />
          </div>

          <h2 id="clients-title" className={styles.sectionTitle}>
            Built on relationships.
            <span> Backed by trust.</span>
          </h2>

          <p className={styles.sectionDescription}>
            A selection of organizations featured in Majestic Metal Works&apos;
            existing client portfolio.
          </p>
        </header>

        <div
          className={styles.carouselStage}
          role="group"
          aria-label="Client portfolio carousel"
        >
          {clientItems.map((client, index) => {
            const offset = getRelativePosition(index);
            const isActive = offset === 0;

            return (
              <button
                type="button"
                key={client.id}
                className={`${styles.clientCard} ${positionClasses[offset]}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${client.name}`}
                aria-pressed={isActive}
              >
                <Image
                  src={client.image}
                  alt={client.imageAlt}
                  fill
                  sizes="(max-width: 768px) 72vw, (max-width: 1200px) 34vw, 330px"
                  draggable={false}
                />

                <span
                  className={styles.cardOverlay}
                  aria-hidden="true"
                />

                <span className={styles.cardContent}>
                  <span className={styles.cardLabel}>
                    CLIENT PORTFOLIO
                  </span>

                  <span className={styles.clientName}>
                    {client.name}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.carouselControls}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={showPrevious}
            aria-label="Previous client"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div
            className={styles.pagination}
            role="group"
            aria-label="Select a client"
          >
            {clientItems.map((client, index) => (
              <button
                type="button"
                key={client.id}
                className={`${styles.paginationItem} ${
                  activeIndex === index ? styles.paginationActive : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${client.name}`}
                aria-pressed={activeIndex === index}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={showNext}
            aria-label="Next client"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* <p className={styles.imageNote}>
          Client names are taken from the existing company website.
          Photographs are temporary illustrative placeholders.
        </p> */}
      </div>
    </section>
  );
};

export default CpHomeClients;
