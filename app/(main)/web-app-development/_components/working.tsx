import ChooseUs from "@/components/choose-us";

const executionChoose = [
  {
    title: "Execution-First Approach",
    description:
      "We start with execution, not assumptions. Each project handled by Dexnive is planned with a clear path. That’s how we work on web applications. ",
  },
  {
    title: "Clear Processes",
    description:
      "We believe in using well-defined workflows with realistic timelines and clear milestones because transparency builds trust. ",
  },
  {
    title: "Built to Scale Beyond Launch",
    description:
      "We don’t build web apps just to get them live. We build them to grow with your business. From architecture to features, every decision supports scalability, future updates, and smooth integrations down the road.",
  },
  {
    title: "Direct Collaboration, No Middlemen",
    description:
      "You work directly with the team building your product. That means faster decisions, clearer communication, and real accountability, the foundation of long-term partnerships our clients trust.",
  },
  {
    title: "Fit Your Needs",
    description:
      "No two products are ever the same for us. So, we treat them that way. Before we build anything, we take time to understand your goals. Where would you want the product to go next? What are the constraints? That way, the solution is perfect for your business.",
  },
  {
    title: "200+ Skilled Technology Experts",
    description:
      "You don’t need to spend time hiring and training the newbies. You’d get to work with the experienced technology experts who already know how to adapt quickly and work. ",
  },
];

const Working = () => {
  return (
    <div className="py-10 relative">
      <ChooseUs
        choose={executionChoose}
        heading="What It’s Like Working With Dexnive"
        p="A lot of agencies make big promises. Very few focus on what actually matters: delivery. Dexnive is built for teams that want web app development grounded in clarity, accountability, and real execution, not vague commitments."
        subHeading="Why Choose Us"
      />
    </div>
  );
};

export default Working;
