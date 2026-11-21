
import { defineQuery } from "next-sanity";

// Five categories selected for the homepage.
export const FEATURED_CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category" &&
    displayStatus == "active" &&
    featuredOnHomepage == true &&
    defined(slug.current) &&
    defined(coverImage.asset)
  ]
  | order(homepageOrder asc, catalogueOrder asc, title asc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    coverImageAlt,
    homepageOrder,
    catalogueOrder
  }
`);

// Every published category for the catalogue overview.
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category" &&
    defined(slug.current)
  ]
  | order(catalogueOrder asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    displayStatus,
    catalogueOrder,
    coverImage,
    coverImageAlt
  }
`);

// One category and its complete image gallery.
export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "category" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    displayStatus,
    catalogueOrder,
    coverImage,
    coverImageAlt,
    gallery[] {
      _key,
      description,
      altText,
      image
    }
  }
`);
