import React from "react";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import BlogPost from "@/components/Blog/BlogPost";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

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
