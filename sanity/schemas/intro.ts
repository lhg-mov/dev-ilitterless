import { defineField, defineType } from "sanity";

export default defineType({
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "For custom text color you can contact developer! is FREE.",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "hastag",
      title: "Hastag or Description",
      type: "string",
      description: "Apart from hashtags (Don't forget '#' sign!), you can also provide a brief/ short explanation here.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Quick action button that can redirect to another link.",
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
    defineField({
      name: "collabStatus",
      title: "Collaboration",
      type: "boolean",
      description: "If there is collaboration please turn it on.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "collabLogoLight",
      title: "Collaboration Logo for Light mode",
      description: "If you turn on the Collaboration please upload the image. We Recommended size Width = 160px x Height = 50px. Please choose dark color or black logo without white color.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "collabLogoDark",
      title: "Collaboration Logo for Dark mode",
      description: "If you turn on the Collaboration please upload the image. We Recommended size Width = 160px x Height = 50px. Please choose light color or white logo without black color.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "campaignTitle",
      title: "Campaign Title",
      type: "string",
      description: "Title for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldIconOne",
      title: "Campaign Field Icon One",
      description: "Sub-Title for the ongoing campaign. We Recommended size Width = 40px x Height = 40px.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldTitleOne",
      title: "Campaign Field Title One",
      type: "string",
      description: "Sub-Title for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldDescOne",
      title: "Campaign Field Description One",
      type: "string",
      description: "Sub-Title Description for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: "campaignFieldIconTwo",
      title: "Campaign Field Icon Two",
      description: "Sub-Title for the ongoing campaign. We Recommended size Width = 40px x Height = 40px.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldTitleTwo",
      title: "Campaign Field Title Two",
      type: "string",
      description: "Sub-Title for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldDescTwo",
      title: "Campaign Field Description Two",
      type: "string",
      description: "Sub-Title Description for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),

    defineField({
      name: "campaignFieldIconThree",
      title: "Campaign Field Icon Three",
      description: "Sub-Title for the ongoing campaign. We Recommended size Width = 40px x Height = 40px.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldTitleThree",
      title: "Campaign Field Title Three",
      type: "string",
      description: "Sub-Title for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "campaignFieldDescThree",
      title: "Campaign Field Description Three",
      type: "string",
      description: "Sub-Title Description for the ongoing campaign.",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
