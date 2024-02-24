import React from "react";

import style from "@/app/ilitterless.module.css";

import ButtonUI from "../ui/ButtonUI";

import Image from "next/image";

const CallToAction = () => {
  return (
    <>
      <div className={`polkadot dark:hidden block`}>
        <div className={`${style.calltoaction}`}>
          <div className={`text- start grid sm:grid-cols-2 grid-cols-1 gap-10`}>
            <div>
              <div className="cta__title">
                <div className="mb-4">
                  <div className="bg-neutral-900 sm:text-md text-tiny text-white inline-flex rounded-full py-1 px-4">#PilahSampahItuMudah #SayaMinimSampah</div>
                </div>
                <div className="sm:text-5xl text-3xl font-extrabold">
                  Dorong Perubahan, <br /> Mulai Dari <span className="text-primary">Dirimu</span> Sendiri
                </div>
              </div>
            <div className="cta__button mt-10">
              <ButtonUI
                text="Mulai Sekarang"
                link="/waiting"
                type="primary"
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                }
              />
            </div>
            </div>
            
            <div className="cta__mascot sm:flex justify-center -mb-10 sm:relative">
              <div className="desc sm:absolute sm:-left-12">
                <div className="text-default-700 text-sm sm:w-3/6 w-full bg-white rounded-xl p-4 shadow-lg animate-updown">
                  Mereka adalah saksi dari sampah yang telah kita buat. <span className="font-semibold">Yuk ikut jaga mereka dengan mengurangi sampah.</span>
                </div>
              </div>
              <Image src="/mascot.png" alt="Mascot Image" width={700} height={500}/>
            </div>
          </div>
        </div>
      </div>
      <div className={`polkadotdark dark:block hidden`}>
        <div className={`${style.calltoaction}`}>
        <div className={`text- start grid sm:grid-cols-2 grid-cols-1 gap-10`}>
            <div>
              <div className="cta__title">
                <div className="mb-4">
                  <div className="bg-neutral-900 sm:text-md text-tiny text-white inline-flex rounded-full py-1 px-4">#PilahSampahItuMudah #SayaMinimSampah</div>
                </div>
                <div className="sm:text-5xl text-3xl font-extrabold">
                  Dorong Perubahan, <br /> Mulai Dari <span className="text-primary">Dirimu</span> Sendiri
                </div>
              </div>
            <div className="cta__button mt-10">
              <ButtonUI
                text="Mulai Sekarang"
                link="/sign-up"
                type="primary"
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                }
              />
            </div>
            </div>
            
            <div className="cta__mascot sm:flex justify-center -mb-10 sm:relative">
              <div className="desc sm:absolute sm:-left-12">
                <div className="text-default-700 text-sm sm:w-3/6 w-full bg-white dark:bg-neutral-900 rounded-xl p-4 shadow-lg animate-updown">
                  Mereka adalah saksi dari sampah yang telah kita buat. <span className="font-semibold">Yuk ikut jaga mereka dengan mengurangi sampah.</span>
                </div>
              </div>
              <Image src="/mascot.png" alt="Mascot Image" width={700} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
