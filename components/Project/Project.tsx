import React from "react";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.project}>
      <div className="xl:grid xl:grid-cols-10 md:grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="project__title sm:col-span-3 col-span-1"
        >
          <div className="sm:text-5xl text-4xl text-primary font-extrabold">Project</div>
          <div className="text-default-500 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, officia.</div>
          <div className="action__button mt-5">
            <ButtonUI text="Selengkapnya" endContent={<FontAwesomeIcon icon={faArrowRight} />} link="/project" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="xl:col-span-7 md:col-span-2 col-span-1 sm:mt-0 mt-5 project__content"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
