import FloatingLines from "@/components/FloatingLines";
import HeroButton from "@/components/ui/hero-button";
import SubHeader from "@/components/ui/sub-header";
import Image from "next/image";
const Hero = () => {
  return (
      <div className="-mb-40">
      <Image
        src="/images/blue-hue.png"
        alt="bg"
        fill
        className="absolute inset-0 z-20 object-cover"
      />
      <div className="max-w-screen-2xl mx-auto relative py-20 z-20">
        <SubHeader title="About Us" />
        <h1 className="text-3xl md:text-6xl md:w-[45%] w-full mx-auto text-center font-bold">
          Let’s Share How It All Started
        </h1>
        <p className="text-sm lg:text-base md:w-[60%]  w-[95%] pt-4 mx-auto text-center">
           Dexnive a digital product and engineering the brand helping startups, enterprises and growing the teams that turn the ideas into the dependable, high performing solutions through the clarity and discipline We work with businesses which care about how the things are built, not just what is delivered. By combining smart thinking, structured execution and the strong foundations. Dexnive creates products that perform in real environments and support long term growth with confidence.  
        </p>
        <div className="md:w-[50%] w-full pt-4 mx-auto text-center">
          <HeroButton title=" Discuss Your Idea Now" />
        </div>
      </div>
      <Image src={"/images/about-us/hero.png"} alt="hero" width={500} height={500} className="md:w-[50%] w-[95%] mt-20 md:mt-0 relative -top-40 mx-auto object-center" />
      {/* <div className="relative">
        <Image
          src={"/images/web-app/hero-bg2.webp"}
          className="w-[screen] mx-auto object-center"
          alt="hero"
          width={2000}
          height={2000}
        />
        <Image
          src={"/images/web-app/hero.png"}
          className=" absolute top-0 object-center"
          alt="hero"
          width={500}
          height={500}
        />
      </div> */}
       
    </div>
  )
}

export default Hero