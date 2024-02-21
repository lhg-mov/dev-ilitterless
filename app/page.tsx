import React from "react";

import Intro from "@/components/Intro/Intro";
import StatsClient from "@/components/Stats/StatsClient";
import Navigation from "@/components/Navigation/Navigation";
import LayananClient from "@/components/Service/LayananClient";
import ProjectClient from "@/components/Project/ProjectClient";
import Mitra from "@/components/Mitra/Mitra";
import NewBlogClient from "@/components/NewBlog/NewBlogClient";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import ParentAnnouncement from "@/components/ParentAnnouncement";

export default function Home() {
  return (
    <>
      <Navigation />
      <Intro />
      <StatsClient />
      <LayananClient />
      <ProjectClient />
      <Mitra />
      <NewBlogClient />
      <CallToAction />
      <Footer />
      <ParentAnnouncement />
      
      
    </>
  );
}
