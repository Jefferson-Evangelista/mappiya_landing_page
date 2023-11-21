import React from 'react'
import styles, { layout } from '../style'
import { rider } from '../assets'

const Rates = () => (
    <section className={`${layout.sectionReverse} justify-around items-center w-full`}>
        <div className={`flex flex-col flex-1 `}>
            <h1 className={`${styles.heading4} mb-10 uppercase`}>Delivery Rates</h1>
            <div className='flex md:flex-row flex-col w-full justify-around md:items-start'>
                <div className="bg-orange max-w-[283px] rounded-[20px] px-14 mr-5 md:mb-0 mb-6">
                    <h1 className={`font-poppins font-semibold text-gradient2 text-center text-[30px] mt-6 uppercase `}>Philippines</h1>
                    <div className='mt-2 mb-8 font-bold'>
                        <p>30 php Base Fare</p>
                        <p>+3 Php (0-5km)</p>
                        <p>+2 Php ( after 5 km)</p>

                    </div>
                    
                </div>
                <div className="bg-orange max-w-[383px] rounded-[20px] px-14 ">
                    <h1 className={`font-poppins font-semibold text-gradient2 text-center text-[30px] mt-6 uppercase w-full`}>KSA Riyadh</h1>
                    <div className='mt-2 mb-8 font-bold'>
                        <p>15 SR Base Fare</p>
                        <p>+2.50 Riyal (0-5km)</p>
                        <p>5 Riyal (after 5km)</p>

                    </div>
                    
                </div>
            </div>
        </div>
        <img src={rider} alt="rider" className='w-[400px] h-[484px]'/>
        
    </section>
       
    
)


export default Rates