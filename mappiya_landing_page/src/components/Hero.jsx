import React from 'react'
import styles from '../style'
import { landscape } from '../assets'

const Hero = () => (
    <section class="bg-white " id='home'>
        <div className='relative flex flex-col'>
            <img src={ landscape } alt="" className='max-w-full w-full h-[600px]'/>
            <div className={`absolute max-w-2xl bg-blackOpacity ${styles.marginX} p-8 bottom-8`} >
                <h1 className={`${styles.heading2} md:text-[40px] text-[30px]`}>MAPPIYA</h1>
                <p className='text-white md:text-[16px] text-[12px]'>Mappiya is derived from the language of the Maranao Tribe that means It's Okay or Good. Mappiya App was developed by Yaramay Computer and Maintenance Services that is based on Manila, Philippines.
                <br/> <br/>  The Mappiya App was developed to help our kababayans who have difficulty going out of their homes/workplace to make necessary transactions and purchases elsewhere, whether be it for themselves or their families in K.S.A or Philippines. Choose from the variety of services that we offer like Padala, Pabili, Guided Tour (Riyadh), and Airport Pickup/Dropoff (K.S.A and Manilla). Mappiya also offers discounts for OFW's, Senior Citizens and people Cooperative Members. We are also commited to provide 24/7 support to address your probleme regarding transactions done through the Mappiya App.</p>
            </div>
        </div>
        
    </section>
)

export default Hero