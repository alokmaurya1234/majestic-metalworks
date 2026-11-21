
import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import { client } from "./client";
import {
  FEATURED_CATEGORIES_QUERY,
  ALL_CATEGORIES_QUERY,
  CATEGORY_BY_SLUG_QUERY,
} from "./queries";

export const CATALOGUE_CACHE_TAG = "sanity:catalogue";

// Fetch the five categories selected for the homepage.
export async function getFeaturedCategories() {
  "use cache";

  cacheLife("hours");
  cacheTag(CATALOGUE_CACHE_TAG);

  return client.fetch(FEATURED_CATEGORIES_QUERY);
}

// Fetch every published category for the catalogue page.
export async function getAllCategories() {
  "use cache";

  cacheLife("hours");
  cacheTag(CATALOGUE_CACHE_TAG);

  return client.fetch(ALL_CATEGORIES_QUERY);
}

// Fetch one category and its gallery using its URL slug.
export async function getCategoryBySlug(slug: string) {
  "use cache";

  cacheLife("hours");
  cacheTag(CATALOGUE_CACHE_TAG);

  if (!slug.trim()) {
    return null;
  }

  return client.fetch(CATEGORY_BY_SLUG_QUERY, { slug });
}
