import React from "react";

const IntroTitleClient = ({ children }: { children: React.ReactNode }) => {
  return <div className="intro__section__one flex-grow basis-2/5 sm:mt-0 mt-10">{children}</div>;
};

export default IntroTitleClient;
