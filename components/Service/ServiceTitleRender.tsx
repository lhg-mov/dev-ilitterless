import React from "react";

import { Link, Image, Card, CardHeader, link, Button } from "@nextui-org/react";

import { getServiceTitle } from "@/sanity/actions";

type ServiceTitle = {
  title: string;
}

const ServiceTitleRender = async () => {
  const render: ServiceTitle = await getServiceTitle()
  return (

        <div className="service__title">
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold sm:text-5xl text-4xl service__title_child">
              <span className="text-primary">{render.title}</span>
            </h2>
            <div className="arrow__icon sm:block hidden">
              <div className="relative w-[100px] h-[100px] flex items-center">
                <div>
                  <Image src="/iLitterless.svg" width={100} height={100} className="animate-spin-slow mix-blend-difference" />
                </div>
                <div className="absolute -left-10">
                  <div className="bg-primary p-12 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ServiceTitleRender;
