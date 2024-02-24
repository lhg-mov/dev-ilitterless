import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
// import pilihanEditor from "./schemas/pilihanEditor";
import intro from "./schemas/intro";
import statistik from "./schemas/statistik";
import productServices from "./schemas/productServices";
import projects from "./schemas/projects";
import partnerBrand from "./schemas/partnerBrand";
import partnerCafe from "./schemas/partnerCafe";
import portfolioLink from "./schemas/portfolioLink";
import about from "./schemas/about";
import aboutTimeline from "./schemas/aboutTimeline";
import introImage from "./schemas/introImage";
import fastButton from "./schemas/fastButton";
import contact from "./schemas/contact";
import projectPage from "./schemas/projectPage";
import partnerPage from "./schemas/partnerPage";
import blogPage from "./schemas/blogPage";
import servicePage from "./schemas/productServicesPage"
import statsPage from "./schemas/statsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [fastButton, portfolioLink, intro, introImage, statsPage, statistik, about, aboutTimeline, servicePage, productServices, projectPage, projects, partnerPage, partnerBrand, partnerCafe, blogPage, post, author, category, blockContent, contact],
};
