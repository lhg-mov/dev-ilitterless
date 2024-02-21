import { Post } from "@/sanity/types";
import React from "react";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { urlFor } from "@/lib/sanity.client";

import { v4 as uuidv4 } from "uuid";
import ButtonUI from "../ui/ButtonUI";

interface Props {
  posts: Post[];
}

const CardBlog = ({ posts }: Props) => {
  const uid = uuidv4();
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {posts?.map((post) => {
        const uid = uuidv4();
        return (
          <div className="blog__post_card relative h-[400px]" key={uid}>
            <Link href={{ pathname: `/blog/post/${post?.slug}` }} key={uid}>
              <div className="overflow-visible py-2 shadow-none">
                <Image alt={post?.title} className="object-cover w-full h-[210px] aspect-video" src={urlFor(post?.mainImage).url()} width={380} height={200} />
              </div>
            </Link>
            <div className="pb-0 pt-2">
              <div className="blog__categories flex items-center gap-4">
                {post?.categories.map((item) => {
                  const uid = uuidv4();
                  return (
                    <div key={uid}>
                      <Link href={{ pathname: `/search?categories=${item?.title}` }} as={`/search?categories=${item?.title}`} key={uid}>
                        <div className={`text-sm font-medium text-primary text-start`}>{item?.title}</div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <Link href={{ pathname: `/blog/post/${post?.slug}` }} key={uid}>
                <h3 className={`text-xl line-clamp-2 font-bold mt-3 w-11/12`}>{post?.title}</h3>
                <p className={`date__upload text-sm font-normal mt-1 text-default-500 text-start rounded-full`}>
                  {new Date(post?.publishedAt).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    weekday: "short",
                    timeZone: "UTC",
                  })}
                  <span> - </span>
                  {new Date(post?.publishedAt).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Jakarta",
                  })}
                </p>
              </Link>
            </div>
            <div className="absolute bottom-0">
              <div className="flex items-center gap-2 mt-4 group pb-2 text-primary">
                <Link href={{ pathname: `/blog/post/${post?.slug}` }} key={uid}>
                  <div className={`inline-flex items-center border-b-1 border-b-primary gap-2 font-semibold`}>
                    Baca Artikel <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBlog;
