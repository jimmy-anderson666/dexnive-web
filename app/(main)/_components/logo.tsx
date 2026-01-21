import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href="/">
    <Image src="/logo.png" alt="logo" width={150} height={150} />
    </Link>
  )
}

export default Logo