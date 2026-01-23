import ChooseUs from "@/components/choose-us";

export const executionChoose = [
  {
    title: "Built to Execute, Not Just Promise",
    description:
      "The custom software development process is designed create working products through disciplined planning and consistent delivery."
  },
  {
    title: "A Process You Can Actually Follow",
    description:
      "When it comes to following a process, we have a structured custom software development process. Clear workflow translates to clear milestones, realistic timelines, and regular communication."
  },
  {
    title: "Software That’s Ready to Grow",
    description:
      "The custom software development solutions are designed with growth in mind. From architecture to integrations, every decision is made to support scalability, performance, and future expansion."
  },
  {
    title: "Work Directly With the People Building Your Product",
    description:
      "You’re not just dealing with some names; you’re simply going to work directly with a dedicated development team. A team that’s fully invested in your product. ."
  },
  {
    title: "200+ Skilled Technology Experts",
    description:
      "For custom software development, experience is everything. So we make sure that you don’t have to assemble a team from scratch. The specialists are already bringing proven expertise to build software tailored precisely to your business needs."
  },
  {
    title: "Built Around Your Business Goals",
    description:
      "Every custom software project comes with its own challenges and long-term plans. So, the team takes the time to understand how your business actually runs. Then the process of designing software starts that fits your processes today."
  }
];




const Working = () => {
  return (
    <div className="py-10 relative">
      <ChooseUs
        choose={executionChoose}
        heading="What Sets Our Custom Software Development Apart"
        p="Most agencies promise results. Very few actually deliver them consistently.
Dexnive works with teams who want custom software development solutions built on clarity, accountability, and real execution, not empty assurances."
        subHeading="Why Choose Us"
      />
    </div>
  );
};

export default Working;
