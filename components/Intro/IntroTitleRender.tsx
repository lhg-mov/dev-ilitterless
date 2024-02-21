import React from "react";
import { getIntro, getIntroCollab } from "@/sanity/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonUI from "../ui/ButtonUI";

import { Image } from "@nextui-org/react";

type Title = {
  tagline: string;
  hastag: string;
  buttonText: string;
  buttonLink: string;
};

type Collab = {
  status: boolean;
  collabLogoLight: {
    asset: {
      url: string;
    };
  };
  collabLogoDark: {
    asset: {
      url: string;
    };
  };
};

const IntroTitleRender = async () => {
  const renderTitle: Title = await getIntro();
  const renderCollab: Collab = await getIntroCollab();
  return (
    <div className="intro_title__area">
      <div className="sm:text-5xl text-4xl font-extrabold sm:text-nowrap uppercase">
        {renderTitle.tagline.slice(0, 6)} <span className="text-primary">{renderTitle.tagline.slice(6, 9)}</span>
        {renderTitle.tagline.slice(9, 11)} <br /> <span className="text-primary">{renderTitle.tagline.slice(11, 14)}</span>
        {renderTitle.tagline.slice(14, 22)}
      </div>

      <div className="hastag text-xl mt-4 text-default-500 mb-7">{renderTitle.hastag}</div>
      <ButtonUI endContent={<FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />} link={renderTitle.buttonLink} text={renderTitle.buttonText} />

      <div className="ilitterless__collab mt-10">
        {renderCollab.status ? (
          <div className="hidden">No Collaboration Now!</div>
        ) : (
          <div className="flex gap-4 items-center">
            <div className="dark:hidden block">
              <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="object-contain pointer-events-none sm:w-[150px] sm:h-[60px] w-[120px] h-[40px]" draggable="false" />
            </div>
            <div className="dark:block hidden">
              <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="object-contain pointer-events-none sm:w-[150px] sm:h-[60px] w-[120px] h-[40px]" draggable="false" />
            </div>

            <FontAwesomeIcon icon={faXmark} className="dark:-ml-0 w-5 h-5 text-primary" />

            <div className="dark:hidden block">
              <Image src={renderCollab.collabLogoLight.asset.url} alt="Collaboration Logo" width={150} height={60} className="object-contain pointer-events-none sm:w-[150px] sm:h-[60px] w-[120px] h-[40px]" draggable="false" />
            </div>
            <div className="dark:block hidden">
              <Image src={renderCollab.collabLogoDark.asset.url} alt="Collaboration Logo" width={150} height={60} className="object-contain pointer-events-none sm:w-[150px] sm:h-[60px] w-[120px] h-[40px]" draggable="false" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroTitleRender;
