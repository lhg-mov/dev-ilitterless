import React from "react";
import IntroCampaignClient from "./IntroCampaignClient";
import IntroCampaignRender from "./IntroCampaignRender";

const IntroCampaign = () => {
  return (
    <IntroCampaignClient>
      <IntroCampaignRender />
    </IntroCampaignClient>
  );
};

export default IntroCampaign;
