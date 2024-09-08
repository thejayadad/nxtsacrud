import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link 
    className='flex items-center'
    href={'/'}>
        <Image
        width={100}
        height={100}
        src='/logo.png'
        alt='logo'
        /><span className='font-light text-white'>WishList Haven</span>
    </Link>
  )
}

export default Logo