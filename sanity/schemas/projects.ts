import { defineField, defineType } from "sanity";
import sha256 from "crypto-js/sha256";

import { createHash } from "crypto";

export default defineType({
  name: "projects",
  title: "Projects List",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => [Rule.required()],
      options: {
        source: (document: any) => {
          // Mengambil title dan _id dari dokumen
          const { title, _id } = document;
          const titlePrefix = title.replace(/[^\w\s]/g, "");
          // Mengambil karakter pertama dari _id
          const idPrefix = _id.replace(/[^\w\s]/g, "").replace("drafts", "");

          // Membuat fungsi untuk mengacak string
          const shuffleString = (input: any) => {
            const array = input.split("");
            // Menghitung hash SHA256 dari title
            const hash = createHash("sha256").update(array).digest("hex");

            // Mengambil 8 karakter pertama dari hash sebagai slug
            const slug = hash.substring(0, 5);

            return slug;
          };

          // Mengacak idPrefix hingga 100 kali
          let shuffledIdPrefix = idPrefix;
          for (let i = 0; i < 999; i++) {
            shuffledIdPrefix = shuffleString(shuffledIdPrefix);
          }
          // Menggabungkan cleanedTitle dan idPrefix dengan tanda '-'
          return `${titlePrefix}-${shuffledIdPrefix}`;
        },
        maxLength: 96,
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    }),
    defineField({
      name: "startProject",
      title: "Project Start",
      description: "Use this format 'Month' | 'Year. Ex. January | 2024",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "status",
      title: "Project Status",
      description: "Set the switch to On if the project is Active and turn in Off if the project is Not Active",
      type: "boolean",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      description: "Add a cover image for the main page. Recomended Size 280px x 380px, Max. 2MB.",
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
      name: "body",
      title: "Content",
      type: "blockContent",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
