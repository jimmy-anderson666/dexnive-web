import Hero from "./hero";
import Growth from "./growth";
import Working from "./working";
import Tech from "./tech";
import Testimonials from "@/components/testimonals";
import FAQ from "@/components/faq";
import CallToAction from "@/components/cta";
import WayOfDevelopment from "./way-of-development";
import CTA from "./cta";
export const mobileAppFAQs = [
  {
    question:
      "Does your company typically work with startups or more established businesses?",
    answer:
      "We work with both startups and established businesses. Our mobile app development process adapts to your stage, whether you’re validating an idea, building an MVP, or scaling an existing product.",
  },
  {
    question: "How do you guarantee clear communication during development?",
    answer:
      "We maintain structured updates, shared documentation, and direct access to your development team. This ensures you always know the current progress, priorities, and decisions without chasing for answers.",
  },
  {
    question: "Can you work with our existing team or an ongoing project?",
    answer:
      "Yes. We collaborate smoothly with in-house teams and can audit existing codebases, continue development, and improve stability and delivery speed without disrupting your current workflow.",
  },
  {
    question: "What technologies are your go-to for development?",
    answer:
      "We use modern web and mobile technologies selected based on product goals, performance requirements, and long-term maintainability rather than one-size-fits-all solutions.",
  },
  {
    question: "How much time does it take to start a project?",
    answer:
      "Once requirements are aligned, onboarding happens quickly. Team setup and planning are handled efficiently so development can start without unnecessary delays.",
  },
  {
    question: "Do you also manage app maintenance and updates after launch?",
    answer:
      "Yes. We view launch as one stage of the product lifecycle. We continue to support feature updates, maintenance, and security improvements as your app evolves.",
  },
];

const MobileApp = () => {
  return (
    <div>
      <Hero /> <Growth />
      <Working />
      <CTA/>
      <Tech />
      <WayOfDevelopment />
      <Testimonials />
      <FAQ faqs={mobileAppFAQs} heading="FAQs"  />
      <CallToAction imgPath="/images/mobile-app/call.png" 
      header="Let’s Start With a Question"
      p="If something here resonates, the next step doesn’t have to be a commitment. It can simply be a conversation. No rehearsed pitch, no pressure to proceed. Just a thoughtful exchange to see what makes sense next."
      btnText="Discuss the Next Step"
      service="Mobile App Development" />
    </div>
  );
};

export default MobileApp;
