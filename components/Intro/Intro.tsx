"use client";

import React from "react";

import style from "@/app/ilitterless.module.css";
import IntroTitle from "./IntroTitle";
import IntroSlide from "./IntroSlide";
import IntroCampaign from "./IntroCampaign";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={style.intro}>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }} viewport={{ once: true }}>
        <div className="gap-16 flex xl:flex-row xl:flex-nowrap md:flex md:flex-wrap flex-col items-center">
          <IntroTitle />
          {/* <IntroSlide /> */}
          <IntroCampaign />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
