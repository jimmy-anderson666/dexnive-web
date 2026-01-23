"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SubHeader from "./ui/sub-header";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Delay between each card
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 }, // Start below and invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface Props {
  process: {
    imagePath: string;
    title: string;
    description: string;
  }[];
  header: string;
  p: string;
  subHeader?: string;
}

const Development = ({ process, header, p, subHeader }: Props) => {
  return (
    <div className="relative py-10">
      <Image
        src="/images/home/bg.png"
        alt="working"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-screen-2xl mx-auto md:w-[40%] text-center">
        <SubHeader title={subHeader || ""} />
        <h1 className="text-3xl md:text-6xl leading-[1.1] font-bold text-center">
          {header}
        </h1>
      </div>
      <p className="text-lg   md:w-[60%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
        {p}
      </p>
      <div className="max-w-screen-2xl mx-auto w-[80%] py-8">
        {process.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // animate once when 20% of card is in view
            className={cn(
              "flex lg:flex-row flex-col gap-4 justify-between group relative z-30 items-center py-8 border-t border-b border-[#FFFFFF1A]",
              index % 2 === 0 ? "flex-col lg:flex-row" : " lg:flex-row-reverse",
            )}
          >
            <div className="md:w-[40%]">
              <span>Step {index + 1}</span>
              <h3 className="font-semibold my-2 text-5xl">{step.title}</h3>
              <p className="text-sm text-white/80 md:pr-12">
                {step.description}
              </p>
            </div>
            <Image
              src={step.imagePath}
              alt={step.title}
              width={600}
              height={600}
              className="group-hover:scale-110 transition-all ease-linear"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Development;
