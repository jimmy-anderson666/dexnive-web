"use client"
import { motion } from "framer-motion";
import Image from "next/image";


const cardVariant = {
  hidden: (i:number) => ({
    opacity: 0,
    y: 50,
    transition: { delay: i * 0.1 }
  }),
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

interface Props {
  services: {
    title: string;
    description: string;
    image: string;
  }[];
}

export default function DynamicGrid({services}:Props) {
  const totalCards = services?.length;
  const remainder = totalCards % 3; // For lg screens (3 columns)
  
  // Calculate which cards should span extra columns
  const getCardClassName = (index:number) => {
    const isLastRow = index >= totalCards - remainder && remainder !== 0;
    
    if (isLastRow && remainder === 1) {
      // Last card spans all 3 columns on lg screens
      return "lg:col-span-3";
    } else if (isLastRow && remainder === 2) {
      // Last 2 cards each span 1.5 columns (we'll use col-span-3 and split with grid)
      return "";
    }
    
    return "";
  };

  return (
    <div className="">
     <div className="grid grid-cols-1 max-w-screen-2xl mx-auto w-[80%] md:grid-cols-2 lg:grid-cols-6 py-12 gap-2 relative z-20">
           {services.map((service, index) => {
          const totalCards = services.length;
          const remainder = totalCards % 3;
          const isInLastRow = index >= totalCards - remainder && remainder !== 0;
          
          return (
            <motion.div
              key={service.title}
              custom={index % 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className={`bg-[#0A0118] rounded-xl overflow-hidden group relative pb-8 border-[#840ECDBF] border-4 shadow-md ${
                // Normal cards span 2 columns (out of 6) to make 3 cards per row
                !isInLastRow ? 'lg:col-span-2' : ''
              } ${
                // Last row with 1 card: span all 6 columns
                isInLastRow && remainder === 1 ? 'lg:col-span-6' : ''
              } ${
                // Last row with 2 cards: each spans 3 columns (half of 6)
                isInLastRow && remainder === 2 ? 'lg:col-span-3' : ''
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="group-hover:scale-110 transition-all duration-300 ease-linear w-full"
              />
              <div className="px-8">
                <h2 className="text-lg font-bold relative z-30 text-white">
                  {service.title}
                </h2>
                <p className="text-sm mt-2 text-[#9B96B0] relative z-30">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
    
    </div>
  );
}