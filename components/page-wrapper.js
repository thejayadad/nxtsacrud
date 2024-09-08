import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <div className='w-full p-4 min-h-screen'>
        <div
            className='max-w-screen-lg mx-auto xl:px-20 md:px-10 sm:px-2 px-4'

        >
            {children}
        </div>
    </div>
  )
}

export default PageWrapper