import React, { useState, useEffect } from 'react'
import styles, { layout } from '../style'
import { jollibee, ebenezar, tasters, bulaluhan, supermarket } from '../assets'

import JollibeeMenu from './JollibeeMenu'
import EbenEzarMenu from './EbenEzarMenu'
import BulalohanMenu from './BulalohanMenu'
import TastersMenu from './TastersMenu'


const Restaurants = () => {

    return (
    <section id='restaurants' className={`container max-w-full flex flex-col justify-center items-center`}>
        <h1 className={`${styles.heading4} md:text-start text-center`}>Our Partnered Restaurants</h1>
        <div className='flex flex-row flex-wrap container max-w-full justify-center items-center gap-x-6 '>
            <div className='flex flex-col container max-w-[220px] h-auto hover:drop-shadow-4xl duration-500 justify-center items-center text-center gap-y-1'>
                <img src={jollibee} alt="jollibee" className='object-fit w-[200px] h-[200px]' />
                <h1 className='font-poppins font-semibold text-[18px]'>Jollibee</h1> 
            </div>
            <div className='flex flex-col container max-w-[220px] h-auto hover:drop-shadow-4xl duration-500 justify-center items-center text-center gap-y-1'>
                <img src={ebenezar} alt="jollibee" className='object-fit w-[200px] h-[200px]' />
                <h1 className='font-poppins font-semibold text-[18px]'>Eben Ezar</h1>
            </div>
            <div className='flex flex-col container max-w-[220px] h-auto hover:drop-shadow-4xl duration-500 justify-center items-center text-center gap-y-1'>
                <img src={supermarket} alt="jollibee" className='object-fit w-[200px] h-[200px]' />
                <h1 className='font-poppins font-semibold text-[18px]'>Pinas Supermarket</h1>
            </div>
            <div className='flex flex-col container max-w-[220px] h-auto hover:drop-shadow-4xl duration-500 justify-center items-center text-center gap-y-1'>
                <img src={bulaluhan} alt="jollibee" className='object-fit w-[200px] h-[200px]' />
                <h1 className='font-poppins font-semibold text-[18px]'>Bulalohan sa Riyadh</h1>
            </div>
        </div>

        <button className='font-poppins font-medium bg-orange px-4 py-2 text-white text-[18px] rounded-[10px] my-10'>View More</button>
        
        
    </section>
    
)}


export default Restaurants