import React from "react";
import { motion } from "framer-motion";

function Coreone() {
  return (
    <div className="w-full">
      <div className="h-[27vh] flex items-center p-5">
        <h1 className="text-6xl sm:text-[9rem] border-b overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
            className="inline-block origin-left"
          >
            Courses
          </motion.span>
        </h1>
      </div>
    </div>
  );
}

export default Coreone;
