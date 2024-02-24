import React from "react";

import style from "@/app/ilitterless.module.css";
import Navigation from "@/components/Navigation/Navigation";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

import { Image } from "@nextui-org/react";
import { getProject, getProjectTitle } from "@/sanity/actions";
import { v4 as uuidv4 } from "uuid";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ProjectTitle = {
  title: string;
  secondaryTitle: string;
}

const ProjectsPage = async () => {
  const renderProject = await getProject();
  const renderTitle: ProjectTitle = await getProjectTitle();
  return (
    <>
      <Navigation />
      <div className={style.projectpage}>
        <div className="project_page__title">
          <div className="text-xl font-bold text-default-500 relative w-36 flex items-center gap-2">
            <div className="border-t-2 border-default-500 flex-grow"></div>
            <div className="flex-shrink">{renderTitle.title}</div>
          </div>
          <div className="project_page__description my-7">
            <div className="sm:text-5xl text-3xl font-extrabold text-primary w-full">{renderTitle.secondaryTitle}</div>
          </div>
        </div>
        <div className="project_page__content py-16 grid xl:grid-cols-2 grid-cols-1 gap-10">
          {renderProject.map((render: any) => {
            const uid = uuidv4();
            return (
              <Link href={{ pathname: `/projects/detail/${render.slug}` }} className="project__item" key={uid}>
                <div className="grid sm:grid-cols-3 grid-cols-1 items-center sm:gap-x-8 space-y-4">
                  <div className="project__item__image col-span-1">
                    <Image src={render.mainImage.asset.url} alt={render.title} width={1000} height={1000} radius="lg" className={`w-full h-full aspect-square object-cover object-center ${render.status ? "saturate-100" : "saturate-0"}`} />
                  </div>
                  <div className="project__item__detail col-span-2">
                    <div className="project__item__startproject">
                      <div className="text-default-500 dark:text-default-800 text-sm">{render.startProject}</div>
                    </div>
                    <div className="project_item__title mt-3">
                      <div className="text-2xl line-clamp-2 font-bold">{render.title}</div>
                    </div>

                    <div className="project__item__status mt-3">
                      {render.status ? (
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
                    <div className="project__item__link">
                      <div className={`flex items-center gap-2 mt-4 group pb-2 ${render.status ? "text-primary" : "text-default-500"}`}>
                        <div key={uid}>
                          <div className={`inline-flex items-center ${render.status ? "border-b-1 border-b-primary" : "border-b-1 border-b-red-500"} gap-2 font-medium font-semibold`}>
                            Lihat Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default ProjectsPage;
