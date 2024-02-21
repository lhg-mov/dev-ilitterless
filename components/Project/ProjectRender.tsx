import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

import { Image } from "@nextui-org/react";
import { getProjectHome } from "@/sanity/actions";
import { v4 as uuidv4 } from "uuid";

import Link from "next/link";

export const revalidate = 60;

const ProjectRender = async () => {
  const renderProject = await getProjectHome();
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        720: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      grabCursor={true}
      modules={[Autoplay]}
      className="slider__project select-none"
    >
      {renderProject?.map((render: any) => {
        const uid = uuidv4();
        return (
          <SwiperSlide key={uid}>
            <div className="card__project group relative h-[350px] w-full overflow-hidden rounded-2xl">
              <Image
                src={render.mainImage.asset.url}
                width={500}
                height={300}
                alt={render.title}
                className="rounded-2xl w-[500px] h-[150px] aspect-video group-hover:translate-y-1/2 group-hover:scale-[3] group-hover:w-full transition-transform duration-500 object-cover"
              />
              <div className="card__content absolute bottom-0 z-10  group-hover:p-2 p-0 transition-all duration-250 rounded-xl">
                <div className="dark:group-hover:bg-neutral-900/80 group-hover:bg-white/80 group-hover:backdrop-blur-xl group-hover:p-4 p-0 rounded-xl transition-all duration-250">
                  <div className="date__project_started mb-3">
                    <div className="text-default-500 dark:text-default-800 text-sm">{render.startProject}</div>
                  </div>
                  <div className="title__project">
                    <div className="group-hover:text-lg text-xl transition-all duration-250 font-bold line-clamp-2">{render.title}</div>
                  </div>
                  <div className="status__project my-4">
                    {render.status ? (
                      <div className="flex gap-2 items-center">
                        <div className="relative h-2 w-2">
                          <span className="bg-primary absolute h-2 w-2 p-1 rounded-full animate-pulse"></span>
                        </div>
                        <div>
                          <span>Active</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-center">
                        <div className="relative h-2 w-2">
                          <span className="bg-red-500 absolute h-2 w-2 p-1 rounded-full animate-pulse"></span>
                        </div>
                        <div>
                          <span>Not Active</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="action__button flex">
                    <Link className={`bg-primary text-white sm:text-md text-sm font-semibold w-full rounded-full flex gap-2 p-2 items-center justify-center`} href={{ pathname: `/projects/detail/${render?.slug}` }}>
                      Lihat Project{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectRender;
