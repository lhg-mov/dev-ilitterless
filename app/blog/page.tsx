import React from "react";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import BlogPage from "@/components/Blog/BlogPage";

export const revalidate = 60;

const Blog = () => {
  return (
    <>
      <Navigation />
      <BlogPage />
      <Footer />
    </>
  );
};

export default Blog;
