import FloatingLines from "@/components/FloatingLines";
import HeroButton from "@/components/ui/hero-button";
import Image from "next/image";
import Hero from "./hero";
import Growth from "./growth";
import Working from "./working";

import WayOfDevelopment from "./way-of-development";
import Testimonials from "@/components/testimonals";
import FAQ from "@/components/faq";
import CallToAction from "@/components/cta";
import Tech from "./tech";
import CTA from "./cta";

export const webAppFAQs = [
  {
    question: "What is web app development?",
    answer:
      "Web app development is the process of building applications that run directly in a web browser. Users can access and use them through a link without needing to install anything on their device.",
  },
  {
    question: "What is the difference between a web app and a website?",
    answer:
      "A website primarily shares information, while a web app allows users to take action. Web apps enable interactions such as logging in, submitting data, managing workflows, and using dynamic features.",
  },
  {
    question: "How long does web app development take?",
    answer:
      "Timelines depend on the features and complexity of the project. Simple web apps may take a few weeks, while larger applications can require several months. Clear planning and milestones ensure predictable delivery.",
  },
  {
    question: "What’s the usual cost of web apps?",
    answer:
      "The cost depends on your requirements, including features, scope, and complexity. Once the details are defined, we provide a clear and transparent estimate upfront.",
  },
  {
    question: "Can a web app grow as my business grows?",
    answer:
      "Yes. When built with scalability in mind, a web app can handle more users, data, and new features without needing to be rebuilt from scratch.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. After launch, we continue to provide support, updates, and improvements to ensure the application runs smoothly and stays aligned with your business needs.",
  },
];

const WebAppDevelopment = () => {
  return (
    <div>
      <Hero />
      <Growth />
      <Working />
      <CTA />
      <Tech />
      <WayOfDevelopment />
      <Testimonials />
      <FAQ
        faqs={webAppFAQs}
        heading="Everything You Need to Know!"
        subHeading="Frequently Asked Questions"
      />
      <CallToAction
        imgPath="/images/web-app/call.png"
        header="Let’s Start Working on Your Idea"
        p="You’ve seen how we plan and build.  Now let’s discuss the idea and understand what exactly your vision is and figure out the best way to move forward."
        btnText="Talk to the experts"
        service="Web App Development"
      />
    </div>
  );
};

export default WebAppDevelopment;
