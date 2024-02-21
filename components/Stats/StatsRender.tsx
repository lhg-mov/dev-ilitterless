import React from "react";
import style from "@/app/ilitterless.module.css";

import { getStats } from "@/sanity/actions";

import CountUp from "react-countup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

const StatsRender = async () => {
  const render = await getStats();
  return (
    <div className="sm:flex sm:flex-wrap justify-start grid grid-cols-1 gap-10">
      {render?.map((count: any) => {
        const uid = uuidv4();
        return (
          <div className="stats_count" key={uid}>
            <div className="mb-1">
              <div className="flex gap-2 items-center justify-start">
                <CountUp end={count.data} enableScrollSpy className="font-extrabold text-2xl" />
                <FontAwesomeIcon icon={faPlus} className="w-5 h-5 font-extrabold" />
              </div>
              <p className="ilitterless_stats__desc text-white/35 text-sm">{count.secondaryTitle}</p>
            </div>
            <div className="stats_count__title text-white font-medium">{count.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsRender;
