import React from 'react'

const Background = ({children, className}) => {
  return (
    <div
    style={{
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        backdropFilter: 'blur(19px) saturate(180%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
      className={className}
    >
        {children}
    </div>
  )
}

export default Background