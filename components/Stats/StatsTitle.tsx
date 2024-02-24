import React from "react";
import StatsTitleRender from "./StatsTitleRender";
import StatsTitleClient from "./StatsTitleClient";

const StatsTitle = () => {
  return (
    <StatsTitleClient>
        <StatsTitleRender/>
    </StatsTitleClient>
  );
};

export default StatsTitle;
