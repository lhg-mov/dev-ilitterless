import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import pilihanEditor from "./schemas/pilihanEditor";
import intro from "./schemas/intro";
import statistik from "./schemas/statistik";
// import navigation from "./schemas/navigation";
import productServices from "./schemas/productServices";
import projects from "./schemas/projects";
import partnerBrand from "./schemas/partnerBrand";
import partnerCafe from "./schemas/partnerCafe";
// import portfolioLink from "./schemas/portfolioLink";
import about from "./schemas/about";
import aboutTimeline from "./schemas/aboutTimeline";
import introImage from "./schemas/introImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [intro, introImage, statistik, about, aboutTimeline, productServices, projects, partnerBrand, partnerCafe, post, author, category, blockContent, pilihanEditor],
};
