import React from 'react'
import Box from './box'

const PageWrapper = ({children}) => {
  return (
    <div className='w-full p-4 min-h-screen'>
        <Box>
            {children}
        </Box>
    </div>
  )
}

export default PageWrapper