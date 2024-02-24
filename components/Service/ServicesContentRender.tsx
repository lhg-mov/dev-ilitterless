import React from "react";

import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText";
import { Chip, Image } from "@nextui-org/react";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { Post, Product } from "@/sanity/types";
import { getServiceTitle } from "@/sanity/actions";

interface Props {
  id: string;
  title: string;
  secondaryTitle: string;
  slug: string;
  image: string;
  body: [];
}

interface Service {
  serviceData: any;
}

type ServiceTitle = {
  title: string;
}

export const revalidate = 60;

const ServicesContent = async ({ serviceData }: Service) => {
  const render: ServiceTitle = await getServiceTitle();
  return (
    <div className={style.servicepage} key={serviceData?._id}>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-12 relative">
        <div className="service__head sm:order-first order-last">
          <div className="service__category">
            <div className="inline-flex px-2 pt-0.5 pb-1 bg-primary text-white font-semibold rounded-full text-sm">
              {render.title}
            </div>
          </div>
          <div className="service__title py-5">
            <div className="text-xl font-medium text-default-500 mb-2 mt-3 flex items-center gap-2">
              <div className="bg-default-500 w-2 h-2 rounded-full"></div>
              <div>{serviceData?.secondaryTitle}</div>
            </div>
            <div className="sm:text-5xl text-4xl font-extrabold text-primary">{serviceData?.title}</div>
          </div>
        </div>
        
        
          <div className="service__image">
            <Image src={`${serviceData?.mainImage.asset.url}`} width={1024} height={300} alt={serviceData?.title} className="w-screen h-[320px] object-cover object-center !rounded-3xl" />
          </div>
        
        
      </div>
      <div className="sm:max-w-screen-lg mx-auto w-full py-16 text-default-700">
        <PortableText value={serviceData?.body} components={RichText} />
      </div>
    </div>
  );
};

export default ServicesContent;
