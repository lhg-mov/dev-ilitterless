import { defineField, defineType } from "sanity";

export default defineType({
  name: "partnerCafe",
  title: "Cafe Partner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "logoImage",
      title: "Logo image",
      description: "Add a logo image for the partner section.",
      type: "image",
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
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Please start with http and https for external linking or '/' for local page. You can add like website or instagram account.",
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
