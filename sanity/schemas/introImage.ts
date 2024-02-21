import { defineField, defineType } from "sanity";

export default defineType({
  name: "introImage",
  title: "Intro Image",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: "image",
      title: "Intro Image",
      description: "We Recommended size Width = 320px x Height = 420px, but if you upload upper of this size the image will be crop on center. Please provide at least 2 images and max. 3 images. Upload under 3 MB file size.",
      validation: (Rule) => [Rule.required()],
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
