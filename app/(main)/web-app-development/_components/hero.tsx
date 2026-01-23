import FloatingLines from "@/components/FloatingLines";
import HeroButton from "@/components/ui/hero-button";
import Image from "next/image";
const Hero = () => {
  return (
      <div className="md:-mb-40 mb-20">
      <Image
        src="/images/blue-hue.png"
        alt="bg"
        fill
        className="absolute inset-0 z-20 object-cover"
      />
      <div className="max-w-screen-2xl mx-auto relative py-20 z-20">
        <h1 className="text-3xl md:text-6xl md:w-[40%] w-full mx-auto text-center font-bold">
          Your Trusted Partner for Web App Development Services
        </h1>
        <p className="text-base md:w-[40%]  w-[95%] pt-4 mx-auto text-center">
          You have an idea that deserves an expert execution. Solutions that actually work for your business. So, we are here with our expert web app development services. You just need to share your idea and you will get a team that’s invested in your success every step of the way.
        </p>
        <div className="md:w-[50%] w-full pt-4 mx-auto text-center">
          <HeroButton title="Get a Free Consultation" />
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
      <div className="relative md:-top-28  z-0" >
          <Image
          src={"/images/web-app/hero.png"}
          className=" absolute md:top-28 top-0 left-1/2 z-30 translate-x-[-50%] object-center"
          alt="hero"
          width={900}
          height={900}
        />
  <FloatingLines
    enabledWaves={["middle" , "top" ,  ]}
    topWavePosition={{x:0,y:0,rotate:0}}
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
  )
}

export default Hero