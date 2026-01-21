"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import HeroSectionDesign from "./ui/hero-section-design";

const Hero = () => {
  return (
    <div className="relative mx-auto max-h-[1000px] py-10">
      <Image src={"/images/home/grad.png"} alt="bg" width={1500} height={1500} className="absolute z-20 bottom-5 w-screen left-0  object-cover"/>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute z-10 object-cover w-screen h-full max-h-[700px]  left-0"
      >
        <Image
          src="/images/home/bg3.png"
          alt="hero"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-screen-2xl mx-auto relative z-20">
        <h1 className="text-3xl md:text-6xl md:w-[50%] w-full mx-auto text-center font-bold">
          A Technical Catalyst for
          Thoughtful Digital Experiences
        </h1>
        <p className="text-base md:w-[50%]  w-[95%] pt-4 mx-auto text-center">
          Closing the gap between “what is” and “what could be”. We create
          experiences that connect and convert through strategic thinking and
          creative execution.
        </p>
        <div className="md:w-[50%] w-full pt-4 mx-auto text-center">
          <button className="bg-linear-to-l text-sm shadow-[0px_0px_30px_0px_rgba(132,14,205,0.25)] from-[#FFFFFF]/20 to-[#FFFFFF73]/10 text-white border-2 border-[#840ECD] px-10 py-3 rounded-full">
            Explore the Possibilities.
          </button>
        </div>
      </div>
      <div className="-mt-28">
        <HeroSectionDesign />
      </div>
    </div>
  );
};

export default Hero;
