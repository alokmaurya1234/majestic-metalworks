
import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Catalogue Category",
  type: "document",

  groups: [
    { name: "content", title: "Category Details", default: true },
    { name: "homepage", title: "Homepage Settings" },
    { name: "gallery", title: "Image Gallery" },
  ],

  fields: [
    // Category details
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(80),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Category Description",
      description: "Maximum 20 words.",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (typeof value !== "string") return true;

          const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

          return (
            wordCount <= 20 ||
            "Category description must not exceed 20 words."
          );
        }),
    }),

    defineField({
      name: "displayStatus",
      title: "Display Status",
      description:
        "Coming Soon categories appear as teaser cards without a gallery.",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Available", value: "active" },
          { title: "Coming Soon", value: "comingSoon" },
        ],
        layout: "radio",
      },
      initialValue: "active",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Category Cover Image",
      description: "Image used on homepage and catalogue category cards.",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.displayStatus === "comingSoon",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = context.document as
            | { displayStatus?: string }
            | undefined;

          if (
            document?.displayStatus !== "comingSoon" &&
            !value
          ) {
            return "A cover image is required for an available category.";
          }

          return true;
        }),
    }),

    defineField({
      name: "coverImageAlt",
      title: "Cover Image Alternative Text",
      type: "string",
      group: "content",
      hidden: ({ parent }) => parent?.displayStatus === "comingSoon",
      validation: (Rule) => Rule.max(160),
    }),

    // Homepage settings
    defineField({
      name: "featuredOnHomepage",
      title: "Feature on Homepage",
      description: "Only five featured categories will appear on the homepage.",
      type: "boolean",
      group: "homepage",
      initialValue: false,
    }),

    defineField({
      name: "homepageOrder",
      title: "Homepage Display Order",
      description: "Choose a position from 1 to 5.",
      type: "number",
      group: "homepage",
      hidden: ({ parent }) => !parent?.featuredOnHomepage,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = context.document as
            | { featuredOnHomepage?: boolean }
            | undefined;

          if (!document?.featuredOnHomepage) return true;

          if (
            typeof value !== "number" ||
            !Number.isInteger(value) ||
            value < 1 ||
            value > 5
          ) {
            return "Choose a whole-number homepage position from 1 to 5.";
          }

          return true;
        }),
    }),

    defineField({
      name: "catalogueOrder",
      title: "Catalogue Display Order",
      description: "Controls the category's position in the full catalogue.",
      type: "number",
      group: "content",
      initialValue: 100,
      validation: (Rule) => Rule.required().integer().min(0),
    }),

    // Gallery settings
    defineField({
      name: "gallery",
      title: "Category Gallery",
      description:
        "Upload images and drag them to change their display order. There is no fixed image limit.",
      type: "array",
      group: "gallery",
      of: [
        defineArrayMember({
          type: "galleryImage",
        }),
      ],
      hidden: ({ parent }) => parent?.displayStatus === "comingSoon",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = context.document as
            | { displayStatus?: string }
            | undefined;

          if (
            document?.displayStatus === "active" &&
            (!Array.isArray(value) || value.length === 0)
          ) {
            return "Add at least one gallery image before publishing an available category.";
          }

          return true;
        }),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      status: "displayStatus",
    },
    prepare({ title, media, status }) {
      return {
        title: title || "Untitled category",
        media,
        subtitle:
          status === "comingSoon" ? "Coming Soon" : "Available",
      };
    },
  },
});
