import React from 'react'
import styles, { layout } from '../style'
import { rider } from '../assets'

const Rates = () => (
    <section className={`${layout.sectionReverse} my-24 container max-w-full flex md:flex-row justify-start items-center h-full  bg-yellow`}>

        <div className='container min-h-fit flex flex-col grow justify-center items-center gap-y-2'>
            <h1 className='font-poppins font-semibold text-[40px] text-black text-center leading-none py-6'>Delivery <span className='text-red'>Rates</span></h1>
            <div className='flex sm:flex-row flex-col justify-center items-center container max-w-full h-fit  gap-y-6 gap-x-10'>
                <div className='bg-dimYellow container sm:min-w-fit max-w-fit h-fit flex flex-col justify-center items-center rounded-md py-3 px-6 gap-y-3'>
                    <h1 className='font-poppins font-bold  text-[18px] text-black'>Philippines</h1>
                    <div className='leading-none font-poppins text-[14px]'>
                        <p>30 php Base Fare</p>
                        <p>+3 Php (0-5km)</p>
                        <p>+2 Php ( after 5 km)</p>
                    </div>
                    

                </div>
                <div className='bg-red container sm:min-w-fit max-w-fit h-fit text-white flex flex-col justify-center items-center rounded-md py-3 px-6 gap-y-3'>
                    <h1 className='font-poppins font-bold text-[18px] text-white '>KSA Riyadh</h1>
                    <div className='leading-none font-poppins text-[14px]'>
                        <p>15 SR Base Fare</p>
                        <p>+2.50 Riyal (0-5km)</p>
                        <p>5 Riyal (after 5km)</p>
                    </div>
                </div>

            </div>
            
            
        </div>
        <div className='container max-w-[40%] flex justify-center my-10'>
            <img src={rider} alt="" />
        </div>
        
        
        
        
    </section>
       
    
)


export default Rates

