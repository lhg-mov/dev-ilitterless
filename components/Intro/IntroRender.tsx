import React from "react";

import IntroTitle from "./IntroTitle";
import IntroSlide from "./IntroSlide";
import IntroCampaign from "./IntroCampaign";

const IntroRender = () => {
  return (
        <div className="gap-5 sm:flex items-center justify-center">
          <IntroTitle />
          <IntroSlide />
          <IntroCampaign />
        </div>
  );
};

export default IntroRender;
