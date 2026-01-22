import Development from '@/components/development'

const processSteps = [
  {
    title: "Discovery & Planning",
    subtitle: "Understanding Goals & Needs",
    description:
      "We ask the perfect questions to plan the next steps. What’s the final goal, a vision for you? What really matters? What might get in the way? This step sets priorities and makes it clear that everyone knows exactly what we’re building.",
    imagePath: "/images/home/working/planning.png",
  },
  {
    title: "Design & Prototyping",
    subtitle: "Trying Ideas Quickly",
    description:
      "We design early, on purpose. Interfaces and interactive prototypes help validate ideas quickly and remove guesswork. It’s how we make sure the product feels right before development begins.",
    imagePath: "/images/home/working/prototyping.png",
  },
  {
    title: "Agile Development",
    subtitle: "Iterative Progress",
    description:
      "Work happens in focused sprints. You see steady progress, not long silences. This approach lets us adapt as things evolve while keeping timelines, quality, and execution under control.",
    imagePath: "/images/home/working/agile.png",
  },
  {
    title: "Quality Assurance",
    subtitle: "Final Reality Check",
    description:
      "Every release is tested carefully—not just at the end, but all the way through. Catching issues early reduces risk and ensures the software works smoothly across real devices and real environments.",
    imagePath: "/images/home/working/qa.png",
  },
  {
    title: "Sprint Reviews",
    subtitle: "Stay Aligned",
    description:
      "Nothing happens behind closed doors. We regularly review progress, walk through what’s been built, and gather feedback. This keeps everyone aligned and the product moving in the right direction.",
    imagePath: "/images/home/working/sprint.png",
  },
  {
    title: "Deployment & Launch",
    subtitle: "Smooth Release",
    description:
      "When it’s time to launch, we handle it carefully. Controlled releases, minimal disruption, and everything ready to run in the real world.",
    imagePath: "/images/home/working/dep.png",
  },
  {
    title: "Post-Launch Support",
    subtitle: "Continuous Improvement",
    description:
      "Launch isn’t the finish line. We stay involved—monitoring, improving, and refining—so your software stays secure, reliable, and ready to grow with your business.",
    imagePath: "/images/home/working/post.png",
  },
];


const WayOfDevelopment = () => {
  return (
    <div>
        <Development header='How We Actually Build Software'
        p='We don’t believe in complicated processes with no results. We follow a structured Agile workflow that works best while staying in control. It gives us the flexibility to adapt and the structure to keep your product on track.'
        process={processSteps}
        />
    </div>
  )
}

export default WayOfDevelopment