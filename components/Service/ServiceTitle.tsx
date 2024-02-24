import React from "react";

import ServiceTitleRender from "./ServiceTitleRender";
import ServiceTitleClient from "./ServiceTitleClient";

const ServiceTitle = () => {
  return (
      <ServiceTitleClient>
        <ServiceTitleRender/>
      </ServiceTitleClient>
  );
};

export default ServiceTitle;
