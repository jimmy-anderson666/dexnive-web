import Hero from "./hero";
import Growth from "./growth";
import Working from "./working";

import Testimonials from "@/components/testimonals";
import FAQ from "@/components/faq";
import CallToAction from "@/components/cta";
import WayOfDevelopment from "./way-of-development";
import CTA from "./cta";
import Tech from "./tech";
export const customSoftwareFAQs = [
  {
    question: "Why do teams choose custom software development services?",
    answer:
      "Because their business doesn’t fit into templates. Custom software development services allow teams to build around real processes, real constraints, and long-term growth plans without forcing operations to adapt to generic tools.",
  },
  {
    question: "Is custom software worth it if existing tools almost work?",
    answer:
      "Almost usually becomes expensive over time. When off-the-shelf tools slow teams down, limit integrations, or create manual work, custom software replaces patchwork systems with solutions built to last.",
  },
  {
    question: "What determines the timeline for custom software development?",
    answer:
      "Timelines are shaped by scope, complexity, and clarity. Once goals and requirements are defined, delivery becomes predictable. A structured development process removes confusion and keeps execution under control.",
  },
  {
    question: "How is the cost of custom software development decided?",
    answer:
      "Cost depends on functionality, integrations, and scalability needs. Instead of fixed packages, estimates are based on what actually matters, ensuring investment aligns with business outcomes.",
  },
  {
    question: "How much visibility do you have during development?",
    answer:
      "You have complete visibility. Progress updates are shared regularly, decisions are documented, and feedback is built into the process so you always know what’s happening and why.",
  },
  {
    question: "What happens once the software is delivered?",
    answer:
      "Delivery marks the start of long-term stability. Ongoing maintenance, monitoring, and updates ensure the software remains reliable, secure, and ready for future changes.",
  },
];

const CustomSoftware = () => {
  return (
    <div>
      <Hero /> <Growth />
      <Working />
      <CTA />
      <Tech />
      <WayOfDevelopment />
      <Testimonials />
      <FAQ faqs={customSoftwareFAQs} heading="Commonly Asked Questions" />
      <CallToAction
        imgPath="/images/custom-app/call.png"
        header="Your Idea Deserves the Perfect Execution Now!"
        p=" If generic tools are holding you back, let’s talk through your requirements and challenges and define a software solution built to support your business over time."
        btnText="Get your project started"
      />
    </div>
  );
};

export default CustomSoftware;
