import ChooseUs from "@/components/choose-us";

export const executionChoose = [
  {
    title: "Execution-First Mindset",
    description:
      "We don’t just go with promises; we start with execution. Every mobile app project is planned carefully and delivered consistently so your idea becomes a real, usable product, not just a concept.",
  },
  {
    title: "Clear Processes, No Guesswork",
    description:
      "Our team follows structured workflows with realistic timelines and clear milestones. You always know what’s happening and what’s next, making collaboration transparent and predictable.",
  },
  {
    title: "Built for Scale, Not Just Launch",
    description:
      "We design apps to grow with your business. Every feature, decision, and architecture choice is made for scalability, future updates, and smooth integrations, ensuring your product is ready for long-term growth.",
  },
  {
    title: "Direct Collaboration, No Middle Layers",
    description:
      "You work directly with the developers building your app. This ensures faster decisions, clearer communication, and full accountability—foundations for trusted, long-term partnerships.",
  },
  {
    title: "Built for Your App Goals",
    description:
      "Every app has unique challenges and objectives. We start by understanding your users and business goals so that features, design, and architecture are perfectly aligned with your vision.",
  },
  {
    title: "200+ Skilled Mobile App Experts",
    description:
      "Our team brings experienced mobile app developers ready to tackle your project. You don’t waste time training new hires—our experts deliver high-performance apps that scale with your product.",
  },
];


const Working = () => {
  return (
    <div className="py-10 relative">
      <ChooseUs
        choose={executionChoose}
        heading="What It’s Like Working With Dexnive"
        p="Most agencies promise results. Few actually deliver. Dexnive exists for teams who want mobile app development services built on clarity, accountability, and execution; not empty assurances."
        subHeading="Why Choose Us"
      />
    </div>
  );
};

export default Working;
