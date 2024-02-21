import React from "react";

import { Popover, PopoverTrigger, PopoverContent, Avatar, AvatarGroup, Image, Button, Snippet } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Post } from "@/sanity/types";
import { urlFor } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichText } from "../RichText";

import style from "@/app/ilitterless.module.css";
import CopyButton from "../ui/CopyButton";

interface blogData {
  blogPostData: Post;
}

interface anotherBlog {
  blogPostRelated: Post[];
}

export const revalidate = 60;

const BlogPost = async ({ blogPostData, blogPostRelated }: { blogPostData: Post; blogPostRelated: Post[] }) => {
  // console.log("The Title Now Showing is", blogPostData);
  // console.log("The Title Coming Soon is", blogPostRelated);
  const messageToCopy = `#PilahSampahItuMudah. Hai Sob! Yuk baca artikel iLitterless Indonesia dengan klik link berikut https://ilitterlessindonesia.org/blog/post/${blogPostData?.slug}`;
  const UrlSlug = encodeURIComponent(`${messageToCopy}`);

  

  return (
    <div className={style.blogpost}>
      <div className="blog__content">
        <div className="blog__article">
          <div className="blog_post-title">
            <div className="blog__categories flex items-center gap-4 mb-5">
              {blogPostData?.categories.map((cat, index) => (
                <div key={index}>
                  <Link href={{ pathname: `/search?categories=${cat?.title}` }} as={`/search?categories=${cat?.title}`}>
                    <div className={`text-sm font-semibold text-primary text-start`}>{cat?.title}</div>
                  </Link>
                </div>
              ))}
            </div>
            <h2 className={`sm:text-4xl text-3xl font-extrabold text-start`}>{blogPostData?.title}</h2>
            <p className={`date__upload text-sm font-normal text-default-500 text-start rounded-full mt-4`}>
              {new Date(blogPostData?.publishedAt).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "short",
                timeZone: "UTC",
              })}
              <span> - </span>
              {new Date(blogPostData?.publishedAt).toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Jakarta",
              })}
            </p>
            <Popover placement="right">
              <PopoverTrigger>
                <div className="blog__author inline-flex items-center gap-2 mt-7">
                  <AvatarGroup>
                    {blogPostData?.author.map((item, index) => (
                      <Avatar key={index} src={urlFor(item?.image.asset).url()} size="sm" />
                    ))}
                  </AvatarGroup>
                  <p className={`font-semibold`}>Tim Penulis</p>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2 space-y-3">
                  {blogPostData?.author.map((item, index) => (
                    <div key={index} className="redaction_team flex items-center gap-2">
                      <Avatar src={urlFor(item?.image).url()} size="md" />
                      <div className="id_redaction">
                        <p className={` font-medium`}>{item?.name}</p>
                        <p className={` text-sm text-default-500`}>{item?.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="blog_post-cover mt-7">
            <Image alt="Cover background" className="object-cover rounded-xl w-[800px] sm:h-[420px] h-[180px] select-none" src={urlFor(blogPostData?.mainImage).url()} width={800} height={420} />
            <div className="blog__post_photo-desc mt-2">
              <p className={`text-sm text-default-500`}>{blogPostData?.mainImage?.alt}</p>
            </div>
          </div>
          <div className={`blog__post-content mt-7 text-default-700`}>
            <PortableText value={blogPostData?.body} components={RichText} />
          </div>
          <div className="blog__post-share my-20">
            <p className={`text-xl font-bold mb-5 text-center`}>Jangan Berhenti di Kamu. Yuk Bagikan!</p>
            <div className="sm:flex sm:grid-cols-none grid grid-cols-1 justify-center items-center gap-3">
              <CopyButton textToCopy={messageToCopy} />
              <Link href={`https://wa.me/6281249443118?text=${UrlSlug}`}>
                <Button size="md" className="bg-primary text-white py-unit-md w-full" radius="full" endContent={<FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7" />}>
                  <div className={` font-semibold`}>WhatsApp</div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="another__post">
          <div className={`sm:text-4xl text-3xl font-bold`}>
            Mungkin Kamu Juga Suka. <br /> <span className="text-primary">Lihat Artikel Lainnya</span>
          </div>
          <div className="related__post-content mt-7 grid sm:grid-cols-2 grid-cols-1 xl:gap-5 md:gap-5 gap-0 mb-10">
            {blogPostRelated.map((post, index) => (
              <div key={index}>
                <div className="blog__post_card relative h-[390px] xl:mb-0 md:mb-0 mb-5">
                  <Link href={{ pathname: `/blog/post/${post?.slug}` }}>
                    <div className="overflow-visible py-2 shadow-none">
                      <Image alt={post?.title} className="object-cover sm:w-[800px] w-full h-[200px]" src={urlFor(post?.mainImage).url()} width={800} height={200} />
                    </div>
                  </Link>
                  <div className="pb-0 pt-2">
                    <div className="blog__categories flex items-center gap-4">
                      {post?.categories.map((item, index) => (
                        <div key={index}>
                          <Link href={`/`}>
                            <div className={`text-sm font-normal text-orange-500 text-start`}>{item?.title}</div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <Link href={{ pathname: `/blog/post/${post?.slug}` }}>
                      <h3 className={` text-xl line-clamp-2 font-semibold mt-3 sm:w-11/12 w-full`}>{post?.title}</h3>
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
                    <div className="flex items-center gap-2 mt-4 group pb-2 text-orange-500">
                      <Link href={{ pathname: `/blog/post/${post?.slug}` }}>
                        <div className={`inline-flex items-center border-b-1 border-b-orange-500 gap-2 font-medium`}>
                          Baca Artikel <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={`ads__component bg-default-300  text-center px-10 py-56 my-4 font-medium rounded-xl`}>Sponsored Ads Here!</div> */}
          {/* <div className={`ads__component bg-default-300  text-center px-10 py-56 my-7 font-medium rounded-xl`}>Sponsored Ads Here!</div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
