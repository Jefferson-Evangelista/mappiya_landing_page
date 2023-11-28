import React from 'react'
import { appStore, googlePlay, landscape } from '../assets'

const CTA = () => (
    <section className='relative container max-w-full h-full justify-start'>
        <img src={ landscape } alt="background" className='w-full h-[680px] object-cover'/>
        <div className='absolute z-10  right-0 bottom-12 container max-w-lg h-fit flex flex-col justify-center items-center bg-blackOpacity p-10'>
            <h1 className={`font-poppins font-bold text-white text-[30px] leading-none mb-5`}>FOOD TRIP BA ANG HANAP MO?</h1>
            <p className='font-poppins text-white mb-5'>Pabili? Padala? Taxi Services like pick and drop? O ano pang hinihintay mo! </p>
            <p className='font-poppins text-white mb-5'>I-download na ang aming Mappiya App o kaya ay mag order gamit ang aming website!</p>
            <div className='flex flex-row container max-w-full xs:justify-start justify-center items-start gap-x-5 mb-10'>
               <img src={googlePlay} alt="" className='w-[110px] h-[35px] rounded-lg'/>
               <img src={appStore} alt="" className='w-[110px] h-[35px] rounded-lg'/>

            </div>
            

            <div className='flex container max-w-fit'>
                
                    <button className='font-poppins font-semibold text-black sm:text-[16px] text-[12px] bg-[rgba(255,222,89)] px-3 py-2 rounded-b-2xl rounded-l-2xl'>Make an Order</button>
                    <button className='font-poppins font-semibold text-white sm:text-[16px] text-[12px] bg-[rgba(255,2,2)] px-3 py-2 rounded-b-2xl rounded-r-2xl'>Book Courier</button>
               
                
            </div>

           

            

        </div>
        
    </section>
)


export default CTA


{/* <div className={`p-10 absolute right-20 bottom-12 max-w-[523px] h-[450px] bg-blackOpacity `}>
    <h1 className={`font-poppins font-bold text-white text-[30px] leading-none mb-5`}>FOOD TRIP BA ANG HANAP MO?</h1>
    <p className='font-poppins text-white mb-5'>Pabili? Padala? Taxi Services like pick and drop? O ano pang hinihintay mo! </p>
    <p className='font-poppins text-white mb-10'>Download na ang aming Mappiya App o kaya ay mag order gamit ang aming website!</p>
    <div className='flex flex-wrap items-start w-5/6 gap-y-6 gap-x-8'>
        <button className='bg-orange font-semibold w-[159px] h-[43px] text-white text-[14px] rounded-[20px] active:bg-slate-700'>MAKE AN ORDER</button>
        <button className='bg-orange font-semibold w-[159px] h-[43px] text-white text-[14px] rounded-[20px] active:bg-blackOpacity'>MAKE AN ORDER</button>
        
        <img src={ googlePlay } alt="" />
        <img src={ appStore } alt="" />
    </div>
</div> */}
        