import SubHeader from "@/components/ui/sub-header";
import Image from "next/image";

const Story = () => {
  return (
    <div className="py-10 relative">
      <Image
        src="/images/home/bg.png"
        alt="dexnive-apart"
        width={1500}
        height={1500}
        className="absolute -top-40 left-0 w-full  object-cover"
      />
      <div className="max-w-screen-2xl relative z-20 mx-auto md:w-[40%] text-center">
        <SubHeader title={"Our Story"} />
        <h1 className="text-3xl md:text-6xl leading-[1.1] font-bold text-center">
          The Thinking Behind What We Create
        </h1>
      </div>
      <p className="text-lg md:text-3xl text-[#D0C8C8] leading-[1.4] relative z-20 w-[95%]  md:w-[90%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
        <span className="bg-[#53029B] pl-2 mr-2" >Dexnive{` `}</span>
        {`was created with one clear belief: successful digital products
        are not always defined by the ideas alone but also by how well those
        ideas are brought to life. In the space where many projects do struggle
        due to the rushed planning, unclear direction and advanced technical
        settings. We found the need for the smarter and more disciplined
        approach. Dexnive’s main goal was to close that gap. We built the brand
        around the structure, clarity and thoughtful engineering instead of the
        shortcuts. Our name reflects the principles of confidence in invention
        and top notch skills in delivery.  Today, Dexnive also operates as the
        team’s very first tech company which was focused on the strong
        workflows, practical design thinking and the dependable delivery. What
        makes us different is not just the technology that we use but also the
        mindset. We bring mindset, transparency and building the products which
        support the growth for our clients.`}
      </p>
    </div>
  );
};

export default Story;
