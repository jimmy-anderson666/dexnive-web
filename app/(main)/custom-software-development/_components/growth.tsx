import Services from "@/components/services";
export const customAppServices = [
  {
    title: "Software Consulting",
    description:
      "Our software consulting service provides clarity before committing to a build. We help businesses assess the situation, explore options, and make informed decisions that align with their goals.",
    image: "/images/custom-app/growth/i1.png"
  },
  {
    title: "Custom Software Development Services",
    description:
      "When generic tools don’t fit your workflows, our team builds custom software solutions tailored to your business. We ensure your software works the way your business actually operates.",
    image: "/images/custom-app/growth/i2.png"
  },
  {
    title: "UI/UX Design and Prototyping",
    description:
      "We remove confusion and make software intuitive. Our UI/UX design and prototyping services focus on problem-solving and creating interfaces that support real user workflows and journeys.",
    image: "/images/custom-app/growth/i3.png"
  },
  {
    title: "System Integration",
    description:
      "We ensure all your tools, platforms, and systems work together seamlessly. Our system integration services prevent disconnected workflows and create a cohesive software ecosystem.",
    image: "/images/custom-app/growth/i4.png"
  },
  {
    title: "Cloud-Based Solutions",
    description:
      "We build flexible cloud-based solutions so teams can focus on productivity instead of infrastructure. Our approach considers your current operations and future scalability needs.",
    image: "/images/custom-app/growth/i5.png"
  },
  {
    title: "Enterprise Software Development",
    description:
      "We develop stable, secure software for high-volume, critical systems. Our solutions integrate smoothly with internal teams and existing platforms, ensuring long-term reliability and performance.",
    image: "/images/custom-app/growth/i6.png"
  },
  {
    title: "Software Maintenance & Support",
    description:
      "Our maintenance services monitor system performance, address issues before they escalate, and ensure your software remains reliable, secure, and ready for future updates.",
    image: "/images/custom-app/growth/i7.png"
  },
  {
    title: "MVP Development for Startups",
    description:
      "We build focused, functional MVPs to validate startup ideas quickly. Our approach identifies the smallest viable product that proves the concept while saving time and resources.",
    image: "/images/custom-app/growth/i8.png"
  }
];



const Growth = () => {
  return (
    <div>
      <Services
        heading="The Core Custom Software Development Services "
        p="Our custom software development services are designed to cover the entire lifecycle of your product from the first conversation to long after launch. We don’t just step in to write code and disappear. We take ownership of the process and stay involved at every stage."
        services={customAppServices}
        sHeading="What Software Development as a Service Means?"
      />
    </div>
  );
};

export default Growth;
