import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-full min-h-screen flex items-start justify-center'>
      {children}
    </div>
  )
}

export default layout
