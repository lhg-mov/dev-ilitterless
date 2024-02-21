import { createHash } from "crypto";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "productServices",
  title: "Product and Services",
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
      name: "secondaryTitle",
      title: "Secondary Title",
      description: "(Optional)",
      type: "string",
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      description: "This will be show on home page. (Optional)",
      type: "string",
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
