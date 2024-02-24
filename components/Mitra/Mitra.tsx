"use client"

import React from "react";

import style from "@/app/ilitterless.module.css";

import MitraCafe from "./MitraCafe";
import MitraBrand from "./MitraBrand";
import MitraTitle from "./MitraTitle";

const Mitra = () => {
  return (
    <>
      <div className={style.partner}>
        <MitraTitle/>
      </div>
      <div>
          <MitraBrand />
          <MitraCafe/>
      </div>
    </>
  );
};

export default Mitra;
