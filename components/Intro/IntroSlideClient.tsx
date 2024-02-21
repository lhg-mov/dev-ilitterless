import React from "react";

const IntroSlideClient = ({ children }: { children: React.ReactNode }) => {
  return <div className="intro__section__two flex-shrink sm:block flex justify-end sm:my-0 my-10">{children}</div>;
};

export default IntroSlideClient;
