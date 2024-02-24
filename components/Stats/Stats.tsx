"use client";

import React from "react";
import style from "@/app/ilitterless.module.css";

import { motion } from "framer-motion";
import StatsTitle from "./StatsTitle";
import StatsData from "./StatsData";

type StatsTitle = {
  title: string;
  secondaryTitle: string;
  link: string;
}

const Stats = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <div className={`${style.stats}`}>
        <div className="bg-primary text-white rounded-3xl p-8 grid xl:grid-cols-6 md:grid-cols-1 grid-cols-1 items-center gap-16 ilitterless_stats">
          <StatsTitle/>
          <StatsData/>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
