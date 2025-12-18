import React from 'react'
import logo from '../../../assets/emon.png'

const Header = () => {
  return (
    <div className=''>
    <div className='flex justify-between container mx-auto items-center '>
      <div>
        <img className='w-[150px] h-auto' src={logo} alt="" />

      
      </div>
      <div>
        
      <nav className='flex text-black gap-4 text-xl'>
 
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>

      </nav>

    </div>



      </div>
    </div>
  )
}

export default Header


