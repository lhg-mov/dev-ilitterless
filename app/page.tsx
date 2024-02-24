import React from "react";

import Intro from "@/components/Intro/Intro";
import Stats from "@/components/Stats/Stats";
import Navigation from "@/components/Navigation/Navigation";
import Layanan from "@/components/Service/Layanan";
import Project from "@/components/Project/Project";
import Mitra from "@/components/Mitra/Mitra";
import NewBlog from "@/components/NewBlog/NewBlog";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import ParentAnnouncement from "@/components/ParentAnnouncement";

export default function Home() {
  return (
    <>
      <Navigation />
      <Intro />
      <Stats />
      <Layanan />
      <Project />
      <Mitra />
      <NewBlog />
      <CallToAction />
      <Footer />
      <ParentAnnouncement />
    </>
  );
}
