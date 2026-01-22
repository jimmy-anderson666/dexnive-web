import Services from "@/components/services";
export const webAppServices = [
  {
    title: "Progressive Web App Development",
    description:
      "A Progressive Web App delivers app-like performance directly through the browser. Our high-performance PWA solutions combine the best of web and mobile experiences, giving users fast, reliable, and engaging functionality without requiring downloads.",
    image: "/images/web-app/growth/i1.png"
  },
  {
    title: "Custom Web App Development",
    description:
      "When off-the-shelf solutions fall short, our custom web application development services step in. We design and build applications tailored precisely to your business requirements, ensuring flexibility, scalability, and long-term value.",
    image: "/images/web-app/growth/i2.png"
  },
  {
    title: "Single Page Web App",
    description:
      "Single-page web applications are ideal for simplicity and speed. Our team builds SPAs with clean architecture and optimized performance, delivering smooth, fast user experiences that strengthen your digital presence.",
    image: "/images/web-app/growth/i3.png"
  },
  {
    title: "Web Portal Development",
    description:
      "Our web portal development services focus on building secure, fully customized portals that centralize your operations. Designed around how your business actually works, these portals improve efficiency and control.",
    image: "/images/web-app/growth/i4.png"
  },
  {
    title: "Enterprise Web App Development",
    description:
      "Enterprise web applications bring structure and clarity to complex workflows. We develop scalable, secure solutions that improve data management, streamline operations, and support enterprise-level growth.",
    image: "/images/web-app/growth/i5.png"
  },
  {
    title: "Cross-Platform Mobile Web App Development",
    description:
      "We build responsive, scalable web applications that perform seamlessly across devices. From planning to launch, our developers ensure consistent UX and reliable performance on all platforms.",
    image: "/images/web-app/growth/i6.png"
  },
  {
    title: "Web App Ecommerce",
    description:
      "Our ecommerce web app solutions focus on speed, performance, and conversion. With intuitive design and high-performance APIs, we create shopping experiences that remain smooth, responsive, and scalable.",
    image: "/images/web-app/growth/i7.png"
  },
  {
    title: "Web App Consulting",
    description:
      "Our web app consulting services help you refine your ideas before development begins. We guide you through strategy, architecture, and feasibility so you can move forward with clarity and confidence.",
    image: "/images/web-app/growth/i8.png"
  }
];

const Growth = () => {
  return (
    <div>
      <Services
        heading="Web App Development Services for Your Business"
        p="You don’t have to juggle multiple teams because we handle everything from planning and design to development and launch, so you can stay focused on your goals. "
        services={webAppServices}
        
      />
    </div>
  );
};

export default Growth;
