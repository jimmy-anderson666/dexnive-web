"use client";
import React from "react";
import Logo from "../logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    // { href: '/products', label: 'Products' },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Study" },
    { href: "/locations", label: "Locations" },
    // { href: '/contact-us', label: 'Contact Us', isButton: true },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto w-[80%] py-10 ">
      <Logo />

      <div className="fixed z-50 top-10 left-[50%] ">
       
          <div className="flex items-center bg-[#5e05a600] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-90 px-4  translate-x-[-50%] border border-[#FFFFFF14]  rounded-full text-base font-medium p-1 gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-primary" : "text-white"
                } `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
         <div className="fixed z-50 top-10 right-[10%] ">
          <Link href={"/contact-us"} className="bg-linear-to-l transition-all ease-linear hover:shadow-[0px_0px_30px_0px_rgba(132,14,205,1)] bg-[#5E05A6] text-sm shadow-[0px_0px_30px_0px_rgba(132,14,205,0.25)] from-[#FFFFFF]/20 to-[#FFFFFF73]/10 text-white border-2 border-[#840ECD] px-4 py-1 rounded-full" >Contact Us</Link>
         </div>
      </div>

  );
};

export default Navbar;
