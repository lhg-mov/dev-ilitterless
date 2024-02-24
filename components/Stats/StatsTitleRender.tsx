import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faArrowUpRightFromSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Link } from "@nextui-org/react";

import { getStatsTitle } from "@/sanity/actions";

type StatsTitle = {
  title: string;
  secondaryTitle: string;
  link: string;
}

const StatsTitleRender = async () => {
  const render: StatsTitle = await getStatsTitle();
  return (
            <div>
              <div className="text-3xl text-white font-extrabold flex items-center gap-2">
                {render.title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              <div className="text-white/35 text-nowrap">{render.secondaryTitle}</div>
              <div className="mt-2">
                <Link href={render.link} className="text-white flex gap-2">
                  Selengkapnya <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                </Link>
              </div>
            </div>  
  );
};

export default StatsTitleRender;
