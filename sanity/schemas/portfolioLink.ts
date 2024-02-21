import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolioLink",
  title: "Portofolio Link",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title for Dropdown item in Navigation Portofolio Section. Keep it short!",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Short Description for Dropdown item in Navigation Portofolio Section. Keep it short!",
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
            return 'Please provide a valid URL for the Link or start with "/" if it is a relative path or local page.';
          }
          return true;
        }),
      ],
    }),
  ],
});
