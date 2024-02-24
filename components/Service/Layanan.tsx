"use client"

import React from "react";

import style from "@/app/ilitterless.module.css";


import ServiceTitle from "./ServiceTitle";
import LayananData from "./LayananData";

const Layanan = () => {
  return (
    <div className={style.service}>
      <ServiceTitle/>
      <LayananData/>
    </div>
  );
};

export default Layanan;
