
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./cpCatalogueGallery.module.scss";

export interface CatalogueGalleryImage {
  id: string;
  src: string;
  alt: string;
  description?: string;
}

interface CpCatalogueGalleryProps {
  images: CatalogueGalleryImage[];
  categoryTitle: string;
}

const CpCatalogueGallery = ({
  images,
  categoryTitle,
}: CpCatalogueGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const closeViewer = () => {
    setActiveIndex(null);
    setIsZoomed(false);
  };

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + images.length) % images.length
    );
    setIsZoomed(false);
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % images.length
    );
    setIsZoomed(false);
  };

  
useEffect(() => {
  if (activeIndex === null) return;

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setActiveIndex(null);
      setIsZoomed(false);
      return;
    }

    if (event.key === "ArrowLeft") {
      setActiveIndex((current) =>
        current === null
          ? null
          : (current - 1 + images.length) % images.length
      );
      setIsZoomed(false);
    }

    if (event.key === "ArrowRight") {
      setActiveIndex((current) =>
        current === null
          ? null
          : (current + 1) % images.length
      );
      setIsZoomed(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = previousOverflow;
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [activeIndex, images.length]);


  const activeImage =
    activeIndex !== null ? images[activeIndex] : null;

  if (!images.length) return null;

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={styles.galleryItem}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1} of ${images.length}: ${image.alt}`}
          >
            <span className={styles.imageFrame}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, 30vw"
              />

              <span
                className={styles.viewIcon}
                aria-hidden="true"
              >
                ↗
              </span>
            </span>

            {image.description && (
              <span className={styles.imageDescription}>
                {image.description}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className={styles.lightbox}
          role="presentation"
          onClick={closeViewer}
        >
          <section
            className={styles.lightboxDialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${categoryTitle} image viewer`}
            onClick={(event) => event.stopPropagation()}
          >
            <header className={styles.viewerHeader}>
              <span className={styles.imageCounter}>
                {activeIndex! + 1} / {images.length}
              </span>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeViewer}
                aria-label="Close image viewer"
              >
                ×
              </button>
            </header>

            <div
              className={`${styles.viewerImage} ${
                isZoomed ? styles.zoomed : ""
              }`}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="95vw"
                priority
              />
            </div>

            <footer className={styles.viewerFooter}>
              <div className={styles.viewerDetails}>
                <span className={styles.viewerCategory}>
                  {categoryTitle}
                </span>

                {activeImage.description && (
                  <p>{activeImage.description}</p>
                )}
              </div>

              <div className={styles.viewerControls}>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous image"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => setIsZoomed((current) => !current)}
                  aria-label={isZoomed ? "Fit image to screen" : "Zoom image"}
                >
                  {isZoomed ? "Fit" : "Zoom"}
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </footer>
          </section>
        </div>
      )}
    </>
  );
};

export default CpCatalogueGallery;
