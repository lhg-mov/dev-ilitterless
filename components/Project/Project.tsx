"use client";

import React from "react";

import style from "@/app/ilitterless.module.css";

import ProjectTitle from "./ProjectTitle";
import ProjectData from "./ProjectData";

const Project = () => {
  return (
    <div className={style.project}>
      <div className="xl:grid xl:grid-cols-10 md:grid md:grid-cols-2 gap-10 items-center">
        <ProjectTitle/>
        <ProjectData/>
      </div>
    </div>
  );
};

export default Project;
