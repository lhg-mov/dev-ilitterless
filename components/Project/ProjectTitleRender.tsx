import React from "react";

import ButtonUI from "../ui/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {getProjectTitle} from "@/sanity/actions";

type ProjectTitle = {
  title: string;
  secondaryTitle: string;
}

const ProjectTitleRender = async () => {
  const render: ProjectTitle = await getProjectTitle();
  return (
<>
          <div className="sm:text-5xl text-4xl text-primary font-extrabold">{render.title}</div>
          <div className="text-default-500 mt-4">{render.secondaryTitle}</div>
          <div className="action__button mt-5">
            <ButtonUI text="Selengkapnya" endContent={<FontAwesomeIcon icon={faArrowRight} />} link="/projects" />
          </div>
          </>
  );
};

export default ProjectTitleRender;
