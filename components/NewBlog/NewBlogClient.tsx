"use client";

import React, { useState, useEffect } from "react";
import NewBlog from "./NewBlog";

import { motion } from "framer-motion";

const NewBlogClient = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
    >
      <NewBlog />
    </motion.div>
  );
};

export default NewBlogClient;
