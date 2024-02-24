import React from "react";

import style from "@/app/ilitterless.module.css";
import { Link, Image, Card, CardHeader, link, Button } from "@nextui-org/react";

import { motion, stagger } from "framer-motion";

const Layanan = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.service}>
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
        <div className="service__title">
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold sm:text-5xl text-4xl service__title_child">
              <span className="text-primary">Produk</span> <br /> <span>dan</span> <span className="text-primary">Layanan</span>
            </h2>
            <div className="arrow__icon sm:block hidden">
              <div className="relative w-[100px] h-[100px] flex items-center">
                <div>
                  <Image src="/iLitterless.svg" width={100} height={100} className="animate-spin-slow mix-blend-difference" />
                </div>
                <div className="absolute -left-10">
                  <div className="bg-primary p-12 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -100 },
        }}
        className="service__body mt-12"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Layanan;
