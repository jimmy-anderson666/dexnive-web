import Services from "@/components/services";
export const mobileAppServices = [
  {
    title: "Cross-Platform App Development",
    description:
      "We’re the perfect choice for cross-platform app development. Our high-performance apps work seamlessly across multiple devices, helping you reach more users faster while saving time and reducing costs.",
    image: "/images/mobile-app/growth/i1.png"
  },
  {
    title: "Android App Development",
    description:
      "Our Android app development services focus on building secure, feature-rich apps tailored to your business goals. From MVPs to full-scale products, we deliver solutions ready for real users and growth.",
    image: "/images/mobile-app/growth/i2.png"
  },
  {
    title: "iOS App Development Services",
    description:
      "We design iOS apps with performance, polish, and scalability in mind. Our apps meet Apple’s standards, deliver smooth user experiences, and are built to grow with your business.",
    image: "/images/mobile-app/growth/i3.png"
  },
  {
    title: "UI/UX Design Services",
    description:
      "Design drives adoption and retention. Our UI/UX design services create intuitive, user-first experiences that feel natural and simple, increasing engagement and customer satisfaction.",
    image: "/images/mobile-app/growth/i4.png"
  },
  {
    title: "Prototyping",
    description:
      "We turn ideas into interactive prototypes early in the process. Prototyping validates concepts, reduces risk, and ensures alignment before development begins.",
    image: "/images/mobile-app/growth/i5.png"
  },
  {
    title: "Software Quality Testing",
    description:
      "Every app we build undergoes thorough quality testing. Our software testing ensures reliable performance, stability, and smooth functionality across devices and platforms.",
    image: "/images/mobile-app/growth/i6.png"
  }
];


const Growth = () => {
  return (
    <div>
      <Services
      
        heading="Everything Your App Needs"
        p="Dexnive isn’t just here to build apps; we partner with ambitious teams to create digital products that win users and scale with confidence. Our team of experts designs and develops mobile experiences that are built to perform from first idea to long-term growth."
        services={mobileAppServices}
        sHeading="Mobile App Development Services"
      />
    </div>
  );
};

export default Growth;
