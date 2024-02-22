import { defineField, defineType } from "sanity";

export default defineType({
  name: "fastButton",
  title: "Fast Button",
  type: "document",
  fields: [
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Quick action button in Navigation that can redirect to another link.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "Please start with http and https for external linking or '/' for local page.",
      validation: (Rule: any) => [
        Rule.required().error("Please provide a link."),
        Rule.custom((value: string) => {
          // Regular expression to check if the value is a valid URL or starts with "/"
          const urlRegex: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;
          if (!urlRegex.test(value) && !value.startsWith("/")) {
            return 'Please provide a valid URL for the button or start with "/" if it is a relative path or local page.';
          }
          return true;
        }),
      ],
    }),
  ],
});
