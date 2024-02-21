import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import ImageUrlBuilder from "@sanity/image-url";

import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
});

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};

const imageBuilders = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return imageBuilders.image(source);
};
