import ChooseUs from "@/components/choose-us";
import Hero from "./hero";
import Story from "./story";
import Vision from "./vision";
import Careers from "./careers";
import CallToAction from "@/components/cta";

const valuePropositions = [
  {
    title: "Personalized Solutions, Not Templates",
    description:
      "Every product we build is custom-crafted to fit your goals, users, and business model. We avoid reinvented structures and one-size-fits-all approaches.",
  },
  {
    title: "Focusing on Engineering Expertise",
    description:
      "Our professional team specializes in modern technologies and problem-solving, ensuring your product is built with professionalism, security, and scalability in mind.",
  },
  {
    title: "Always-on Collaboration",
    description:
      "We stay closely connected with you throughout the entire journey, providing constant support and clear communication whenever it is needed.",
  },
  {
    title: "Smart Talent Through Smart Execution",
    description:
      "Our tech experts bring experience, creativity, and discipline to every project, turning complexity into simple, reliable solutions.",
  },
  {
    title: "Flexible Ways of Working",
    description:
      "Whether you need a full team, project-based delivery, or long-term support, we adapt our workflow to match your business requirements.",
  },
  {
    title: "Clear Process with Full Transparency",
    description:
      "From planning to delivery, we maintain an open, structured, and easy-to-follow process, keeping you fully informed about the current state of your product.",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Vision />
      <ChooseUs
        subHeading="Why Dexnive?"
        heading="How we raise the Bar"
        p="Choosing the right tech partner matters. At the Dexnive, we combine the skill, structure and transparency to deliver the real value."
        choose={valuePropositions}
      />
      <Careers />
      <CallToAction btnText="Explore the Possibilities" header="Wondering if Dexnive is the right fit?" p="Talk to our team today and make your decision. Because the best partnerships start with the right questions, not rushed decisions." imgPath="/images/about-us/cta.png" />
    </div>
  );
};

export default AboutUs;
