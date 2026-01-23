import { Metadata } from 'next';
import WebAppDevelopment from './_components/web-app-development'


export const metadata: Metadata = {
  title: "Trusted Web App Development Services for Businesses",
  description:
    "Providing the trusted Web app development services built with clarity and performance. We plan and deliver secure web apps that grow with your business.",
};
const page = () => {
  return (
    <div><WebAppDevelopment/></div>
  )
}

export default page