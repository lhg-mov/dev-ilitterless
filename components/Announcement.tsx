import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, m, LazyMotion, domMax, easeOut } from "framer-motion";

import {Button} from "@nextui-org/react"

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Setelah komponen mount, atur timer untuk menampilkan Announcement setelah 3 detik
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Membersihkan timer saat komponen unmount atau saat Announcement sudah muncul
    return () => clearTimeout(timer);
  }, []); // useEffect hanya akan dijalankan sekali setelah komponen mount

  return (
    <AnimatePresence>
      {isVisible && (
        <LazyMotion features={domMax}>
          <m.div
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 50 }}
            transition={{ duration: 0.5, type: "ease out" }}
            className="fixed z-[9999] xl:bottom-8 xl:right-8 md:bottom-6 md:right-6 bottom-4 sm:px-5 px-5"
          >
            <div className="bg-danger-100 shadow-lg border-1 border-danger-200 rounded-xl pt-5 pb-5 px-5 max-w-[32rem]">
              <div className="flex justify-between items-center mb-1">
                <div className={`text-lg text-danger-500 font-bold`}>Disclaimer</div>
                <div onClick={() => setIsVisible(false)} className="text-danger-500 cursor-pointer group">
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4 bg-transparent backdrop-blur-xl p-1 rounded-full group-hover:bg-white group-hover:text-danger-500 transition-all duration-250 group-hover:scale-105" />
                </div>
              </div>

              <p className={`text-sm text-gray-800 dark:text-gray-800 pb-1 mt-2`}>
                Halo! Saat ini website sedang dalam tahap pengembangan dan user testing di versi <strong>Staging - 0.1.4</strong>. Beberapa fungsi/ fitur belum sepenuhnya dapat digunakan. Jika anda menemukan error atau hal yang tidak seharusnya silahkan hubungi Kami. Terima Kasih! 
              </p>
              
              <div className="button__out mt-4 sm:hidden block">
                <Button className="bg-red-500 w-full text-white rounded-full font-semibold pt-0.5 pb-1" onClick={() => setIsVisible(false)}>Okay</Button>
              </div>
            </div>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  );
};

export default Announcement;
