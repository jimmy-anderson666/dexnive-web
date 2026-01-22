import TrustedTech from "@/components/trusted-tech";
import React from "react";

const techStack = [
  { title: "iOS", image: "/images/tech/mobile/i1.png" },
  { title: "Android", image: "/images/tech/mobile/i2.png" },
  { title: "Flutter", image: "/images/tech/mobile/i3.png" },
  { title: "React", image: "/images/tech/mobile/i4.png" },
  { title: "Expo", image: "/images/tech/mobile/i5.png" },
  { title: "Node.js", image: "/images/tech/mobile/i6.png" },
  { title: "Firebase", image: "/images/tech/mobile/i7.png" },
  { title: "Github", image: "/images/tech/mobile/i8.png" },
];

const Tech = () => {
  return (
    <div>
      {" "}
      <TrustedTech
        heading="Tech Stack We Use to Build Scalable Products"
        p="We’re aware of the fact that we’re not just building apps, we’re turning someone’s vision into an app, so we use modern, tested and latest technologies to build applications that are fast, secure, and future-ready."
        techStack={techStack}
      />
    </div>
  );
};

export default Tech;
