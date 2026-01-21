import Hero from "./_components/hero";
import CreateWithDexnive from "./_components/create-with-dexnive";
import { Metadata } from "next";
import Projects from "./_components/projects";
import DexniveApart from "./_components/dexnive-apart";
import Working from "./_components/working";
import Industries from "./_components/industries";
import Testimonals from "./_components/testimonals";
import Vision from "./_components/vision";
import FaqSection from "./_components/faq";
import CTA from "./_components/cta";

export const metadata: Metadata = {
  title: "Mobile App Development Company for Modern App | Dexnive",
  description:
    "Top Mobile app development company helping businesses through delivering custom, scalable, and high-performing mobile apps through a reliable process.",
};

const page = () => {
  return (
    <div className="relative">
      <Hero />
      <CreateWithDexnive />
      {/* <Projects /> */}
      <DexniveApart />
      <Working />
      <Industries />
      <Testimonals />
      <Vision />
      <FaqSection />
      <CTA />
    </div>
  );
};

export default page;
