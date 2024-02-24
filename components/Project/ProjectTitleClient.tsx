import React from "react";

import { motion } from "framer-motion";

const ProjectTitleClient = ({ children }: { children: React.ReactNode }) => {
  return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, type: "spring", ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="project__title sm:col-span-3 col-span-1"
        >
            {children}
        </motion.div>
        
  );
};

export default ProjectTitleClient;
