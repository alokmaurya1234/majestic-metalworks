
import Image from "next/image";
import Link from "next/link";
import styles from "./cpHomeProducts.module.scss";

interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const productItems: ProductItem[] = [
  {
    id: "stainless-steel-railings",
    title: "Stainless Steel Railings",
    description:
      "Stainless-steel railing solutions for residential and commercial spaces.",
    image: "/images/source-site/home/S-S-Railing.png",
    imageAlt: "Stainless steel railing installation",
  },
  {
    id: "glass-railings",
    title: "Glass Railings",
    description:
      "Glass railing solutions that bring openness and a clean architectural finish.",
    image: "/images/source-site/home/Glass-railing.png",
    imageAlt: "Architectural glass railing",
  },
  {
    id: "sliding-gates",
    title: "Sliding Gates",
    description:
      "Sliding gate solutions for residential and commercial entrances.",
    image: "/images/source-site/home/Sliding-Gate.jpg",
    imageAlt: "Metal sliding gate",
  },
  {
    id: "automated-gates",
    title: "Automated Gates",
    description:
      "Automated gate solutions for convenient and controlled access.",
    image: "/images/source-site/home/Automation-gate.jpg",
    imageAlt: "Automated metal gate",
  },
  {
    id: "glass-solutions",
    title: "Window & Bathroom Glass",
    description:
      "Glass solutions for windows and bathrooms, designed for everyday spaces.",
    image: "/images/source-site/home/Bathroom-glass1.jpg",
    imageAlt: "Bathroom glass installation",
  },
  {
    id: "jhula",
    title: "Jhula",
    description:
      "Explore the company's jhula offerings for residential spaces.",
    image: "/images/source-site/home/Jhula.jpg",
    imageAlt: "Jhula product",
  },
];

const CpHomeProducts = () => {
  return (
    <section
      id="home-products"
      className={`container-fluid ${styles.productsSection}`}
      aria-labelledby="products-title"
    >
      <div className={`container ${styles.productsContainer}`}>
        <header className={styles.sectionHeader}>
          <div className={styles.sectionHeading}>
            <div className={styles.eyebrow}>
              <span />
              WHAT WE OFFER
            </div>

            <h2 id="products-title" className={styles.sectionTitle}>
              Solutions shaped around your{" "}
              <span>space.</span>
            </h2>
          </div>

          <p className={styles.sectionDescription}>
            From stainless-steel railings and gates to glass
            solutions and custom metalwork, explore what
            Majestic Metal Works offers.
          </p>
        </header>

        <div className={styles.productsGrid}>
          {productItems.map((item) => (
            <Link
              href={`/catalogue?category=${item.id}`}
              className={styles.productLink}
              key={item.id}
              aria-label={`Explore ${item.title} catalogue`}
            >
              <article className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 38vw, 26vw"
                  />

                  <div className={styles.cardOverlay} />

                  <div className={styles.cardContent}>
                    <div className={styles.cardDetails}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <span
                      className={styles.cardArrow}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpHomeProducts;
