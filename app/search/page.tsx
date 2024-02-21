import React from "react";

import { getPostQuery } from "@/sanity/actions";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

import Link from "next/link";

import { Image, Input } from "@nextui-org/react";

export const revalidate = 60;

import { urlFor } from "@/lib/sanity.client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import SearchHeader from "@/components/SearchHeader";
import SearchParent from "@/components/Blog/SearchParent";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import style from "@/app/ilitterless.module.css";

const SearchResult = async ({ searchParams }: Props) => {
  const postResult = await getPostQuery({
    query: searchParams?.query || "",
    categories: searchParams?.categories || "",
    page: "1",
  });

  return (
    <>
      <Navigation />
      <div className={style.blog}>
        {searchParams?.query || searchParams?.categories ? (
          <section className="mb-20">
            <div className="post__result">
              <SearchHeader query={searchParams?.query || ""} categories={searchParams?.categories || ""} />
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-7">
              {postResult?.length > 0 ? (
                postResult.map((post: any) => (
                  <div key={post._id}>
                    <div className="blog__post_card relative h-[390px]">
                      <Link href={{ pathname: `/blog/post/${post?.slug?.current}` }}>
                        <div className="overflow-visible py-2 shadow-none">
                          <Image alt={post?.title} className="object-cover w-[800px] h-[200px]" src={urlFor(post?.mainImage).url()} width={800} height={230} />
                        </div>
                      </Link>
                      <div className="pb-0 pt-2">
                        <div className="blog__categories flex items-center gap-4">
                          {post?.categories.map((item: any) => (
                            <div key={item._id}>
                              <Link href={{ pathname: `/search?categories=${item?.title}` }} as={`/search?categories=${item?.title}`}>
                                <div className={`text-sm font-medium text-primary text-start `}>{item?.title}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <Link href={{ pathname: `/blog/post/${post?.slug?.current}` }}>
                          <h3 className={` text-xl line-clamp-2 font-bold mt-3 w-11/12`}>{post?.title}</h3>
                          <p className={`date__upload text-sm font-normal mt-1 text-default-500 text-start rounded-full `}>
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
                          <Link href={{ pathname: `/blog/post/${post?.slug?.current}` }}>
                            <div className={`inline-flex items-center border-b-1 border-b-primary gap-2 font-semibold `}>
                              Baca Artikel <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className={`text-default-700 `}>I'm Sorry, No Article Found.</p>
              )}
            </div>{" "}
          </section>
        ) : (
          <div className="form__search w-full flex justify-center min-h-screen items-center -mt-24">
            <div className="w-full">
              <h2 className={`sm:text-5xl text-4xl font-semibold text-orange-500 text-center `}>Search</h2>
              <div className="flex w-full justify-center">
                <SearchParent />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
