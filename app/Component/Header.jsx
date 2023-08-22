import Link from 'next/link'
import React from 'react'
import HomeIcon from './HomeIcon';
const Header = () => {
  return (
    <div className='flex flex-col justify-end items-center gap-2'>
      <div className='flex '>
        <Link href={'/'} className='text-left'>
        <div className='w-64  h-10'></div>
          <HomeIcon />
        </Link>
        <div className='w-64 h-10'></div>
      </div>
      <div className='border border-black w-full'></div>
    </div>
  )
}

export default Header
