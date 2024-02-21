import { getNewBlog } from "@/sanity/actions";
import React from "react";
import CardBlog from "../Blog/CardBlog";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export const revalidate = 60;

const NewBlog = async () => {
  const newBlog = await getNewBlog();
  return (
    <div className={style.blog}>
      <div className="blog__title py-12 -mt-5 sm:flex justify-between items-center">
        <div>
          <div className="text-5xl font-extrabold">
            <span className="text-primary">Blog</span> & <span>Berita</span>
          </div>
          <div className="text-default-500 sm:w-4/6 w-full mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae natus placeat, rem a ipsam ducimus!</div>
        </div>
        <div className="action__button sm:mt-0 mt-5">
          <ButtonUI text="Lihat Semua" link="/blog" type="secondary" endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
        </div>
      </div>

      <CardBlog posts={newBlog} />
    </div>
  );
};

export default NewBlog;
