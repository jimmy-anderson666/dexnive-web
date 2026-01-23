import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative h-[60vh]">
      <Image
        src={"/images/custom-app/cta.png"}
        alt="cta"
        width={700}
        height={700}
        className="absolute -z-10 -top-[45%] left-1/2 translate-x-[-50%]"
      />
      <div className="max-w-screen-2xl mx-auto w-[60%]">
        <h1 className="text-3xl md:text-6xl md:w-[50%] w-full mx-auto text-center font-bold">
          Work With the Right Team
        </h1>
        <p className="text-base md:w-[60%]  w-[95%] pt-4 mx-auto text-center">
          You’ve seen our workflow and execution. We prioritize transparency and
          accountability. If that’s how you want your custom software built,
          let’s talk next steps.
        </p>
        <Link href={"/contact-us"} className=" w-full pt-4 mx-auto text-center">
          <div className="bg-[#3C087E52] transition-all ease-linear hover:bg-[#4D2F8C] border border-[#4D2F8C] md:w-[30%] mt-8 mx-auto text-white py-2 px-4 rounded-md">
            Start the Conversation
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
