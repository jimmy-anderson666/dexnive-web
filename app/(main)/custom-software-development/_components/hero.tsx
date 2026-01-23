import FloatingLines from "@/components/FloatingLines";
import HeroButton from "@/components/ui/hero-button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="">
      <Image
        src="/images/blue-hue.png"
        alt="bg"
        fill
        className="absolute inset-0 z-20 object-cover"
      />
      <div className="max-w-screen-2xl mx-auto relative py-20 z-20">
        <h1 className="text-3xl md:text-6xl md:w-[40%] w-full mx-auto text-center font-bold">
          Reliable Custom Software Development Services
        </h1>
        <p className="text-base md:w-[40%]  w-[95%] pt-4 mx-auto text-center">
          Our Custom Software Development Services are for businesses that are
          tired of “making it work.” If your team relies on spreadsheets,
          workarounds, or tools that only almost do the job, that’s a sign that
          something needs to be built properly.
        </p>
        <div className="md:w-[50%] w-full pt-4 mx-auto text-center">
          <HeroButton title=" Let’s Talk About Your Problem" />
        </div>
      </div>
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
      <div className="relative -top-28  z-0">
        <Image
          src={"/images/custom-app/hero2.png"}
          className=" absolute top-28 left-1/2 z-30 translate-x-[-50%] object-center"
          alt="hero"
          width={900}
          height={900}
        />
        <FloatingLines
          enabledWaves={["middle", "top"]}
          topWavePosition={{ x: 0, y: 0, rotate: 0 }}
          // bottomWavePosition={{x:0,y:-1000,rotate:0}}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive
          parallax={false}
          mixBlendMode="normal"
        />
      </div>
    </div>
  );
};

export default Hero;
