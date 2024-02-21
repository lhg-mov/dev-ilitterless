import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import ProjectsContentRender from "@/components/Project/ProjectsContentRender";
import ServicesContentRender from "@/components/Service/ServicesContentRender";
import { client } from "@/lib/sanity.client";
import { getProjectContent } from "@/sanity/actions";
import { groq } from "next-sanity";
import React from "react";

interface GetSlug {
  slug: string;
}

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

const Projects = async ({ params }: Props) => {
  const slug = params.slug;
  const projectData = await getProjectContent({ slug });
  return (
    <>
      <Navigation />
      <ProjectsContentRender projectData={projectData} />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Projects;
