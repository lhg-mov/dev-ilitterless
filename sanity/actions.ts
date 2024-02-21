import { groq } from "next-sanity";

import { client } from "@/lib/sanity.client";
import { buildQuery } from "./utils";

interface GetPostQueryParams {
  query: string;
  categories: string;
  page: string;
}

interface GetSlug {
  slug: string;
}

type Props = {
  params: { slug: string };
};

export const getPostQuery = async (params: GetPostQueryParams) => {
  const { query, categories, page } = params;

  try {
    const PostQuery = await client.fetch(
      groq`${buildQuery({
        type: "post",
        query,
        categories,
        page: parseInt(page),
      })}{
        ...,
  author->,
    categories[]->,
      }`
    );

    // console.log("Fetched PostQuery All:", PostQuery);
    return PostQuery;
  } catch (error) {
    console.log(error);
  }
};

export const getNavigation = async () => {
  try {
    const navQuery = await client.fetch(
      groq`*[_type == "navigation"][0]{
        buttonText,
        buttonLink,
      }`
    );

    return navQuery;
  } catch (error) {
    console.error("Error fetching Nav Button query! --> ", error);
    throw error;
  }
};

export const getPortfolioLink = async () => {
  try {
    const portfolioLinkQuery = await client.fetch(
      groq`*[_type == "portfolioLink"] | order(_createdAt asc)[0...3]{
        _id,
        title,
          link,
          description,
        }`
    );

    return portfolioLinkQuery;
  } catch (error) {
    console.error("Error fetching Portfolio Link query! --> ", error);
    throw error;
  }
};

export const getIntro = async () => {
  try {
    const introQuery = await client.fetch(
      groq`*[_type == "intro"][0]{
        _id,
        _updatedAt,
        _createdAt,
        tagline,
        hastag,
        buttonText,
        buttonLink,
      }`
    );

    return introQuery;
  } catch (error) {
    console.error("Error fetching Intro query! --> ", error);
    throw error;
  }
};

export const getIntroCollab = async () => {
  try {
    const introCollabQuery = await client.fetch(
      groq`*[_type == "intro"][0]{
        collabStatus,
        collabLogoLight {
          asset->{
            url
          }
        },
        collabLogoDark {
          asset->{
            url
          }
        },
      }`
    );

    return introCollabQuery;
  } catch (error) {
    console.error("Error fetching Intro Collaboration query! --> ", error);
    throw error;
  }
};

export const getIntroSlide = async () => {
  try {
    const introSlideQuery = await client.fetch(
      groq`*[_type == "introImage"][0...3]{
        image {
          asset->{
            url
          }
        },
      }`
    );

    return introSlideQuery;
  } catch (error) {
    console.error("Error fetching Intro Slide query! --> ", error);
    throw error;
  }
};

export const getIntroCampaign = async () => {
  try {
    const introCampaignQuery = await client.fetch(
      groq`*[_type == "intro"][0]{
        campaignTitle,
        campaignFieldIconOne {
          asset->{
            url
          }
        },
        campaignFieldTitleOne,
        campaignFieldDescOne,
        campaignFieldIconTwo {
          asset->{
            url
          }
        },
        campaignFieldTitleTwo,
        campaignFieldDescTwo,
        campaignFieldIconThree {
          asset->{
            url
          }
        },
        campaignFieldTitleThree,
        campaignFieldDescThree,
      }`
    );

    return introCampaignQuery;
  } catch (error) {
    console.error("Error fetching Intro Campaign query! --> ", error);
    throw error;
  }
};

export const getStats = async () => {
  try {
    const statsQuery = await client.fetch(
      groq`*[_type == "statistik"] | order(_createdAt asc){
        _id,
        title,
          secondaryTitle,
          data,
      }`
    );

    return statsQuery;
  } catch (error) {
    console.error("Error fetching Stats query! --> ", error);
    throw error;
  }
};

export const getNewBlog = async () => {
  try {
    const newBlogQuery = await client.fetch(
      groq`*[_type == 'post'][0...3]{
        _id,
        _updatedAt,
        _createdAt,
        publishedAt,
        title,
        "author": author[]->{
          "image": image,
          "name": name,
          "position": position,
          "slug": slug,
        },
        categories[]->,
        mainImage {
          alt,
           asset->{
             url
           }
        },
        "slug": slug.current,
      } | order(_createdAt desc)`
    );

    return newBlogQuery;
  } catch (error) {
    console.error("Error fetching New Blog query! --> ", error);
    throw error;
  }
};

export const getAllBlog = async () => {
  try {
    const allBlogQuery = await client.fetch(
      groq`*[_type == 'post']{
        _id,
        _updatedAt,
        _createdAt,
        publishedAt,
        title,
        "author": author[]->{
          "image": image,
          "name": name,
          "position": position,
          "slug": slug,
        },
        categories[]->,
        mainImage {
          alt,
           asset->{
             url
           }
        },
        "slug": slug.current,
      } | order(_createdAt desc)`
    );

    return allBlogQuery;
  } catch (error) {
    console.error("Error fetching All Blog query! --> ", error);
    throw error;
  }
};

export const getServiceHome = async () => {
  try {
    const serviceHomeQuery = await client.fetch(
      groq`*[_type == "productServices"] | order(_createdAt asc)[0...4]{
        _id,
        title,
        secondaryTitle,
        shortDesc,
        "slug": slug.current,
        mainImage {
          alt,
           asset->{
             url
           }
        },
      }`
    );

    return serviceHomeQuery;
  } catch (error) {
    console.error("Error fetching Service for Home query! --> ", error);
    throw error;
  }
};

export const getProjectHome = async () => {
  try {
    const projectHomeQuery = await client.fetch(
      groq`*[_type == "projects"] | order(_createdAt asc)[0...9]{
        _id,
        title,
        status,
          startProject,
        "slug": slug.current,
        mainImage {
          alt,
           asset->{
             url
           }
        },
      }`
    );

    return projectHomeQuery;
  } catch (error) {
    console.error("Error fetching Project Home query! --> ", error);
    throw error;
  }
};

export const getPartnerBrand = async () => {
  try {
    const partnerBrandQuery = await client.fetch(
      groq`*[_type == "partnerBrand"] | order(_createdAt desc){
        title,
          link,
          logoImage {
          alt,
            asset->{
            url,
            }
          }
  }`
    );

    return partnerBrandQuery;
  } catch (error) {
    console.error("Error fetching Partner Brand query! --> ", error);
    throw error;
  }
};

export const getPartnerCafe = async () => {
  try {
    const partnerCafeQuery = await client.fetch(
      groq`*[_type == "partnerCafe"] | order(_createdAt asc){
        title,
          link,
          logoImage {
          alt,
            asset->{
            url,
            }
          }
  }`
    );

    return partnerCafeQuery;
  } catch (error) {
    console.error("Error fetching Partner Cafe query! --> ", error);
    throw error;
  }
};

export const getAboutPage = async () => {
  try {
    const aboutPageQuery = await client.fetch(
      groq`*[_type == "about"][0]{
        _id,
        title,
          secondaryTitle,
          mainImage {
          alt,
            asset->{
            url,
            }
          },
          bodyOne[],
          bodyTwo[],
          timeline[]->{
            _id,
            title,
            year,
            body[],
          },
          soonTitle,
          soonMessage,
          soonSecondaryTitle,
     }`
    );

    return aboutPageQuery;
  } catch (error) {
    console.error("Error fetching About Page query! --> ", error);
    throw error;
  }
};

export const getServiceContent = async (params: GetSlug) => {
  const { slug } = params;
  try {
    const serviceContentQuery = await client.fetch(
      groq`*[_type == "productServices" && slug.current == $slug][0]{
        _id,
        title,
        secondaryTitle,
        "slug": slug.current,
        mainImage {
          alt,
           asset->{
             url
           }
        },
        body[],
      }`,
      { slug }
    );

    return serviceContentQuery;
  } catch (error) {
    console.error("Error fetching Service Content query! --> ", error);
    throw error;
  }
};

export const getProjectContent = async (params: GetSlug) => {
  const { slug } = params;
  try {
    const projectContentQuery = await client.fetch(
      groq`*[_type == "projects" && slug.current == $slug][0]{
        _id,
        title,
        status,
          startProject,
        "slug": slug.current,
        mainImage {
          alt,
           asset->{
             url
           }
        },
        body[],
      }`,
      { slug }
    );

    return projectContentQuery;
  } catch (error) {
    console.error("Error fetching Project Content query! --> ", error);
    throw error;
  }
};
