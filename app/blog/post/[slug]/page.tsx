import React from "react";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import BlogPost from "@/components/Blog/BlogPost";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/sanity.client";

interface GetSlug {
  slug: string;
}

type Props = {
  params: { slug: string };
};

// interface BlogPostDetail {
//   _id: string;
//   _updatedAt: string;
//   _createdAt: string;
//   publishedAt: string;
//   author: string;
//   title: string;
//   categories: string;
//   mainImage: string;
//   slug: string;
// }

export const revalidate = 60;

const getBlogPostDetail = async (params: GetSlug) => {
  const { slug } = params;
  try {
    const resources = await client.fetch(
      // Your query remains the same
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _updatedAt,
        _createdAt,
        publishedAt,
        "author": author[]->{
          "image": image,
          "name": name,
          "position": position,
                "slug": slug,
              },
        title,
        "categories": categories[]->{
          "title": title,
        },
        mainImage {
          alt,
          asset->{
            url
          }
        },
        body[],
        "slug": slug.current,
      }`,
      { slug }
    );

    // console.log("Fetched resources detail:", resources);
    return resources;
  } catch (error) {
    console.error("Error fetching resource:", error);
    throw error;
  }
};

const getRelatedPost = async (params: GetSlug) => {
  const { slug } = params;
  try {
    const related = await client.fetch(
      groq`*[_type == 'post' && slug.current != $slug][0...3]{
        _id,
        _updatedAt,
        _createdAt,
        publishedAt,
        title,
        "categories": categories[]->{
          "title": title,
        },
        mainImage {
          alt,
          asset->{
            url
          }
        },
        "slug": slug.current,
      } | order(_createdAt desc)`,
      { slug }
    );

    const relatedArray = Array.isArray(related) ? related : [related];
    return relatedArray;
  } catch (error) {
    console.error("Error fetching related posts:", error);
    throw error;
  }
};

import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const blogPostData = await getBlogPostDetail({ slug });

  return {
    title: `iLitterless - ${blogPostData.title}`,
    description: `${new Date(blogPostData?.publishedAt).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "short",
      timeZone: "UTC",
    })} - ${new Date(blogPostData?.publishedAt).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    })}`,
    other: {
      "theme-color": "#000000",
      "color-scheme": "light",
      "twitter:title": `iLitterless - ${blogPostData.title}`,
      "twitter:description": `${new Date(blogPostData?.publishedAt).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "short",
      timeZone: "UTC",
    })} - ${new Date(blogPostData?.publishedAt).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    })}`,
      "twitter:image": `${urlFor(blogPostData.mainImage).width(500).url()}`,
      "twitter:card": "summary_large_image",
      "og:title": `iLitterless - ${blogPostData.title}`,
      "og:description": `${new Date(blogPostData?.publishedAt).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      weekday: "short",
      timeZone: "UTC",
    })} - ${new Date(blogPostData?.publishedAt).toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    })}`,
      "og:url": "ilitterlessindonesia.org",
      "og:image": `${urlFor(blogPostData.mainImage).width(500).url()}`,
      "og:type": "website",
    },
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const slug = params.slug;
  const blogPostData = await getBlogPostDetail({ slug });
  const blogPostRelated = await getRelatedPost({ slug });

  // console.log("Blog Post Data:", blogPostData?.title);
  // console.log("Related Posts:", blogPostRelated);

  return (
    <>
      <Navigation />
      <BlogPost blogPostData={blogPostData} blogPostRelated={blogPostRelated} />
      <Footer />
    </>
  );
};

export default BlogPostPage;
