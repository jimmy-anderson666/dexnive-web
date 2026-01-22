import Image from "next/image"
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

interface Props {
    techStack: typeof techStack;
    heading: string;
    p: string;
}

const TrustedTech = ({techStack , heading , p}:Props) => {
  return (
    <div className="py-28 relative">
    <Image
        src="/images/home/bg.png"
        alt=""
        width={1500}
        height={1500}
        className="absolute top-0 left-0 w-screen h-full z-10"
      />
          <div className="max-w-screen-2xl relative z-30 mx-auto md:w-[50%] text-center">
            <h1 className="text-3xl md:text-6xl leading-[1.1] font-bold text-center">
             {heading}
            </h1>
          </div>
            <p className="text-lg   relative z-30 md:w-[60%] mx-auto max-w-screen-2xl text-center font-medium pt-4">
            {p}
            </p>

            <div className="flex relative max-w-screen-2xl mx-auto md:w-[65%] flex-wrap items-center justify-center pt-8 gap-10" >
                {techStack.map((item , index) => (
                    <div key={index} className="flex hover:scale-105 transition-all relative z-10 bg-[#FFFFFF26] px-5 py-4  rounded-[8px] items-center justify-center gap-5">
                        <Image src={item.image} alt={item.title} width={50} height={50} />
                        <p className="text-center">{item.title}</p>
                    </div>
                ))}
            </div>
</div>
  )
}

export default TrustedTech