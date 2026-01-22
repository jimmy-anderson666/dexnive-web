"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

const text = "DEXNIVE";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // delay between letters
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden pt-32 pb-[20%]">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,transparent_0%,#000000_150px)] -z-10" />
      <Image
        src={"/images/elip.png"}
        alt="ellipse"
        width={500}
        height={500}
        className="absolute bottom-0 z-10 left-0"
      />

      <div className="mx-auto w-[80%] relative z-30 max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="">
            <p className="text-2xl font-extralight text-nowrap">
              Ready to{" "}
              <span className="text-white font-bold">revolutionise</span>
              <br />
              your business communications with
              <br />
              <span className="font-bold text-white">unrivalled speed?</span>
            </p>

            <button className="mt-6 tracking-widest rounded-full text-xs px-12 p-4 bg-linear-to-b from-[#840ECD] to-[#53029B]">
              GET IN TOUCH
            </button>

            <p className="mt-8 text-xs ">
              Copyright © Dexnive. All Rights Reserved.
            </p>
          </div>

          <div className="col-span-0"></div>
          <div className="text-sm ">
            <p className="mb-4 text-xs uppercase tracking-wider ">Phones</p>
            <p>+92 21 345-222-44</p>
            <p>+92 21 345-333-44</p>

            <p className="mt-4">info@dexnive.co.uk</p>

            <p className="mt-6 text-xs uppercase tracking-wider ">Address</p>
            <p className="mt-2">
              Head Office Suite A-104,
              <br />
              Mehran Suites, Shahrah-e-Faisal,
              <br />
              Karachi
            </p>

            <p className="mt-4 text-xs  cursor-pointer">→ Get Directions</p>
          </div>

          <div className="text-sm ">
            <p className="mb-4 text-xs uppercase tracking-wider ">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li className="hover:text-white transition cursor-pointer">
                Mobile App Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Web App Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Custom Software Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TextAnimate
        duration={1}
        by="character"
        style={{
          WebkitTextStrokeWidth: "20px",
          WebkitTextStrokeColor: "#0f0f0f",
          fontWeight: 1000,
        }}
        className="absolute uppercase tracking-wide text-[#65656526] -bottom-40 -left-10 font-black  text-[24vw] text-nowrap!"
      >
        Dexnive
      </TextAnimate>
    </footer>
  );
};

export default Footer;
