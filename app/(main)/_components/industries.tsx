import SubHeader from "@/components/ui/sub-header";
import Image from "next/image";

const industries = [
  {
    title: "Startups",
    description:
      "Startups don’t usually have everything figured out initially, and that’s okay. You just need something you can put in front of users. We help you build MVPs that let you test quickly and move forward.",
    icon: "/images/home/industries/i1.png",
  },
  {
    title: "Ecommerce",
    description:
      "You can have great products, but if the experience is slow or confusing, people leave. We create ecommerce stores that provide smooth and seamless shopping experiences.",
    icon: "/images/home/industries/i2.png",
  },
  {
    title: "Health and Fitness",
    description:
      "Dealing with the healthcare industry means asking people to trust you with their information and routines. We guarantee technology that’s reliable and built to support long-term use.",
    icon: "/images/home/industries/i3.png",
  },
  {
    title: "SaaS",
    description:
      "We help SaaS teams build and refine platforms that integrate smoothly and remain easy to maintain. The focus is on growth without unnecessary complexity, keeping the product stable.",
    icon: "/images/home/industries/i4.png",
  },
  {
    title: "Education",
    description:
      "Teaching and learning shouldn’t feel complicated. We build platforms that make sharing content, engaging students, and managing everything behind the scenes much easier.",
    icon: "/images/home/industries/i5.png",
  },
];

const Industries = () => {
  return (
    <div className="py-20">
      <div className="max-w-screen-2xl mx-auto md:w-[40%] text-center">
        <SubHeader title="Industries We Work With" />
        <h1 className=" text-3xl md:text-6xl font-bold leading-[1.1]">Adding Value Across Teams</h1>
      </div>
        <p className="text-lg md:w-[60%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
          Working with different kinds of businesses and industries has taught
          us a lot. It helps us quickly understand industry-specific challenges
          to build smarter solutions.
        </p>
      <div className="max-w-screen-2xl lg:p-24 p-12 relative overflow-hidden rounded-4xl mx-auto md:w-[80%] my-12 border border-[#53029B40] shadow-[0_0_30px_0_#840ECD40]">
        <Image
          src="/images/home/industries/shadow.png"
          alt="industries-bg"
          width={1500}
          height={1500}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className=" relative w-full z-30 text-center gap-10 flex justify-center flex-wrap ">
          <Image
            src="/images/home/industries/lines.png"
            alt="industries-bg"
            width={1500}
            height={1500}
            className="absolute -z-10 lg:block hidden top-0 left-0 w-full h-full object-cover"
          />
          {industries.map((industry, index) => (
            <div key={index} className="md:w-[30%] w-full group ">
              <Image
                src={industry.icon}
                alt={industry.title}
                width={60}
                height={60}
                className="w-12 mb-4 mx-auto group-hover:scale-110 transition-all ease-linear"
              />
              <h3 className="text-lg mb-4 font-bold">{industry.title}</h3>
              <p className="text-sm font-medium">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
