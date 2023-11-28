import React from 'react'
import styles from '../style'
import { mappiyalogo } from '../assets'

const About = () =>  (
    <section className='container max-w-full flex xs:flex-row flex-col sm:h-[500px] sm:my-0 my-20flex-col justify-center items-center'>
        <div className='container md:max-w-[50%] max-w-full h-[400px] flex flex-col justify-center items-center bg-dimYellow'>
            <img src={mappiyalogo} alt="logo"  className='w-[300px]'/>
        </div>
        
        <div className={`${styles.paddingY} container md:max-w-[50%] max-w-full h-[400px] flex flex-col justify-center items-start bg-red px-10`}>
            <h1 className='font-poppins font-bold text-white text-[40px] md:text-start text-center w-full'>About us</h1>
            <p className='font-poppins text-white max-w-md text-justify md:text-start sm:text-[17px] text-[14px]'>Mappiya is derived from the language of the Maranao Tribe that means "It's Okay" or "Good". 
            The Mappiya App was created by Yaramay Computer and Maintenance Services, a company located in Manila, Philippines.</p>
            <button className='mt-5 px-1 border-b-white border-b-2 text-white'>Read more</button>
        </div>
    </section>
)


export default About