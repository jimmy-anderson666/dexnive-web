import { Metadata } from "next";
import ContactUs from "./_components/contact-us"


export const metadata: Metadata = {
  title: "Dexnive's Contact Us",
  description:
    "Dexnive's Contact Us",
};
const page = () => {
  return (
    <div><ContactUs/></div>
  )
}

export default page