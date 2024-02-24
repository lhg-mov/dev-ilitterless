import React from "react";
import { motion } from "framer-motion";

const ProjectClient = ({children}:{children: React.ReactNode}) => {
  return (
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="xl:col-span-7 md:col-span-2 col-span-1 sm:mt-0 mt-5 project__content"
        >
      {children}
    </motion.div>
  );
};

export default ProjectClient;
