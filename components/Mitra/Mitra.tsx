"use client";

import { useEffect, useRef } from "react";

import style from "@/app/ilitterless.module.css";
import { v4 as uuidv4 } from "uuid";

import { Image, Button, Link } from "@nextui-org/react";
import ButtonUI from "../ui/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import MitraCafe from "./MitraCafe";
import MitraBrand from "./MitraBrand";

import { motion } from "framer-motion";

const Mitra = () => {
  return (
    <>
      <div className={style.partner}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
        >
          <div className="partner_brand__title sm:flex justify-between items-center w-full">
            <div>
              <div className="sm:text-5xl text-4xl font-extrabold text-start">
                <span className="text-primary">Mitra</span> Kami
              </div>
              <div className="text-default-500 sm:w-4/6 w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minima ipsam consequuntur.</div>
            </div>
            <div className="action__button sm:mt-0 mt-5">
              <ButtonUI text="Selengkapnya" link="/partner" type="accent" endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="project__title col-span-3"
        >
          <MitraBrand />
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
        >
          <MitraCafe/>
        </motion.div>
      </div>
    </>
  );
};

export default Mitra;
