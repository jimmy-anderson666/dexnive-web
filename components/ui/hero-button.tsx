import Link from 'next/link'
import React from 'react'

type Props = {
    title:string
}

const HeroButton = ({title}: Props) => {
  return (
     <Link href={"contact-us"} className='cursor-pointer' >
          <button className="bg-linear-to-l transition-all ease-linear hover:shadow-[0px_0px_30px_0px_rgba(132,14,205,1)] hover:bg-[#840ECD] text-sm shadow-[0px_0px_30px_0px_rgba(132,14,205,0.25)] from-[#FFFFFF]/20 to-[#FFFFFF73]/10 text-white border-2 border-[#840ECD] px-10 py-3 rounded-full">
            {title}
          </button>
        </Link>
  )
}

export default HeroButton