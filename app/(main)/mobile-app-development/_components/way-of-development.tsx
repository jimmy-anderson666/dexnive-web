import Development from '@/components/development'

 const processSteps = [
  {
    title: "Discovery & Planning",
    subtitle: "Understanding Goals & Needs",
    description:
      "Step one is to focus on goals, requirements, and challenges from the start. This phase defines priorities and success metrics. After this step, everyone understands what to build and the criteria of success.",
    imagePath: "/images/home/working/planning.png",
  },
  {
    title: "Prototype and Design",
    subtitle: "Trying Ideas Quickly",
    description:
      "Designing user interfaces and building interactive prototypes early. This allows quick validation of ideas, consistent user experiences, and clear direction before development begins.",
    imagePath: "/images/home/working/prototyping.png",
  },
  {
    title: "Agile Development",
    subtitle: "Iterative Progress",
    description:
      "Development works through structured sprints, providing continuous delivery. This approach ensures steady progress, flexibility to adapt, and controlled execution while keeping quality and timelines on track.",
    imagePath: "/images/home/working/agile.png",
  },
  {
    title: "Assuring the Quality",
    subtitle: "Final Reality Check",
    description:
      "Every sprint release is tested in detail to ensure performance and reliability. Issues are identified early, reducing risk and ensuring smooth functionality across devices and environments.",
    imagePath: "/images/home/working/qa.png",
  },
  {
    title: "Sprint Demos",
    subtitle: "Stay Aligned",
    description:
      "We regularly conduct sprint demos to review progress. We also gather feedback and maintain alignment, informing stakeholders and ensuring the product evolves in the right direction.",
    imagePath: "/images/home/working/sprint.png",
  },
  {
    title: "Deployment & Launch",
    subtitle: "Smooth Release",
    description:
      "We manage a controlled deployment process, ensuring smooth releases, operational readiness, and minimal disruption when your product goes live.",
    imagePath: "/images/home/working/dep.png",
  },
  {
    title: "Post-Launch Support",
    subtitle: "Continuous Improvement",
    description:
      "Once the app is launched, we continue to support, monitor, and refine the product to help it stay performant, secure, and ready to grow with your business.",
    imagePath: "/images/home/working/post.png",
  },
];

const WayOfDevelopment = () => {
  return (
    <div>
        <Development header='The Dexnive Way of Development'
        p='We follow a structured Agile workflow. The agile workflow brings speed and control to the entire development process. So we can keep your product aligned and adaptable.'
        process={processSteps}
        />
    </div>
  )
}

export default WayOfDevelopment