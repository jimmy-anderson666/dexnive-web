
import { Metadata } from "next";
import CustomSoftware from "./_components/custom-software";

export const metadata: Metadata = {
  title: "Dexnive's expert Custom Software Development Services",
  description:
    "Custom software development services built for your business needs. The experts designing and scaling reliable solutions that support long-term growth.",
};

const page = () => {
  return (
    <div>
      <CustomSoftware />
    </div>
  );
};

export default page;
