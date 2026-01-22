import Development from '@/components/development'

const processSteps = [
  {
    title: "The Phase of Planning",
    subtitle: "Understanding Goals & Needs",
    description:
      "The first step to the development begins with understanding your requirements and challenges. For us, understanding the goal means setting better alignment for everyone.",
    imagePath: "/images/home/working/planning.png",
  },
  {
    title: "Prototype and Design",
    subtitle: "Trying Ideas Quickly",
    description:
      "We design user interfaces and create interactive prototypes early on. This helps validate ideas quickly, ensure consistent user experiences, and set a clear direction before development starts.",
    imagePath: "/images/home/working/prototyping.png",
  },
  {
    title: "Agile Development",
    subtitle: "Iterative Progress",
    description:
      "Development is out in structured sprints, allowing for continuous progress. This approach ensures flexibility, steady delivery, and controlled execution while maintaining quality and timelines.",
    imagePath: "/images/home/working/agile.png",
  },
  {
    title: "Assuring the Quality",
    subtitle: "Final Reality Check",
    description:
      "Each sprint release goes through detailed testing to ensure performance and reliability. Identifying issues early helps reduce risk and ensures smooth functionality across devices and environments.",
    imagePath: "/images/home/working/qa.png",
  },
  {
    title: "Sprint Demos",
    subtitle: "Stay Aligned",
    description:
      "Regular Sprint demo conducts are a great way to review progress, gather feedback, and stay aligned with stakeholders. It ensures that the product continues to move in the right direction.",
    imagePath: "/images/home/working/sprint.png",
  },
  {
    title: "Deployment & Launch",
    subtitle: "Smooth Release",
    description:
      "We handle a controlled deployment process to ensure smooth releases, operational readiness, and minimal disruption when your product goes live.",
    imagePath: "/images/home/working/dep.png",
  },
  {
    title: "Post-Launch Support",
    subtitle: "Continuous Improvement",
    description:
      "Once the app is launched, the team continues to monitor and provide support. Also we help you refine it to keep performance strong and security intact.",
    imagePath: "/images/home/working/post.png",
  },
];

const WayOfDevelopment = () => {
  return (
    <div>
        <Development header='The Dexnive Way of Development'
        p='For the team, following a structured Agile workflow means better control over the entire development process. Making sure the process is fast and keeping your product flexible and aligned at every stage.'
        process={processSteps}
        />
    </div>
  )
}

export default WayOfDevelopment