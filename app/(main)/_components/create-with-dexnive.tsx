"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import Services from "@/components/services";
export const services = [
  {
    title: "Mobile App Development",
    description:
      "You don’t have to stress about the technical side of things. Bring us your idea, that’s it. We’ll take care of the development, turning it into a mobile app. More importantly, we focus on creating smooth, engaging experiences that'll increase user retention.",
    image: "/images/home/section-2/v1.png",
  },
  {
    title: "Web App Development",
    description:
      "When you need a web app, you want something that actually helps people get things done. That’s where we come in. We build secure, easy-to-use custom web apps for your customers and your internal team.",
    image: "/images/home/section-2/v2.png",
  },
  {
    title: "Custom Software Development",
    description:
      "At a certain point, ready-made software starts to feel more like a mess than a solution. When that happens, it is usually a sign it’s time for custom software. We design and develop custom applications around your real workflows, creating systems that support how work happens, instead of forcing your team to adapt to the software.",
    image: "/images/home/section-2/v3.png",
  },
  {
    title: "PWA Development",
    description:
      "Have you ever had a thought, “I wish this web app felt more like an app?” That’s how you know you need PWA. We build Progressive Web Apps (PWAs) that load fast and work offline, and anyone can install them right from the browser. No extra steps.",
    image: "/images/home/section-2/v4.png",
  },
  {
    title: "Ecommerce Development",
    description:
      "When buying feels complicated, people drop off, so we focus on building ecommerce platforms that remove unnecessary steps and make everything feel easy and accessible.",
    image: "/images/home/section-2/v5.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing isn’t as simple and basic as it sounds because you need people to find you and then choose you. That’s why we run growth-focused campaigns built around performance you can track and results you can see.",
    image: "/images/home/section-2/v6.png",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // staggered delay per card
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const CreateWithDexnive = () => {
  return (
    <div className=" py-20  relative">
      <Services
        services={services}
        heading="What Exactly Do We Do"
        p="Dexnive might sound like just another development company, and that’s fair. But we’re not here to make promises that we can’t keep. We are here to build long-term. Something that looks like the way you just imagined it."
      />
    </div>
  );
};

export default CreateWithDexnive;
