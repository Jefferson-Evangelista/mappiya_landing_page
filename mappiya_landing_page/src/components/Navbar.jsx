import React, { useEffect, useState } from 'react'
import { logo, close, menu } from '../assets'
import styles from '../style'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [navbar, setNavbar] =useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground)

    return(
    
        <nav className={`${styles.paddingX2} ${navbar ? 'bg-dimWhite' : 'bg-transparent'} fixed z-10 w-full flex py-4 justify-between items-center navbar offset:100`}>
            <div className='flex justify-center items-center'>
                <img src={ logo } alt="" className='w-[40px]'/>
                <h1 className='font-poppins text-black semi-bold'>Mappiya</h1>
            </div>
    
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black  `}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
    
              </li>
            ))}
          </ul>
            
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
            src={toggle ? close : menu}
            alt='menu'  
            className={`w-[28px] h-[28px] object-contain ${navbar ? 'bg-dimWhite' : 'fill-white'}`}
            onClick={() => setToggle((prev) => !prev)}
            
            />

            <div
            className={`${toggle ? 'flex' : 'hidden'} ${navbar ? 'bg-dimWhite' : 'bg-white'}  p-6 absolute top-12 right-0  my-2 w-full rounded-none sidebar `}
            >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
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