"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
    <div className="relative py-10">
      <Image
        src="/images/home/bg.png"
        alt="working"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-screen-2xl mx-auto md:w-[40%] text-center">
        <h1 className="text-3xl md:text-6xl leading-[1.1] font-bold text-center">
          What Working With Dexnive Looks Like
        </h1>
      </div>
        <p className="text-lg   md:w-[60%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
          We don’t overthink how we work together or following an official
          workflow because each project requires different workflows so working
          with us doesn’t mean learning a complicated process or fitting into
          someone else’s system. Things stay flexible, communication stays open.
          So you’re never left guessing what’s happening.
        </p>
      <div className="max-w-screen-2xl mx-auto w-[80%] py-8">
        {processSteps.map((step, index) => (
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
              <p className="text-sm text-white/80 md:pr-12">{step.description}</p>
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

export default Working;
