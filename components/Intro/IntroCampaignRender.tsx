import React from "react";

import Image from "next/image";
import { getIntroCampaign } from "@/sanity/actions";

type Campaign = {
  campaignTitle: string;
  campaignFieldIconOne: {
    asset: {
      url: string;
    };
  };
  campaignFieldTitleOne: string;
  campaignFieldDescOne: string;

  campaignFieldIconTwo: {
    asset: {
      url: string;
    };
  };
  campaignFieldTitleTwo: string;
  campaignFieldDescTwo: string;

  campaignFieldIconThree: {
    asset: {
      url: string;
    };
  };
  campaignFieldTitleThree: string;
  campaignFieldDescThree: string;
};

const IntroCampaignRender = async () => {
  const campaign: Campaign = await getIntroCampaign();
  return (
    <div className="intro_campaign">
      <div className="text-3xl font-extrabold mb-8 underline underline-offset-2 decoration-primary">{campaign.campaignTitle}</div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconOne.asset.url} alt={campaign.campaignFieldTitleOne} width={48} height={48} priority />
          </div>

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleOne}</div>
            <div className="text-default-500 text-sm mt-2">{campaign.campaignFieldDescOne}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconTwo.asset.url} alt={campaign.campaignFieldTitleTwo} width={48} height={48} priority />
          </div>

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleTwo}</div>
            <div className="text-default-500 text-sm mt-2">{campaign.campaignFieldDescTwo}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconThree.asset.url} alt={campaign.campaignFieldTitleThree} width={48} height={48} priority />
          </div>

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleThree}</div>
            <div className="text-default-500 text-sm mt-2">{campaign.campaignFieldDescThree}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCampaignRender;
