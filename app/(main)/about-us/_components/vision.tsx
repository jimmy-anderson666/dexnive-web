import Image from "next/image";


const Vision = () => {
  return (
    <div className="py-20">
      <h1 className="text-3xl md:text-6xl relative z-20 font-bold md:w-[50%] mx-auto max-w-screen-2xl text-center">
        Vision & Philosophy
      </h1>
      <div className="flex lg:flex-row py-20 flex-col  items-center gap-4 justify-center max-w-screen-2xl mx-auto md:w-[80%]">
        <div className="md:w-[620px] group relative overflow-hidden h-[400px] rounded-4xl border border-[#53029B]">
          <Image
            src="/images/home/vision/vision.png"
            alt="vision"
            width={760}
            height={620}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <h1 className="text-4xl font-bold text-center absolute z-20 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 group-hover:opacity-0">
            Our Mission
          </h1>

          <div className="absolute top-0 left-0 w-full h-full px-12 py-16 bg-black/80 text-white flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg">
              Our mission is to build high-quality and high-performance digital
              products from ideas. We believe in disciplined execution,
              thoughtful design, and strong technical foundations. The aim is to
              help businesses by building products they can trust. We plan on
              reducing uncertainty, improving decision-making, and delivering
              software that performs as smoothly in real-world conditions.
            </p>
          </div>
        </div>
        <div className="md:w-[620px] group relative overflow-hidden h-[400px] rounded-4xl border border-[#53029B]">
          <Image
            src="/images/home/vision/vision2.png"
            alt="vision"
            width={760}
            height={620}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <h1 className="text-4xl font-bold text-center absolute z-20 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 group-hover:opacity-0">
            The Vision
          </h1>

          <div className="absolute top-0 left-0 w-full h-full px-12 py-16 bg-black/80 text-white flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <h1 className="text-4xl font-bold mb-6">The Vision</h1>
            <p className="text-lg">
              To become a trusted digital product partner known for precision,
              reliability, and sound judgment. We envision a future where
              digital products are built with intention, where technology
              decisions are strategic, execution is structured, and teams work
              in alignment. Dexnive strives to set a higher standard in the
              digital industry by proving that disciplined processes and clear
              thinking lead to sustainable product success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
