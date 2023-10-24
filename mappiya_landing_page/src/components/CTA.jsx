import React from 'react'
import { appStore, googlePlay, landscape } from '../assets'

const CTA = () => (
    <section className='relative w-full justify-start'>
        <img src={ landscape } alt="background" className='w-full h-[600px]'/>
        <div className={`p-10 absolute right-20 bottom-12 max-w-[523px] h-[450px] bg-blackOpacity `}>
            <h1 className={`font-poppins font-bold text-white text-[30px] leading-none mb-5`}>FOOD TRIP BA ANG HANAP MO?</h1>
            <p className='font-poppins text-white mb-5'>Pabili? Padala? Taxi Services like pick and drop? O ano pang hinihintay mo! </p>
            <p className='font-poppins text-white mb-10'>Download na ang aming Mappiya App o kaya ay mag order gamit ang aming website!</p>
            <div className='flex flex-wrap items-start w-5/6 gap-y-6 gap-x-8'>
                <button className='bg-orange font-semibold w-[159px] h-[43px] text-white text-[14px] rounded-[20px] active:bg-slate-700'>MAKE AN ORDER</button>
                <button className='bg-orange font-semibold w-[159px] h-[43px] text-white text-[14px] rounded-[20px] active:bg-blackOpacity'>MAKE AN ORDER</button>
               
                <img src={ googlePlay } alt="" />
                <img src={ appStore } alt="" />
            </div>
        </div>
        
    </section>
)


export default CTA