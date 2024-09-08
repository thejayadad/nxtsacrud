import Link from 'next/link'
import React from 'react'

const PageText = ({text}) => {
  return (
    <div className='flex items-center space-x-6'>
    <Link className='mb-2' href={'/'}>Back To Home</Link>
   <h1 className="text-3xl font-bold mb-6 text-gray-800">
    {text}
  </h1>
   </div>
  )
}

export default PageText