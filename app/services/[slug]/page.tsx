import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import ServicesContentRender from "@/components/Service/ServicesContentRender";
import { client } from "@/lib/sanity.client";
import { getServiceContent } from "@/sanity/actions";
import { groq } from "next-sanity";
import React from "react";

interface GetSlug {
  slug: string;
}

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

const Services = async ({ params }: Props) => {
  const slug = params.slug;
  const serviceData = await getServiceContent({ slug });
  return (
    <>
      <Navigation />
      <ServicesContentRender serviceData={serviceData} />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Services;
