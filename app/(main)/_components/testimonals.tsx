import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";
import Image from "next/image";

const testimonials1 = [
  {
    quote:
      "Dexnive felt like an extension of our team. Clear communication, solid execution, and no unnecessary back‑and‑forth.",
    name: "Alex Morgan",
    title: "Product Lead | SaaS Company",
    image: "/images/home/testimonals/1.png",
  },
  {
    quote:
      "They took our idea seriously and helped us shape it into something real. The process was smooth from start to launch.",
    name: "Priya Shah",
    title: "Founder | Startup",
    image: "/images/home/testimonals/2.png",
  },
  {
    quote:
      "What stood out was their transparency and reliability. We always knew where things stood and what was coming next.",
    name: "Daniel Brooks",
    title: "Operations Manager | Ecommerce Brand",
    image: "/images/home/testimonals/3.png",
  },
  {
    quote:
      "Strong execution, thoughtful decisions, and a team that actually listens. We’d happily work with Dexnive again.",
    name: "Sarah Kim",
    title: "Head of Growth | Tech Company",
    image: "/images/home/testimonals/4.png",
  },
  {
    quote:
      "From planning to delivery, everything felt structured and under control. Exactly what we needed.",
    name: "Michael Turner",
    title: "CTO | Digital Product Company",
    image: "/images/home/testimonals/5.png",
  },
];

const Testimonals = () => {
  return (
    <div className="py-10 relative overflow-visible">
      <Image
        src="/images/home/bg.png"
        alt="dexnive-apart"
        width={1500}
        height={1500}
        className="absolute -top-20 left-0 w-full h-[150%] -z-10 object-cover"
      />
      <div className="max-w-screen-2xl mx-auto md:w-[50%] text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          What People Say About Working With Dexnive
        </h1>
        <p className="text-lg font-medium pt-4">
          Here’s what teams and founders say about working with us, in their own
          words.
        </p>
      </div>
      <div className="w-screen py-24">
        <InfiniteMovingCards
          items={testimonials1}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials1}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Testimonals;
