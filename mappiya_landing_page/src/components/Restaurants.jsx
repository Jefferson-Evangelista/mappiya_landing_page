import React, { useState, useEffect } from 'react'
import styles, { layout } from '../style'
import { jollibee, ebenezar, tasters, bulaluhan } from '../assets'

import JollibeeMenu from './JollibeeMenu'
import EbenEzarMenu from './EbenEzarMenu'
import BulalohanMenu from './BulalohanMenu'
import TastersMenu from './TastersMenu'


const Restaurants = () => {
    const [ menu, setMenu] = useState (<JollibeeMenu/>)

    
    useEffect(() => {
        menu
    },[menu]) 

    return (
    <section id='restaurants' className={`flex flex-col `}>
        <h1 className={`${styles.heading4} md:text-start text-center`}>Our Partnered Restaurants</h1>
        <div className='flex flex-row flex-wrap gap-5 justify-center items-start my-5'>
            <button onClick={() => setMenu(<JollibeeMenu/>)} className='hover:shadow-xl active:shadow-md rounded-full p-6'>
                <div className='flex flex-col w-[175px] h-[175px] justify-center items-center'>
                    <img src={ jollibee } alt="jollibee" className='w-[150px] h-[150px] '/>
                    <h1 className={`font-poppins font-semibold text-black text-[26px] text-center pt-1`}>Jollibee</h1>
                </div> 
            </button>
            
            <button onClick={() => setMenu(<EbenEzarMenu/>)} className='hover:shadow-xl active:shadow-md rounded-full p-6'>
                <div className='flex flex-col w-[175px] h-[175px] justify-center items-center'>
                    <img src={ ebenezar } alt="ebenezar" className='w-[130px] h-[130px]'/>
                    <h1 className={`font-poppins font-semibold text-black text-[26px] text-center pt-1`}>Eben Ezar</h1>
                </div>
            </button>
            <button onClick={() => setMenu(<TastersMenu/>)} className='hover:shadow-xl active:shadow-md rounded-full p-6'>
                <div className='flex flex-col w-[175px] h-[175px] justify-center items-center'>
                    <img src={ tasters } alt="tasters" className='w-[130px] h-[130px]'/>
                    <h1 className={`font-poppins font-semibold text-black text-[20px] leading-5 text-center pt-1`}>Taster's <br/> House</h1>
                </div>
            </button>
            <button onClick={() => setMenu(<BulalohanMenu/>)} className='hover:shadow-xl active:shadow-md rounded-full p-6'>
                <div className='flex flex-col w-[175px] h-[175px] justify-center items-center'>
                    <img src={ bulaluhan } alt="bulaluhan" className='w-[130px] h-[130px]'/>
                    <h1 className={`font-poppins font-semibold text-black text-[20px] leading-5 text-center pt-1`}>Bulalohan <br/> sa Riyadh</h1>
                </div>
            </button>
            
            
        </div>
        {menu}
        
    </section>
    
)}


export default Restaurants