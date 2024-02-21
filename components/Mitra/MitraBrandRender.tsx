"use client";

import { getPartnerBrand, getPartnerCafe } from "@/sanity/actions";
import React, { useEffect, useState, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import { Image, Button, Link } from "@nextui-org/react";

const MitraBrandRender = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPartnerBrand();
      setData(result);
    };
    fetchData();
  }, []);

  const memoData = useMemo(() => data, [data]);

  return (
    <div className="partner_brand__content logos flex gap-10 sm:before:left-0 sm:before:bg-gradient-to-r sm:before:from-white sm:after:right-0 sm:after:bg-gradient-to-l sm:after:from-white sm:dark:before:left-0 sm:dark:before:bg-gradient-to-r sm:dark:before:from-black sm:dark:after:right-0 sm:dark:after:bg-gradient-to-l sm:dark:after:from-black">
      <div className="logos-slide flex gap-10 items-center">
        {memoData.map((img: any) => {
          const uid = uuidv4();
          return (
            <Link href={img.link} key={uid}>
              <Image
                src={img.logoImage.asset.url}
                alt={img.title}
                width={200}
                height={200}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="mx-10 p-3 saturate-0 hover:saturate-100 hover:scale-125 transition-all duration-250"
              />
            </Link>
          );
        })}
      </div>
      <div className="logos-slide flex gap-10 items-center">
        {data.map((img: any) => {
          const uid = uuidv4();
          return (
            <Link href={img.link} key={uid}>
              <Image
                src={img.logoImage.asset.url}
                alt={img.title}
                width={200}
                height={200}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="mx-10 p-3 saturate-0 hover:saturate-100 hover:scale-125 transition-all duration-250"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MitraBrandRender;
