import { defineField, defineType } from "sanity";

export default defineType({
  name: "partnerPage",
  title: "Partner Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Home (as Main Title) & Partner (as Secondary Title) Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
        name: "secondaryTitle",
        title: "Secondary Title",
        type: "string",
        description: "This title is used for Home (as Secondary Title) & Partner (as Main Title) Page. Create unique title.",
        validation: (Rule) => [Rule.required()],
      })
  ],
});
