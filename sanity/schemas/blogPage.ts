import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Home & Blog Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
        name: "secondaryTitle",
        title: "Secondary Title",
        type: "string",
        description: "This title is used for Home & Blog Page. Create unique title.",
        validation: (Rule) => [Rule.required()],
      })
  ],
});
