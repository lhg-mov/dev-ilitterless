import React from "react";

import style from "@/app/ilitterless.module.css";

import { Image } from "@nextui-org/react";
import { getAboutPage } from "@/sanity/actions";
import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText";
import { RichTextAbout } from "../RichTextAbout";

export const revalidate = 60;

const AboutContent = async () => {
  const render = await getAboutPage();
  return (
    <div className={style.about}>
      <div className="about__title relative sm:flex grid grid-cols-1 items-center gap-3 pt-10 pb-12">
        <div className="text-5xl font-extrabold flex-shrink text-primary">{render.title}</div>
        <div className="flex-grow border-t-2 border-black dark:border-white sm:flex hidden"></div>
        <div className="text-lg flex-shrink font-semibold">{render.secondaryTitle}</div>
      </div>

      <div className="about__content sm:max-w-screen-lg mx-auto">
        <div className="about__content_child sm:grid sm:grid-cols-2 grid grid-cols-1 items-center gap-10 py-10">
          <div className="about__image">
            <Image src={render.mainImage.asset.url} width={1024} height={540} alt={render.title} radius="lg" className="w-full object-cover object-center" />
          </div>
          <div className="about__desc text-default-700">
            <PortableText value={render?.bodyOne} components={RichText} />
          </div>
        </div>
        <div className="about__desc py-10 text-default-700">
          <PortableText value={render?.bodyTwo} components={RichText} />
        </div>
        <div className="timeline">
          <div className="timeline__title pt-10 pb-20">
            <div className="text-5xl font-extrabold">Perjalanan Kami Dimulai,</div>
          </div>
          <div className="timeline__content">
            <ol className="relative border-s-2 border-primary">
              {render.timeline?.map((tml: any) => (
                <li className="mb-10 ms-5" key={tml._id}>
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-5 -start-[0.355rem] border-1.5 border-white dark:border-black "></div>
                  <div className="mb-1 text-lg leading-none text-default-500">{tml.year}</div>
                  <h3 className="text-2xl font-bold text-default-800">{tml.title}</h3>
                  <div className="my-5 text-base font-normal text-default-700 ml-3">
                    <PortableText value={tml?.body} components={RichTextAbout} />
                  </div>
                </li>
              ))}
              <li className="mb-10 ms-5">
                <div className="absolute w-3 h-3 bg-primary rounded-full mt-5 -start-[0.355rem] border-1.5 border-white dark:border-black "></div>
                <time className="mb-1 text-lg leading-none text-default-500 flex gap-2 items-center">
                  <div>{render.soonSecondaryTitle}</div>{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </time>
                <div className="sm:text-5xl text-3xl font-extrabold text-primary">{render.soonTitle}</div>
                <div className="my-5 text-base font-normal text-default-700 ml-5">{render.soonMessage}</div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
