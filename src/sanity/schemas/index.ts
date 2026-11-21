
import type { SchemaTypeDefinition } from "sanity";

import { categoryType } from "./category";
import { galleryImageType } from "./galleryImage";

export const schemaTypes: SchemaTypeDefinition[] = [
  categoryType,
  galleryImageType,
];
