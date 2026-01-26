"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import HeroSectionDesign from "./ui/hero-section-design";
import HeroButton from "@/components/ui/hero-button";

const Hero = () => {
  return (
    <div className="relative mx-auto max-h-[1000px] py-10">
      <Image
        src={"/images/home/grad.png"}
        alt="bg"
        width={1500}
        height={1500}
        className="absolute z-20 bottom-5 md:block hidden 2xl:bottom-10 w-screen  left-0  object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute z-10 object-cover w-screen h-full max-h-[700px]  "
      >
        <Image
          src="/images/home/bg3.png"
          alt="hero"
          width={1700}
          height={1700}
          className="w-screen h-full object-cover"
        />
      </motion.div>

      <div className="max-w-screen-2xl mx-auto relative z-20">
        <h1 className="text-3xl md:text-6xl leading-[1.1] md:w-[50%] w-full mx-auto text-center font-bold">
          A Technical Catalyst for Thoughtful Digital Experiences
        </h1>
        <p className="text-base md:w-[50%]  w-[95%] pt-4 mx-auto text-center">
          Closing the gap between “what is” and “what could be”. We create
          experiences that connect and convert through strategic thinking and
          creative execution.
        </p>
        <div className="md:w-[50%] w-full pt-4 mx-auto text-center">
          <HeroButton title="Explore the Possibilities." />
        </div>
      </div>
      <div className="-mt-28 xl:block hidden  ">
        <HeroSectionDesign />
      </div>
      <div className="xl:hidden mt-5 block">
        <Image
          src="/images/home/mob.png"
          alt="hero"
          width={1700}
          height={1700}
          className="w-screen h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
