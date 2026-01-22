import Image from "next/image"
import Link from "next/link"


const CTA = () => {
  return (
    <div className="relative py-20">
        <div className="group ">
            <Image className="absolute group-hover:scale-110 transition-all ease-linear -z-10 top-4 left-1/2 translate-x-[-50%]" src={"/images/mobile-app/cta.png"} alt="" width={1000} height={1000}/>
      
        <div className="max-w-screen-2xl mx-auto md:w-[80%] group-hover:scale-110 transition-all ease-linear">
            <h1 className="text-3xl md:text-6xl md:w-[50%] w-full mx-auto text-center font-bold">
                Have an App Idea or Product Already?
            </h1>
            <p className="text-base md:w-[60%]  w-[95%] pt-4 mx-auto text-center">
              Whether you’re starting from scratch or improving an existing product, Dexnive helps you build, refine, and scale mobile apps that work properly and deliver real results..
            </p>
            <div className="  w-full pt-4 mx-auto text-center">
                <Link href={"/contact-us"} className="bg-linear-to-t from-[#53029B] to-[#840ECD] transition-all ease-linear hover:bg-[#4D2F8C] border border-[#4D2F8C]  mt-8 mx-auto text-white py-2 px-6 rounded-md">
                    Contact Us Today!
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CTA