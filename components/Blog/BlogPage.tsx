import React from "react";

import { getAllBlog, getBlogTitle } from "@/sanity/actions";

import style from "@/app/ilitterless.module.css";
import CardBlog from "./CardBlog";
import SearchParent from "./SearchParent";

export const revalidate = 60;

type BlogTitle = {
  title: string;
  secondaryTitle: string;
}

const BlogPage = async () => {
  const posts = await getAllBlog();
  const render: BlogTitle = await getBlogTitle()
  return (
    <div className={style.blog}>
      <div className="blog__title sm:flex block justify-between items-center pb-16">
        <div>
          <div className="sm:text-5xl text-4xl font-extrabold text-primary">{render.title}</div>
          <div className="text-default-500 sm:w-3/5 w-full mt-3">{render.secondaryTitle}</div>
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
