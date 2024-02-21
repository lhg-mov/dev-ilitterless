import { defineField, defineType } from "sanity";

export default defineType({
  name: "pilihaneditor",
  title: "Pilihan Editor",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "editorPost",
      title: "Editor Choice List",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
