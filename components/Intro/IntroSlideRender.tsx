import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import ButtonUI from "../ui/ButtonUI";

import Image from "next/image";

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
  const slide: Slide = await getIntroSlide();
  return (
    
    <Image src={slide.image.asset.url} alt="Intro image" width={280} height={560} className="w-[280px] h-[560px] object-contain object-center drop-shadow-xl animate-updown z-10 overflow-hidden" priority={true} />
    
  );
};

export default IntroSlideRender;
