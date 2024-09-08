import React from 'react'
import Box from './box'

const Header = () => {
  return (
    <header className='p-6 border-b'>
    <Box>
    <div className='flex justify-between w-full items-center'>
    <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>
            Logo    
        </h1> 
       
    </div>
    </Box>
</header>
  )
}

export default Header