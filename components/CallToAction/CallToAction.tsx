import React from "react";

import style from "@/app/ilitterless.module.css";

import { Chip } from "@nextui-org/react";
import ButtonUI from "../ui/ButtonUI";

const CallToAction = () => {
  return (
    <>
      <div className={`polkadot dark:hidden block`}>
        <div className={`${style.calltoaction}`}>
          <div className={`text-center py-12`}>
            <div className="cta__title">
              <div className="text-xl mb-4">
                <Chip className="bg-neutral-900 text-white">#PilahSampahItuMudah #SayaMinimSampah</Chip>
              </div>
              <div className="sm:text-5xl text-3xl font-extrabold">
                Dorong Perubahan, <br /> Mulai Dari <span className="text-primary">Dirimu</span> Sendiri
              </div>
            </div>
            <div className="cta__button mt-10">
              <ButtonUI
                text="Mulai Sekarang"
                link="/start"
                type="primary"
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`polkadotdark dark:block hidden`}>
        <div className={`${style.calltoaction}`}>
          <div className={`text-center py-12`}>
            <div className="cta__title">
              <div className="text-xl mb-4">
                <Chip className="bg-neutral-900 text-white">#PilahSampahItuMudah #SayaMinimSampah</Chip>
              </div>
              <div className="sm:text-5xl text-4xl font-extrabold">
                Dorong Perubahan, <br /> Mulai Dari <span className="text-primary">Dirimu</span> Sendiri
              </div>
            </div>
            <div className="cta__button mt-10">
              <ButtonUI
                text="Mulai Sekarang"
                link="/start"
                type="primary"
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
