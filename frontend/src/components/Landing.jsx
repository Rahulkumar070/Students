import React from "react";
import { motion } from "framer-motion";
import CircularText from "../anim/CircularText";

function Landing() {
  return (
    <div
      className="w-full h-screen overflow-hidden bg-black
    "
    >
      <div className="bg-black relative text-white flex flex-col items-center justify-center h-full">
        <h1 className="font-['silk'] font-extrabold overflow-hidden leading-none  text-[clamp(4rem,10vw,9rem)]">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block  origin-left"
          >
            WEBDEV
          </motion.span>
        </h1>
        <h1 className="font-['silk'] overflow-hidden leading-none  text-[clamp(1.5rem,1.5vw,2rem)]">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block  origin-left"
          >
            THE ART
          </motion.span>
        </h1>
      </div>
      <div className="absolute bottom-10 font-['silk'] px-5 text-[clamp(1.3rem,2vw,1rem)] text-white">
        <h1 className="overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block  origin-left"
          >
            Designed And Developed By:
          </motion.span>
        </h1>
        <h1 className="overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1,
            }}
            className="inline-block  origin-left"
          >
            Rahul Kumar Pal
          </motion.span>
        </h1>
      </div>
      <div className=" right-0 px-2 fixed bottom-0 overflow-hidden">
        <CircularText
          text="*REACT*MONGODB*EXPRESS*NODEJS"
          onHover="speedUp"
          spinDuration={10}
          className="custom-class"
        />
      </div>
    </div>
  );
}

export default Landing;
