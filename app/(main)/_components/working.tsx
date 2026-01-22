"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Development from "@/components/development";

const processSteps = [
  {
    title: "Clarity-First",
    subtitle: "Understanding Goals & Needs",
    description:
      "We make sure we fully understand your goals, needs, and challenges so that by the end, everyone is aligned and on the same page.",
    imagePath: "/images/home/working/planning.png",
  },
  {
    title: "Designing and Prototyping",
    subtitle: "Trying Ideas Quickly",
    description:
      "This is our 'let’s see how this feels' phase. We create designs to test concepts and make adjustments while changes are still easy.",
    imagePath: "/images/home/working/prototyping.png",
  },
  {
    title: "Agile Development",
    subtitle: "Iterative Progress",
    description:
      "We work in small sprints, delivering progress often so adjustments can be made quickly when something needs to change.",
    imagePath: "/images/home/working/agile.png",
  },
  {
    title: "Quality Assurance",
    subtitle: "Final Reality Check",
    description:
      "We test across devices, browsers, and edge cases to ensure everything works smoothly and feels solid everywhere.",
    imagePath: "/images/home/working/qa.png",
  },
  {
    title: "Quick Check-Ins",
    subtitle: "Stay Aligned",
    description:
      "A checkpoint for you to review progress, provide feedback, and ensure everything still feels aligned before moving forward.",
    imagePath: "/images/home/working/sprint.png",
  },
  {
    title: "Deployment & Launch",
    subtitle: "Smooth Release",
    description:
      "Launch day is seamless. We manage the release, double-check everything, and ensure the product is ready for real users.",
    imagePath: "/images/home/working/dep.png",
  },
  {
    title: "Post-Launch Support",
    subtitle: "Continuous Improvement",
    description:
      "After launch, we help you improve the product based on user feedback, making changes without starting from scratch.",
    imagePath: "/images/home/working/post.png",
  },
];

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

const Working = () => {
  return (
    <div>
      <Development process={processSteps} header="What Working With Dexnive Looks Like" p="We don’t overthink how we work together or following an official workflow because each project requires different workflows so working with us doesn’t mean learning a complicated process or fitting into someone else’s system. Things stay flexible, communication stays open. So you’re never left guessing what’s happening." />
    </div>
  );
};

export default Working;
