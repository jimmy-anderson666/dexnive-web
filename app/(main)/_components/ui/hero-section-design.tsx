"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedPath = ({ d, delay = 0 }: { d: string; delay?: number }) => (
  <>

    <path
      d={d}
      stroke="#D2D2D2"
      strokeOpacity="0.45"
      strokeWidth="3.04402"
      fill="none"
    />


    <motion.path
      d={d}
      fill="none"
      stroke="#8B5CF6"
      strokeWidth="5"
      strokeDasharray="80 1200"
      initial={{ strokeDashoffset: 1280 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{
        duration: 3.5,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      style={{
        filter: "drop-shadow(0 0 10px rgba(159,92,246,1))",
      }}
    />
  </>
);

const HeroSectionDesign = () => {
  return (
    <div className="flex items-center max-w-screen-2xl mx-auto  justify-center relative">
     <Image src={"/images/home/l-icon.png"} alt="icons" width={220} height={220} className="absolute left-[8%] top-28" />
     <Image src={"/images/home/r-icon.png"} alt="icons" width={230} height={230} className="absolute right-[7%] top-[100px]" />
      <svg
        width="674"
        height="384"
        viewBox="0 0 874 360"
        fill="none"
        className="relative"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatedPath
          d="M874.05 62.9177H520.436C503.694 62.9177 505.216 64.4397 494.074 47.6976L467.693 8.12534C462.093 1.02262 467.693 1.52996 429.888 1.52996H415.925"
          delay={0.2}
        />
        <AnimatedPath
          d="M873.543 82.6744H657.925C642.705 82.6744 647.271 82.6744 631.563 97.8945L590.957 134.93C586.56 139.327 573.707 137.974 557.23 137.974H269.305"
          delay={1.8}
        />
        <AnimatedPath
          d="M873.543 101.983H657.925C642.705 101.983 647.271 101.983 631.563 117.203L459.049 275.999C454.652 280.396 441.8 279.043 425.322 279.043H411.359"
          delay={0.8}
        />
        <AnimatedPath
          d="M874.558 121.291H688.365C673.145 121.291 677.711 121.291 662.003 136.511L425.565 366.334C421.168 370.731 -149.755 369.378 -166.232 369.378H-167.004"
          delay={1.4}
        />
      </svg>

      <div className="mt-36 flex flex-col items-center z-10">
        <Image
          src="/images/home/h-img.png"
          alt="Hero Icon"
          width={140}
          height={140}
          priority
        />
        <svg
          width="50"
          height="262"
          viewBox="0 0 60 322"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AnimatedPath d="M57.8926 0V361.9" delay={0.4} />
          <AnimatedPath d="M40.9819 0V361.9" delay={1.2} />
          <AnimatedPath d="M20.688 0V361.9" delay={0.7} />
          <AnimatedPath d="M1.52197 0V361.9" delay={2.0} />
        </svg>
      </div>

     
      <svg
        width="674"
        height="384"
        viewBox="0 0 874 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatedPath
          d="M0 73.0565H309.983C325.203 73.0565 320.637 73.0565 336.345 57.8364L386.064 8.11741C390.46 3.72049 394.2 1.52203 410.678 1.52203H465.228"
          delay={1.1}
        />
        <AnimatedPath
          d="M0.507812 92.8132H213.082C228.302 92.8132 223.736 92.8132 239.444 108.033L280.05 145.069C284.447 149.466 297.3 148.113 313.777 148.113H601.702"
          delay={2.2}
        />
        <AnimatedPath
          d="M0.507812 114.121H213.082C228.302 114.121 223.736 114.121 239.444 129.341L411.958 288.138C416.355 292.535 429.207 291.182 445.685 291.182H510.381"
          delay={0.5}
        />
        <AnimatedPath
          d="M0.507812 133.429H182.642C197.862 133.429 193.296 133.429 209.004 148.65L445.442 378.473C449.839 382.87 1051.2 381.517 1067.68 381.517H1068.45"
          delay={1.6}
        />
      </svg>
    </div>
  );
};

export default HeroSectionDesign;
