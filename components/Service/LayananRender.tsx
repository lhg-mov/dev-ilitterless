import { getServiceHome } from "@/sanity/actions";
import React from "react";

import { motion } from "framer-motion";

import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export const revalidate = 60;

import { v4 as uuidv4 } from "uuid";

const LayananRender = async () => {
  const render = await getServiceHome();
  return (
    <div className="sm:flex grid grid-cols-1 items-center gap-8">
      {render?.map((data: any) => {
        const uid = uuidv4();
        return (
          <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 3 }} className="h-[380x] basis-3/12" key={uid}>
            <Card className="h-[380px] basis-3/12 transition-all duration-250 hover:scale-105 group service_card" shadow="none" radius="lg">
              <CardHeader className="absolute z-10 bottom-0 flex-col !items-start bg-gradient-to-t from-black group-hover:opacity-0 opacity-100 transition-opacity duration-250 !rounded-b-xl">
                <div className="p-3">
                  <p className="text-lg text-white/70 uppercase font-semibold">{data.secondaryTitle}</p>
                  <h4 className="text-white font-extrabold text-2xl">{data.title}</h4>
                </div>
              </CardHeader>
              <div className="absolute group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-20 bottom-0 p-3 sub_service__info">
                <div className="dark:bg-neutral-900/80 bg-white/80 backdrop-blur-xl dark:text-white p-5 w-full rounded-2xl">
                  <div className="sub_service__title font-bold mb-3 text-2xl">{data.title}</div>
                  <div className="sub_service__desc line-clamp-3">{data.shortDesc}</div>
                  <div className="sub_service__action mt-5">
                    <div className="action__button flex">
                      <Link className={`bg-primary align-middle text-white sm:text-md text-sm font-semibold w-full rounded-full flex gap-2 pt-2 pb-2.5 px-2 items-center justify-center`} href={{ pathname: `/services/${data?.slug}` }}>
                        Selengkapnya{" "}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Image removeWrapper alt="Card background" className="z-0 w-full h-full object-cover object-center" src={data.mainImage.asset.url} />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LayananRender;
