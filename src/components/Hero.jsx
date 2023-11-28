import React from 'react'
import styles from '../style'
import { rider } from '../assets'
// md:pt-[0px] sm:pt-[100px] xs:pt-[5px] pt-80px
const Hero = () => (
    <section id='home' className='container max-w-full flex md:flex-row sm:flex-col flex-col-reverse mt-[80px]  justify-center sm:items-center items-center md:h-[600px] sm:h-[1000px] gap-y-12 '>

        <div className='container md:max-w-md sm:max-w-[50%] max-w-[300px] h-full flex flex-col justify-center items-s'>
           <h1 className='font-poppins font-bold sm:text-[30px] text-[20px]'>WE DELIVER ON YOUR </h1>
           <h1 className='font-poppins font-bold sm:text-[80px] text-[60px] text-red leading-none'>EXPECTED <br />TIME</h1>
           <p className='font-poppins sm:text-[18px] text-[14px] sm:pt-6 pt-4'>Order your products and food anytime and <br />we will deliver directly to your home.</p>

           <div className='container max-w-full flex md:justify-start justify-center items-center py-10'>
            <button className='font-poppins font-semibold text-black sm:text-[16px] text-[12px] bg-dimYellow px-3 py-2 rounded-b-2xl rounded-l-2xl'>Make an Order</button>
            <button className='font-poppins font-semibold text-white sm:text-[16px] text-[12px] bg-red px-3 py-2 rounded-b-2xl rounded-r-2xl'>Book Courier</button>
            </div>
            
        </div>
        
        <div className='relative container sm:max-w-[520px] max-w-[400px] flex justify-center items-center'>
            <img src={rider} alt="" className='sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] z-10 '/>
            <div className='container md:max-w-[400px] md:h-[400px] sm:max-w-[350px] sm:min-h-[350px] max-w-[300px] h-[300px] absolute bg-darkRed rounded-full top-0 right-0 '/>
            
        </div>
       
        
        
        
    </section>
)

export default Hero