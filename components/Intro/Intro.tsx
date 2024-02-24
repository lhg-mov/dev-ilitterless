"use client";

import React from "react";

import IntroClient from "./IntroClient";
import IntroRender from "./IntroRender";

const Intro = () => {
  return (
    <IntroClient>
        <IntroRender/>
    </IntroClient>
  );
};

export default Intro;
