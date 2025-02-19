import React from "react";
import { motion } from "framer-motion";

function Second() {
  return (
    <div className="w-full relative font-['silk'] h-screen opacity-99 bg-black">
      <video
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        src="/hero.mp4"
      ></video>
      <div className="text-[clamp(1.2rem,3vw,4rem)] absolute w-full flex flex-col items-center justify-center h-screen top-0 text-white ">
        <h1 className=" overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            "BEHIND EVERY BEAUTIFUL WEBSITE"
          </motion.span>
        </h1>
        <h1 className=" overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            THERE IS A DEVELOPER WHO
          </motion.span>
        </h1>
        <h1 className=" overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block origin-left"
          >
            REFUSED TO GIVE UP.
          </motion.span>
        </h1>
      </div>
    </div>
  );
}

export default Second;
