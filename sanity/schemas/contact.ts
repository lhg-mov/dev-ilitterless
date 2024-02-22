import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This title is used for Contact Page.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "You can add short description or hastag.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
        name: "address",
        title: "Address",
        type: "string",
        description: "You can add address. This address is for Footer Section.",
        validation: (Rule) => [Rule.required()],
      }),
    defineField({
        name: "instagram",
        title: "Instagram Link",
        type: "string",
        description: "Provide a valid Instagram Link, started with HTTPS. For Contact Page and Footer Section.",
        validation: (Rule: any) => [
            Rule.required().error("Please provide a link."),
            Rule.custom((value: string) => {
              // Regular expression to check if the value is a valid URL or starts with "/"
              const urlRegex: RegExp = /^(https):\/\/[^ "]+$/;
              if (!urlRegex.test(value)) {
                return 'Please provide a valid URL.';
              }
              return true;
            }),
          ],
      }),
      defineField({
        name: "linkedin",
        title: "LinkedIn Link",
        type: "string",
        description: "Provide a valid LinkedIn Link, started with HTTPS. For Contact Page and Footer Section.",
        validation: (Rule: any) => [
            Rule.required().error("Please provide a link."),
            Rule.custom((value: string) => {
              // Regular expression to check if the value is a valid URL or starts with "/"
              const urlRegex: RegExp = /^(https):\/\/[^ "]+$/;
              if (!urlRegex.test(value)) {
                return 'Please provide a valid URL.';
              }
              return true;
            }),
          ],
      }),
      defineField({
        name: "facebook",
        title: "Facebook Link",
        type: "string",
        description: "Provide a valid Facebook Link, starting with HTTPS. If you don't have one, please fill in '/waiting'.  For Contact Page and Footer Section.",
        validation: (Rule: any) => [
            Rule.required().error("Please provide a link."),
            Rule.custom((value: string) => {
              // Regular expression to check if the value is a valid URL or starts with "/"
              const urlRegex: RegExp = /^(https):\/\/[^ "]+$/;
              if (!urlRegex.test(value) && !value.startsWith("/")) {
                return 'Please provide a valid URL.';
              }
              return true;
            }),
          ],
      }),
      defineField({
        name: "whatsapp",
        title: "WhatsApp Number",
        type: "string",
        description: "Provide a valid WhatsApp Number, starting with 62. No '+' and do not use '0' in the first number.  For Contact Page and Footer Section.",
        validation: (Rule: any) => [
            Rule.required().error("Please provide a link."),
            Rule.custom((value: string) => {
              if (!value.startsWith("62") && value.startsWith("0") && value.startsWith("+")) {
                return 'Please provide a valid WhatsApp Number as requested.';
              }
              return true;
            }),
          ],
      }),
      defineField({
        name: "email",
        title: "Active Email",
        type: "string",
        description: "Provide a valid Email. For Footer Section.",
        validation: (Rule: any) => [
            Rule.required().error("Please provide a link."),
            Rule.custom((value: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
                if (!emailRegex.test(value)) {
                    return 'Please provide a valid Email as requested.';
                }
            }),
          ],
      }),
  ],
});
