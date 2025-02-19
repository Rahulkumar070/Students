import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Connect() {
  return (
    <div className="w-full  items-center opacity-99 flex flex-col leading-none justify-center overflow-hidden">
      <div className="text-[clamp(2.2rem,6vw,13rem)] font-['silk']">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          LET'S CONNECT
        </motion.h1>
      </div>
    </div>
  );
}

export default Connect;
