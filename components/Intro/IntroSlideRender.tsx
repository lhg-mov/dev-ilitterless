import React, { useRef, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ButtonUI from "../ui/ButtonUI";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@nextui-org/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { faArrowRightLong, faArrowLeftLong, faXmark } from "@fortawesome/free-solid-svg-icons";

// import required modules
import { EffectCards, Navigation, Autoplay } from "swiper/modules";

import { getIntro, getIntroCampaign, getIntroCollab, getIntroSlide } from "@/sanity/actions";

import { v4 as uuidv4 } from "uuid";

type Slide = {
  image: {
    asset: {
      url: string;
    };
  };
};

const IntroSlideRender = async () => {
  const slide: Slide[] = await getIntroSlide();
  return (
    <Swiper
      effect={"cards"}
      loop={true}
      grabCursor={true}
      modules={[EffectCards, Navigation, Autoplay]}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next-cst",
        prevEl: ".swiper-button-prev-cst",
      }}
      initialSlide={1}
      className="intro__slide sm:w-[300px] sm:h-[420px] w-[250px] h-[380px] rounded-xl bg-transparent sm:-rotate-6 rotate-0 sm:mb-0 mb-8 overflow-hidden"
    >
      {slide?.map((data: Slide) => {
        const uid = uuidv4();
        return (
          <SwiperSlide className="rounded-xl" key={uid}>
            <Image src={data.image.asset.url} alt="Intro image" width={320} height={420} className="w-[320px] h-[420px] object-cover object-center" priority={true} />
          </SwiperSlide>
        );
      })}

      <div className="sm:rotate-6 rotate-0 flex w-full sm:justify-end justify-center sm:mt-2 mt-5 gap-2">
        <Button
          isIconOnly
          radius="full"
          className="swiper-button-prev-cst cursor-pointer transform-gpu data-[hover=true]:scale-105 ring-2 ring-primary ring-inset text-primary data-[hover=true]:bg-primary data-[hover=true]:text-white transition-all duration-250 bg-transparent"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className=" px-[0.945rem] py-[0.7rem] rounded-full text-xl" />
        </Button>

        <Button
          isIconOnly
          radius="full"
          className="swiper-button-next-cst cursor-pointer transform-gpu data-[hover=true]:scale-105 ring-2 ring-primary ring-inset text-primary data-[hover=true]:bg-primary data-[hover=true]:text-white transition-all duration-250 bg-transparent"
        >
          <FontAwesomeIcon icon={faArrowRightLong} className=" px-[0.945rem] py-[0.7rem] rounded-full text-xl" />
        </Button>
      </div>
    </Swiper>
  );
};

export default IntroSlideRender;
