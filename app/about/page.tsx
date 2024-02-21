import AboutContent from "@/components/About/AboutContent";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import React from "react";

const About = () => {
  return (
    <>
      <Navigation />
      <AboutContent />
      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
