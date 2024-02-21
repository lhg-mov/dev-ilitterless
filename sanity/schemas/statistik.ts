import { defineField, defineType } from "sanity";

export default defineType({
  name: "statistik",
  title: "Statistic",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Max: 4 Words.",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "secondaryTitle",
      title: "Secondary Title",
      type: "string",
      description: "Ex. Kilogram (KG), Titik, Ton, etc.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "data",
      title: "Number Data",
      type: "string",
      description: "Ex. 135000, 12345, 87, etc. Please only use numbers!",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
