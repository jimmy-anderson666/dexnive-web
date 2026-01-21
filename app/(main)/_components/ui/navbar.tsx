"use client"
import React from 'react'
import Logo from '../logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


type Props = {}

const Navbar = (props: Props) => {
     const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    // { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Study' },
    { href: '/locations', label: 'Locations' },
    { href: '/contact-us', label: 'Contact Us', isButton: true },
  ];
  return (
    <div className='max-w-screen-2xl mx-auto w-[80%] py-10 ' ><Logo/>
    
<div className='fixed z-50 top-10 left-[50%] bg-[#5e05a600] bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-90 pl-6  translate-x-[-50%] border border-[#FFFFFF14]  rounded-full' >
    <div className='flex items-center text-base font-medium p-1 gap-5' >
           {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? 'text-primary' : 'text-white'
              } ${link.isButton ? 'bg-primary text-white px-4 py-1 rounded-full' : ''}`}
            >
              {link.label}
            </Link>
          ))}
    </div></div></div>
  )
}

export default Navbar