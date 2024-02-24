import React from "react";

import style from "@/app/ilitterless.module.css";

import { motion } from "framer-motion";

const IntroClient = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={style.intro}>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }} viewport={{ once: true }}>
      {children}
      </motion.div>
    </div>
  );
};

export default IntroClient;
