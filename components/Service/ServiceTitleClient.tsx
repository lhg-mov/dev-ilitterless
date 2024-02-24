import React from "react";

import { motion } from "framer-motion";

const ServiceTitleClient = ({children}:{children: React.ReactNode}) => {
  return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
{children}
      </motion.div>
  );
};

export default ServiceTitleClient;
