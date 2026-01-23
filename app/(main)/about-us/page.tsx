import React from "react";
import AboutUs from "./_components/about-us";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dexnive's Story",
  description:
    "Dexnive's Story",
};

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;
