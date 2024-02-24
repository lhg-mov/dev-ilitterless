import React from "react";
import style from "@/app/ilitterless.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowUpRightFromSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Link } from "@nextui-org/react";

import { motion } from "framer-motion";

const Stats = ({ children }: { children: React.ReactNode }) => {
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
          <div className="ilitterless_stats__title flex justify-start col-span-1">
            <div>
              <div className="text-3xl text-white font-extrabold flex items-center gap-2">
                Statistik{" "}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              <div className="text-white/35 text-nowrap">iLiiterless dalam Data</div>
              <div className="mt-2">
                <Link href="/stats" className="text-white flex gap-2">
                  See More <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
          <div className="ilitterless_stats__content col-span-5">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
