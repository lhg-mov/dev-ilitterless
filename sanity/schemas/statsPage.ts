import { defineField, defineType } from "sanity";

export default defineType({
  name: "statsPage",
  title: "Stats Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Home Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
        name: "secondaryTitle",
        title: "Secondary Title",
        type: "string",
        description: "This title is used for Home Page. Create unique title.",
        validation: (Rule) => [Rule.required()],
      }),
      defineField({
        name: "link",
        title: "Link",
        type: "string",
        description: "Please start with http and https for external linking or '/' for local page.",
        validation: (Rule: any) => [
          Rule.required().error("Please provide a link."),
          Rule.custom((value: string) => {
            // Regular expression to check if the value is a valid URL or starts with "/"
            const urlRegex: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;
            if (!urlRegex.test(value) && !value.startsWith("/")) {
              return 'Please provide a valid URL for the link or start with "/" if it is a relative path or local page.';
            }
            return true;
          }),
        ],
      }),
  ],
});
