
import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "object",

  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Image Description",
      description: "Optional. Maximum 20 words.",
      type: "text",
      rows: 2,
      validation: (Rule) =>
        Rule.custom((value) => {
          if (typeof value !== "string" || !value.trim()) {
            return true;
          }

          const wordCount = value.trim().split(/\s+/).length;

          return (
            wordCount <= 20 ||
            "Image description must not exceed 20 words."
          );
        }),
    }),

    defineField({
      name: "altText",
      title: "Alternative Text",
      description: "Optional. Briefly describe the image for accessibility.",
      type: "string",
      validation: (Rule) => Rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: "description",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Gallery image",
        media,
      };
    },
  },
});
