"use client";

import React from "react";
import IntroSlideClient from "./IntroSlideClient";
import IntroSlideRender from "./IntroSlideRender";

const IntroSlide = () => {
  return (
    <IntroSlideClient>
      <IntroSlideRender />
    </IntroSlideClient>
  );
};

export default IntroSlide;
