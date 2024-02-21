import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for About Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "secondaryTitle",
      title: "Secondary Title",
      type: "string",
      description: "You can add short description or hastag.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: (Rule) => [Rule.required()],
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "bodyOne",
      title: "Body : Section - 1",
      description: "For better user experience, please add Max. 60 Words",
      type: "blockContent",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "bodyTwo",
      title: "Body : Section - 2",
      description: "For better user experience, please add Max. 100 Words",
      type: "blockContent",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      description: "Sort from oldest to newest.",
      of: [{ type: "reference", to: { type: "aboutTimeline" } }],
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "soonTitle",
      title: "Coming Soon Title",
      type: "string",
      description: "This title coming soon timeline step for About Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "soonSecondaryTitle",
      title: "Coming Soon Secondary Title",
      type: "string",
      description: "This title is for replace year/ month field in coming soon.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "soonMessage",
      title: "Coming Soon Message",
      type: "string",
      description: "This message will be displayed for user in timeline step for About Page.",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
