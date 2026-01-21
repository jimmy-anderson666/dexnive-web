"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-black pt-32 pb-[20%]">
      <Image
        src={"/images/elip.png"}
        alt="ellipse"
        width={500}
        height={500}
        className="absolute bottom-0 left-0"
      />
      <div className="absolute inset-0  -top-7 bg-linear-to-t from-purple-900/30 via-black to-black" />

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

  <motion.div
  className="pointer-events-none max-w-screen-2xl mx-auto absolute -bottom-56 left-[47%] -translate-x-1/2 select-none text-center -z-10"
  initial={{ opacity: 0, y: 160 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
>
  <h1 className="bg-white/10 bg-clip-text text-[25vw] font-[1000] tracking-tight text-transparent">
    DEXNIVE
  </h1>
</motion.div>

    </footer>
  );
};

export default Footer;
