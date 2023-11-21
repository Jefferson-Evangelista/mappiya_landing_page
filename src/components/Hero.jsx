import React from 'react'
import styles from '../style'
import { rider } from '../assets'

const Hero = () => (
    <section id='home' className='container max-w-full flex flex-row pt-[70px] justify-center items-start'>
        <div className='container max-w-md flex flex-col justify-center items-start h-[520px]'>
           <h1 className='font-poppins font-bold text-[30px]'>WE DELIVER ON YOUR </h1>
           <h1 className='font-poppins font-bold text-[80px] text-red leading-none'>EXPECTED <br />TIME</h1>
           <p className='font-poppins text-[18px] pt-6'>Order your products and food anytime and <br />we will deliver directly to your home.</p>

           <div className='container max-w-full flex justify-start items-center py-10'>
            <button className='font-poppins font-semibold text-black text-[16px] bg-dimYellow px-3 py-2 rounded-b-2xl rounded-l-2xl'>Make an Order</button>
            <button className='font-poppins font-semibold text-white text-[16px] bg-red px-3 py-2 rounded-b-2xl rounded-r-2xl'>Book Courier</button>
            </div>

            
        </div>
        <div className='absolute top-20 right-32  bg-darkRed w-[440px] h-[440px] rounded-full ' />
        <div className='container max-w-[50%] flex justify-center '>
            
            <img src={rider} alt="" className='absolute' />
        </div>
       
        
        
        
    </section>
)

export default Hero