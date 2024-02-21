import React from "react";

import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText";
import { Chip, Image } from "@nextui-org/react";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { Post, Product } from "@/sanity/types";

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

export const revalidate = 60;

const ServicesContent = ({ serviceData }: Service) => {
  return (
    <div className={style.servicepage} key={serviceData?._id}>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-12 relative">
        <div className="service__head sm:order-first order-last">
          <div className="service__category">
            <Chip color="primary" variant="bordered">
              Produk & Layanan
            </Chip>
          </div>
          <div className="service__title py-5">
            <div className="text-xl font-medium text-default-500 mb-2 mt-3 flex items-center gap-2">
              <div className="bg-default-500 w-2 h-2 rounded-full"></div>
              <div>{serviceData?.secondaryTitle}</div>
            </div>
            <div className="sm:text-5xl text-4xl font-extrabold">{serviceData?.title}</div>
          </div>
        </div>
        <div className="service__image">
          <Image src={`${serviceData?.mainImage.asset.url}`} width={1024} height={300} alt={serviceData?.title} className="w-screen h-[320px] object-cover object-center" radius="lg" />
        </div>
      </div>
      <div className="sm:max-w-screen-lg mx-auto px-5 py-16 text-default-700">
        <PortableText value={serviceData?.body} components={RichText} />
      </div>
    </div>
  );
};

export default ServicesContent;
