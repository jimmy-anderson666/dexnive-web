import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link className='relative z-40' href="/">
    <Image src="/logo2.png" alt="logo" width={150} height={150} />
    </Link>
  )
}

export default Logo