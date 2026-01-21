"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DexniveApart = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="py-10 relative">
      <Image
        src="/images/home/bg.png"
        alt="dexnive-apart"
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-screen-2xl mx-auto md:w-[40%] text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          So, What Makes Dexnive Different?
        </h1>
        <p className="text-lg font-medium pt-4 text-center">
          There’s no “standard process” here. And we understand that each
          project is unique so your project with it’s own uniqueness. The team
          works alongside you and make sure everything stays manageable.
        </p>
      </div>
      <div className="min-h-screen flex md:w-[60%] mx-auto items-center justify-center px-6 py-20">
        <div className="grid md:grid-cols-12 relative z-30 md:grid-rows-10 gap-4 max-w-7xl w-full">
          {/* Card 1 */}
          <motion.div
            className="col-span-4 relative  row-span-4 border-2 border-[#99999940] h-[330px] rounded-2xl p-5 text-white bg-[#840ECD] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i1.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">100% Custom Development</h3>
            <p className="text-sm text-white/80">
              Not the “one-size-fits-all” approach. We build according to your
              needs.
            </p>
            <Image
              src="/images/home/dex-apart/l1.png"
              alt="dexnive-apart"
              width={200}
              height={200}
              className="absolute bottom-0 right-0 rounded-br-2xl"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="col-span-4 row-span-3 border-2 border-[#99999940] h-[230px] rounded-2xl p-5 text-white bg-[#53029B] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i2.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-white/80">
              Questions, changes, or urgent help — we’re available when you need
              us.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="col-span-4 relative row-span-4 border-2 border-[#99999940] h-[330px] rounded-2xl p-5 text-white bg-[#222222] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i3.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">
              Specialized Engineering Teams
            </h3>
            <p className="text-sm text-white/70">
              Engineers who understand your product, not just your codebase.
            </p>
            <Image
              src="/images/home/dex-apart/l2.png"
              alt="dexnive-apart"
              width={200}
              height={200}
              className="absolute bottom-0 right-0 rounded-br-2xl"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="col-span-4 relative row-span-6 border-2 border-[#99999940] h-[480px] rounded-2xl p-5 text-white bg-gradient-to-b from-[#7C1FFF] to-[#4B0082] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i5.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">Flexible Engagement Models</h3>
            <p className="text-sm text-white/80">
              Dedicated teams, full-stack support, or hybrid models — tailored
              to you.
            </p>
            <Image
              src="/images/home/dex-apart/l4.png"
              alt="dexnive-apart"
              width={250}
              height={250}
              className="absolute bottom-0 right-0 rounded-br-2xl"
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="col-span-4 relative row-span-8 border-2 border-[#99999940] h-[440px] rounded-2xl p-5 text-white bg-[#222222] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i4.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">
              200+ Skilled Technology Experts
            </h3>
            <p className="text-sm text-white/70">
              Proven specialists matched precisely to your project requirements.
            </p>
            <Image
              src="/images/home/dex-apart/l3.png"
              alt="dexnive-apart"
              width={200}
              height={200}
              className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full rounded-b-2xl"
            />
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="col-span-4 relative row-span-6 border-2 border-[#99999940] h-[480px] rounded-2xl p-5 text-white bg-[#840ECD] overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/images/home/dex-apart/i6.png"
              alt="dexnive-apart"
              width={30}
              height={30}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">Transparent Process</h3>
            <p className="text-sm text-white/80">
              You always know what’s happening, what’s next, and why.
            </p>
            <Image
              src="/images/home/dex-apart/l5.png"
              alt="dexnive-apart"
              width={250}
              height={250}
              className="absolute bottom-0 right-0 rounded-br-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center relative z-30 md:-mt-40 mb-20">
        <button className="px-8 py-2 rounded-full border border-[#7C1FFF] text-white hover:bg-[#7C1FFF] transition">
          Explore the Possibilities
        </button>
      </div>
    </div>
  );
};

export default DexniveApart;
