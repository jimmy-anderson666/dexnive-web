"use client";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Careers" },
  ];

  const servicesMenu = [
    {
      href: "/web-app-development",
      label: "Web Development",
      description: "Custom web solutions tailored to your needs",
    },
    {
      href: "/mobile-app-development",
      label: "App Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      href: "/custom-software-development",
      label: "Custom Software Development",
      description: "Bespoke software solutions for your business",
    },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-screen-2xl flex items-center justify-between relative z-50 mx-auto w-[80%] py-10">
      <Logo />

      <div className="flex items-center bg-[#5e05a600] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-90 px-4 border border-[#FFFFFF14] rounded-full text-base font-medium p-1 gap-5">
        {links.slice(0, 1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href ? "text-primary" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Services Dropdown */}
    <div className="relative group" ref={menuRef}>
  <button
    className={`flex items-center gap-1 ${
      pathname.startsWith("/services") ? "text-primary" : "text-white"
    } transition-colors`}
  >
    Services
    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
  </button>

  {/* Dropdown */}
  <div
    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[400px]
      opacity-0 scale-95 pointer-events-none
      transition-all duration-200
      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
  >
    {/* HOVER BRIDGE */}
    <div className="absolute -top-3 left-0 right-0 h-3" />

    <div className="p-3 space-y-1 bg-black border border-white/10 rounded-2xl">
      {servicesMenu.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          className={`block p-3 rounded-lg transition-all hover:bg-[#5E05A6]/30 ${
            pathname === service.href
              ? "bg-[#5E05A6]/30 text-white"
              : "text-white"
          }`}
        >
          <div className="text-sm font-medium mb-1">{service.label}</div>
          <p className="text-xs text-[#9B96B0]">{service.description}</p>
        </Link>
      ))}
    </div>
  </div>
</div>



         {links.slice(1, 3).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href ? "text-primary" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href={"/contact-us"}
        className="bg-linear-to-l transition-all ease-linear hover:shadow-[0px_0px_30px_0px_rgba(132,14,205,1)] bg-[#5E05A6] text-sm shadow-[0px_0px_30px_0px_rgba(132,14,205,0.25)] from-[#FFFFFF]/20 to-[#FFFFFF73]/10 text-white border-2 border-[#840ECD] px-4 py-1 rounded-full"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
