import React from "react";
import StatsClient from "./StatsClient";
import StatsRender from "./StatsRender";

const StatsData = () => {
  return (
    <StatsClient>
        <StatsRender/>
    </StatsClient>
  );
};

export default StatsData;