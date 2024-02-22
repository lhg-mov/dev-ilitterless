import React from "react";

import Image from "next/image";
import { getIntroData } from "@/sanity/actions";

type Campaign = {
  campaignTitle: string;

  campaignFieldTitleOne: string;
  campaignFieldDescOne: string;

  campaignFieldTitleTwo: string;
  campaignFieldDescTwo: string;

  campaignFieldTitleThree: string;
  campaignFieldDescThree: string;
};

const IntroCampaignRender = async () => {
  const render = await getIntroData();
  const campaign:Campaign = render.introTitleCampaign;
  return (
    <div className="intro_campaign">
      <div className="sm:text-4xl text-2xl font-extrabold text-primary">{campaign.campaignTitle}</div>
      <div className="flex relative items-center mb-8 gap-3 sm:w-96 w-full">
        <div className="font-semibold flex-shrink">Supported by. Tetra Pak</div>
        <div className="border-t-2 border-primary flex-grow"></div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {/* <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconOne.asset.url} alt={campaign.campaignFieldTitleOne} width={48} height={48} priority />
          </div> */}

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleOne}</div>
            <div className="text-default-500 text-sm mt-1">{campaign.campaignFieldDescOne}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconTwo.asset.url} alt={campaign.campaignFieldTitleTwo} width={48} height={48} priority />
          </div> */}

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleTwo}</div>
            <div className="text-default-500 text-sm mt-1">{campaign.campaignFieldDescTwo}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="p-3 bg-white rounded-full ring-2 ring-primary">
            <Image src={campaign.campaignFieldIconThree.asset.url} alt={campaign.campaignFieldTitleThree} width={48} height={48} priority />
          </div> */}

          <div>
            <div className="text-xl font-extrabold text-primary">{campaign.campaignFieldTitleThree}</div>
            <div className="text-default-500 text-sm mt-1">{campaign.campaignFieldDescThree}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCampaignRender;
