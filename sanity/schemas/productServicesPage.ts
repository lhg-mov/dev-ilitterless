import { defineField, defineType } from "sanity";

export default defineType({
  name: "servicePage",
  title: "Product and Service Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Home (as Main Title) & Service (as Secondary Title) Page.",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
