import { getBlogTitle, getNewBlog } from "@/sanity/actions";
import React from "react";
import CardBlog from "../Blog/CardBlog";

import style from "@/app/ilitterless.module.css";
import ButtonUI from "../ui/ButtonUI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const revalidate = 60;

type BlogTitle = {
  title: string;
  secondaryTitle: string;
}

const NewBlogRender = async () => {
  const newBlog = await getNewBlog();
  const render: BlogTitle = await getBlogTitle();
  return (
    <div className={style.blog}>
      <div className="blog__title py-12 -mt-5 sm:flex justify-between items-center">
        <div>
          <div className="text-5xl font-extrabold">
            <span className="text-primary">{render.title}</span>
          </div>
          <div className="text-default-500 sm:w-4/6 w-full mt-2">{render.secondaryTitle}</div>
        </div>
        <div className="action__button sm:mt-0 mt-5">
          <ButtonUI text="Lihat Semua" link="/blog" type="secondary" endContent={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} />
        </div>
      </div>

      <CardBlog posts={newBlog} />
    </div>
  );
};

export default NewBlogRender;
