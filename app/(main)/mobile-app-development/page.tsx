
import { Metadata } from "next";
import MobileApp from "./_components/mobile-app";

export const metadata: Metadata = {
  title: "An expert Mobile App Development Company for Businesses",
  description:
    "Dexnive is a mobile app development company building reliable iOS and Android apps. Helping startups and growing teams turn ideas into scalable products.",
};

const page = () => {
  return (
    <div>
      <MobileApp />
    </div>
  );
};

export default page;
