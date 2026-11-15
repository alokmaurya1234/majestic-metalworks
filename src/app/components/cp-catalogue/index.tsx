
import Link from "next/link";
import styles from "./cpCatalogue.module.scss";

interface Category {
    id: string;
    number: string;
    title: string;
    description: string;
}

const categories: Category[] = [
    {
        id: "stainless-steel-railings",
        number: "01",
        title: "Stainless Steel Railings",
        description:
            "Stainless-steel railing solutions for residential and commercial spaces.",
    },
    {
        id: "glass-railings",
        number: "02",
        title: "Glass Railings",
        description:
            "Glass railing solutions that bring openness and a clean architectural finish.",
    },
    {
        id: "sliding-gates",
        number: "03",
        title: "Sliding Gates",
        description:
            "Sliding gate solutions for residential and commercial entrances.",
    },
    {
        id: "automated-gates",
        number: "04",
        title: "Automated Gates",
        description:
            "Automated gate solutions for convenient and controlled access.",
    },
    {
        id: "glass-solutions",
        number: "05",
        title: "Window & Bathroom Glass",
        description:
            "Glass solutions for windows and bathrooms, designed for everyday spaces.",
    },
    {
        id: "jhula",
        number: "06",
        title: "Jhula",
        description:
            "Explore the company's jhula offerings for residential spaces.",
    },
];

interface CpCatalogueProps {
    selectedCategory?: string;
}

const CpCatalogue = ({
    selectedCategory,
}: CpCatalogueProps) => {
    const activeCategory = categories.find(
        (category) => category.id === selectedCategory
    );

    return (
        <main className={`container-fluid ${styles.catalogue}`}>
            <div className={`container ${styles.catalogueContainer}`}>

                <header className={styles.catalogueHeader}>
                    <div className={styles.eyebrow}>
                        <span />
                        MAJESTIC METALWORKS / CATALOGUE
                    </div>

                    <h1>
                        {activeCategory ? (
                            activeCategory.title
                        ) : (
                            <>
                                Explore our <span>Catalogue.</span>
                            </>
                        )}
                    </h1>

                    <p>
                        {activeCategory
                            ? activeCategory.description
                            : "Explore our collection of architectural metalwork, railings, gates and glass solutions."}
                    </p>
                </header>

                {/* Catalogue Category Navigation */}

                <nav
                    className={styles.categoryNavigation}
                    aria-label="Catalogue categories"
                >
                    <Link
                        href="/catalogue"
                        className={`${styles.categoryLink} ${!activeCategory ? styles.activeCategory : ""
                            }`}
                        aria-current={!activeCategory ? "page" : undefined}
                    >
                        All Categories
                    </Link>

                    {categories.map((category) => (
                        <Link
                            href={`/catalogue?category=${category.id}`}
                            key={category.id}
                            className={`${styles.categoryLink} ${activeCategory?.id === category.id
                                    ? styles.activeCategory
                                    : ""
                                }`}
                            aria-current={
                                activeCategory?.id === category.id
                                    ? "page"
                                    : undefined
                            }
                        >
                            {category.title}
                        </Link>
                    ))}
                </nav>

                {/* General Catalogue Overview */}

                {!activeCategory && (
                    <div className={styles.categoryGrid}>
                        {categories.map((category) => (
                            <Link
                                href={`/catalogue?category=${category.id}`}
                                className={styles.categoryCard}
                                key={category.id}
                            >
                                <span className={styles.categoryNumber}>
                                    {category.number}
                                </span>

                                <div className={styles.categoryDetails}>
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                </div>

                                <span
                                    className={styles.categoryArrow}
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Selected Category Gallery */}

                {activeCategory && (
                    <section
                        className={styles.selectedCategory}
                        aria-labelledby="selected-category-title"
                    >
                        <div className={styles.categoryIntro}>
                            <span>{activeCategory.number}</span>

                            <h2 id="selected-category-title">
                                {activeCategory.title} Collection
                            </h2>
                        </div>

                        <div
                            className={styles.galleryPlaceholder}
                            role="status"
                        >
                            <div className={styles.galleryIcon}>
                                <span />
                                <span />
                            </div>

                            <h3>Gallery coming soon</h3>

                            <p>
                                We&apos;re preparing the {activeCategory.title.toLowerCase()} collection.
                                Product images will be available soon.
                            </p>
                        </div>

                        <Link
                            href="/catalogue"
                            className={styles.backLink}
                        >
                            <span aria-hidden="true">←</span>
                            Back to all categories
                        </Link>
                    </section>
                )}

            </div>
        </main>
    );
};

export default CpCatalogue;
