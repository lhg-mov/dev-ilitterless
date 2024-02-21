import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutTimeline",
  title: "iLitterless Timeline",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year / Month",
      type: "string",
      description: "You can add (Month, Year) or (Year only). Ex. January 2024 or 2023",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Head of the Timeline after Year / Month.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
