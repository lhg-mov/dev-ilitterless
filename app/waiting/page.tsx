import React from "react";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "@/components/ui/ButtonUI";

import Image from "next/image";
import Version from "@/components/Version";

const Waiting = () => {
  return (
      <div className={style.waiting}>
        <div className="flex justify-start items-center py-44 text-default-700">
          <div className="waiting__content">
            <Image src="/ilitterless_black.png" alt="iLitterless Logo" width={150} height={60} className="dark:hidden pointer-events-none" draggable="false" />
            <Image src="/ilitterless_white.PNG" alt="iLitterless Logo" width={150} height={60} className="dark:block dark:w-[150px] dark:h-[60px] w-0 h-0 object-contain pointer-events-none" draggable="false" />

            <div className="sm:text-5xl text-4xl font-extrabold mb-2 mt-7">Coming Soon</div>

            <p className="text-default-500 mb-5">Mohon maaf, Halaman ini sedang dalam tahap pengembangan.</p>

            <ButtonUI
              text="Beranda"
              link="/"
              type={"primary"}
              startContent={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

            <div className="mt-5">
              <Version />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Waiting;
