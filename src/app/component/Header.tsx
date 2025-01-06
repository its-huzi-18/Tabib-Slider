import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-cyan-300  shadow-lg '>
<nav className='flex justify-between h-20 px-10 items-center  text-white'>
<div className='flex gap-1 items-center'>
    <Image
    className='w-[44px] h-[44px]'
    width={300}
    height={300}
    alt='logo'
    src={'/image/logo.png'} 
    />
    <Image 
    objectFit='contain'
    className='w-[60px] h-[38px]'
    width={300}
    height={300}
    alt='logoText'
    src={'/image/logoText.png'}
    />
</div>
<ul className=' justify-center i text-medium flex gap-16'>
<li>
   Home 
</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>
    </div>
  )
}

export default Header