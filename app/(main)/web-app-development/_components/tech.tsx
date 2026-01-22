import TrustedTech from '@/components/trusted-tech'
import React from 'react'

const techStack = [
    { title: "HTML", image: "/images/tech/t1.png" },
    { title: "CSS", image: "/images/tech/t2.png" },
    { title: "JavaScript", image: "/images/tech/t3.png" },
    { title: "React", image: "/images/tech/t4.png" },
    { title: "Vue.js", image: "/images/tech/t5.png" },
    { title: "Angular", image: "/images/tech/t6.png" },
    { title: "Next.js", image: "/images/tech/t7.png" },
    { title: "AWS / Vercel", image: "/images/tech/t8.png" },
    { title: "GitHub", image: "/images/tech/t9.png" }
  ];

const Tech = () => {
  return (
    <div>   <TrustedTech heading='Tech Stack We Use to Build Scalable Products' p='When we’re building web apps, we start with a mindset that we’re not just building web apps; we’re turning your vision into reality, so no compromise on the tech stack. That’s why we use proven, up-to-date technologies to build secure applications that scale as your business grows.' techStack={techStack} /></div>
  )
}

export default Tech