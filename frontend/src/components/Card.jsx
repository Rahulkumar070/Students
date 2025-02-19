import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

function Card() {
  return (
    <div className="opacity-99 w-full font-bold overflow-hidden leading-7">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" font-['silk'] text-[clamp(1rem,15vw,20rem)]"
      >
        <div className="p-5 opacity-99 sm:py-30">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              WE
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              DRIVE
            </motion.h1>
          </div>
          <div className="flex items-center sm:mt-[7vh]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaArrowRight />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              YOUR
            </motion.h1>
          </div>
          <div className="leading-12 sm:leading-[8vw]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SYSTEMS
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-[1vh] sm:mt-[3vh] md:mt-[4vh] lg:mt-[6vh]"
            >
              FWRD
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
