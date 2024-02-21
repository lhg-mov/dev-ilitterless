import React from "react";

import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText";
import { Chip, Image } from "@nextui-org/react";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { Post, Product } from "@/sanity/types";

import Link from "next/link";

interface Props {
  id: string;
  title: string;
  secondaryTitle: string;
  slug: string;
  image: string;
  body: [];
}

interface Project {
  projectData: any;
}

export const revalidate = 60;

const ProjectsContent = ({ projectData }: Project) => {
  return (
    <>
      <div className="project__image flex justify-center bg-fixed w-full h-[320px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${projectData?.mainImage.asset.url}')` }}>
        {/* <Image src={`${projectData?.mainImage.asset.url}`} width={1920} height={300} alt={projectData?.title} className="w-screen h-[320px] object-cover object-center" radius="none" /> */}
      </div>
      <div className={style.projectpage} key={projectData?._id}>
        <div className="project__head sm:w-3/5 w-full">
          <Link href="/projects">
            <div className="project__content">
              <div className="text-xl font-extrabold text-primary relative w-36 flex items-center gap-2">
                <div className="border-t-2 border-primary flex-grow"></div>
                <div className="flex-shrink">Project</div>
              </div>
            </div>
          </Link>

          <div className="project__title py-5">
            <div className="mb-3 text-default-500">{projectData.startProject}</div>
            <div className="sm:text-5xl text-4xl font-extrabold">{projectData?.title}</div>
            <div className="project__item__status mt-4">
              {projectData.status ? (
                <div className="flex gap-2 items-center">
                  <div className="relative h-2 w-2">
                    <span className="bg-primary absolute h-2 w-2 p-1 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <span>Active</span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <div className="relative h-2 w-2">
                    <span className="bg-red-500 absolute h-2 w-2 p-1 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <span>Not Active</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sm:max-w-screen-lg py-16 text-default-700">
          <PortableText value={projectData?.body} components={RichText} />
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
