import React, { useEffect, useState } from 'react'
import { logo, close, menu } from '../assets'
import styles from '../style'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <nav className={`fixed top-0 left-0 z-50 sm:px-16 px-6 container max-w-full h-[70px] flex flex-row py-3 bg-white`}>

          <div className='flex flex-row justify-start items-center gap-x-2'>
            <img src={ logo } alt="logo" className='w-[60px]'/>
            <h1 className='font-poppins font-bold text-[26px] text-black uppercase tracking-widest'>Mappiya</h1>
          
          </div>

          <ul className='md:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text-[16px] mr-4 text-black  `}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
      
                </li>
              ))}
          </ul>
    
          
            
          <div className='md:hidden flex container max-w-full'>
            <img 
            src={toggle ? close : menu}
            alt='menu' 
            className={`w-[30px] h-[30px] border-2 bg-black absolute sm:right-30 right-11 top-5`}
            onClick={() => setToggle((prev) => !prev)}
            
            />

            <div className={`${toggle ? 'flex' : 'hidden'} bg-white  p-6 absolute top-12 right-6 my-2 rounded-none sidebar `}
            >
              <ul className='list-none container flex flex-col justify-end items-center'>
                  {navLinks.map((nav, index) => (
                  <li
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-black  `}
                  >
                      <a href={`#${nav.id}`}>
                      {nav.title}
                      </a>

                  </li>
                  ))}
              </ul>

            </div>

        </div>
        </nav>
    
        
    
    )
}


    


export default Navbar