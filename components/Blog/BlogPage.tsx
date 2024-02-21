import React from "react";

import { getAllBlog } from "@/sanity/actions";

import style from "@/app/ilitterless.module.css";
import CardBlog from "./CardBlog";
import SearchParent from "./SearchParent";

export const revalidate = 60;

const BlogPage = async () => {
  const posts = await getAllBlog();
  return (
    <div className={style.blog}>
      <div className="blog__title sm:flex block justify-between items-center pb-16">
        <div>
          <div className="sm:text-5xl text-4xl font-extrabold">Blog</div>
          <div className="text-default-500 sm:w-3/5 w-full mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea, libero quod labore nulla amet?</div>
        </div>
        <div className="search__blog">
          <SearchParent />
        </div>
      </div>
      <div className="blog__content pb-16">
        <CardBlog posts={posts} />
      </div>
    </div>
  );
};

export default BlogPage;
