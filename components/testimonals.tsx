import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

const testimonials1 = [
 
  {
    quote:
      "We always knew where the project stood, which made working together easy.",
    name: "Amit Verma",
    title: "Founder | LogiCore Systems",
    image: "/images/home/testimonals/3.png",
  },
  {
    quote:
      "Since the beginning, the communication was clear. We always knew what was happening and what decisions mattered next.",
    name: "Sarah Mitchell",
    title: "CEO | Corefin Labs",
    image: "/images/home/testimonals/4.png",
  },
  {
    quote:
      "They understood the product deeply and didn’t push unnecessary features. That saved us time and budget.",
    name: "Daniel Wright",
    title: "CEO | NovaHealth Systems",
    image: "/images/home/testimonals/5.png",
  },
  {
    quote:
      "The team stayed reliable throughout the project. No guesswork, no last-minute surprises, just steady progress and honest updates.",
    name: "Rachel Thompson",
    title: "CEO | VertexFlow",
    image: "/images/home/testimonals/1.png",
  },
  {
    quote:
      "The process was clear from day one. We always knew what was being built and why.",
    name: "Ankit Verma",
    title: "Product Manager | FinCore Solutions",
    image: "/images/home/testimonals/2.png",
  },
  {
    quote:
      "Their team communicated openly and delivered reliable software without unnecessary complexity.",
    name: "Sarah Mitchell",
    title: "CTO | BrightPath Systems",
    image: "/images/home/testimonals/3.png",
  },
  {
    quote:
      "What stood out was how stable everything felt — fewer issues, better structure, and solid execution.",
    name: "Daniel Rao",
    title: "Operations Lead | Nexora Tech",
    image: "/images/home/testimonals/4.png",
  },
];

const testimonals = [
   {
    quote:
      "Dexnive felt like an extension of our team. Clear communication, solid execution, and no unnecessary back-and-forth.",
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
  {
    quote:
      "Dexnive kept the process clear from day one and delivered exactly what was planned.",
    name: "Rahul Mehta",
    title: "Product Manager | Finova Tech",
    image: "/images/home/testimonals/1.png",
  },
  {
    quote:
      "The team communicated consistently and handled feedback without delays.",
    name: "Sarah Collins",
    title: "Operations Lead | Northwave Solutions",
    image: "/images/home/testimonals/2.png",
  },
]


const Testimonials = () => {
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
        <h1 className="text-3xl leading-[1.1] md:text-6xl font-bold text-center">
          What People Say About Working With Dexnive
        </h1>
      </div>
      <p className="text-lg md:w-[60%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
        Here’s what teams and founders say about working with us, in their own
        words.
      </p>
      <div className="w-screen py-10">
        <InfiniteMovingCards
          items={testimonals}
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

export default Testimonials;
