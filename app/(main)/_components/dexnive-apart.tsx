"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ChooseUs from "@/components/choose-us";

const DexniveApart = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const choose = [
  {
    title: "Made to Fit Your Needs",
    description:
      "Every product exists within its own set of requirements. We focus on understanding your priorities and future direction before shaping the solution."
  },
  {
    title: "Specialized Engineering Teams",
    description:
      "You’re not handed a random team. You’ll get people who understand the details, not generalists trying to figure it out as they go."
  },
  {
    title: "24/7 Support",
    description:
      "Issues and changes don’t always arise on a fixed schedule. Because needs can emerge at any stage, we remain available to provide timely support whenever needed."
  },
  {
    title: "200+ Skilled Technology Experts",
    description:
      "You’re not rushing to hire or spending weeks getting people up to speed. You’re working with a group of experienced people who can step in whenever you need them."
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "Sometimes you need quick execution, sometimes you need a steady team. Either way, we’re ready to support you as things evolve."
  },
  {
    title: "Transparent Process",
    description:
      "We maintain a transparent process, clearly explaining our reasoning so you always understand current progress, next steps, and the rationality behind key decisions, ensuring clarity at every stage."
  }
];

  return (
    <div className="py-10 relative">
  <ChooseUs subHeading="" choose={choose} heading=" So, What Makes Dexnive Different? " p="There’s no “standard process” here. And we understand that each project is unique so your project with it’s own uniqueness. The team works alongside you and make sure everything stays manageable. "  />
    </div>
  );
};

export default DexniveApart;
