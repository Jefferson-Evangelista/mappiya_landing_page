import React from 'react'
import styles from '../style'
import { location } from '../assets'

const Location = () =>  (
    <section className={`flex flex-col`}>
        <img src={ location } alt="location" className='text-center relative max-w-full w-full md:h-[475px] h-[595px]'/>
        <div className={`${styles.paddingX} absolute w-full flex flex-col text-center`}>
            <h1 className={`${styles.flexCenter} ${styles.heading4} mt-5 mb-10 uppercase font-bold text-[30px]`}>Delivery <br className='sm:hidden block '/>Location</h1>
            <div className={`flex md:flex-row justify-around items-center flex-col `}>
                <div className='container bg-card-gradient sm:w-[460px] sm:h-[276px] text-[12px] w-[285px] md:mb-0 mb-10 shadow-2xl text-center pt-5'>
                    <h1 className={`text-white sm:text-[30px] text-[20px] font-bold py-4`}>AVAIL OUR PROMO</h1>
                    <p className='font-bold sm:text-[20px] text-[12px]'>For franchising worth of 14, 000 pesos <br />Welcome Rider Pinas</p>
                    <p className='font-bold sm:text-[20px] text-[12px] py-10'>K.S.A and Dubai and UAE</p>
                </div>
                <div className='container bg-card-gradient sm:w-[460px] text-[12px] w-[285px] sm:h-[276px] md:mb-0 mb-10 shadow-2xl text-center pt-5'>
                    <h1 className={` text-white sm:text-[30px] text-[20px] font-bold py-4`}>SPECIAL SERVICES</h1>
                    <p className='font-bold sm:text-[20px] text-[12px]'>Liason service in POLO <br />خدمة الاتصال في مكتب العمل الفلبيني</p>
                    <p className='font-bold sm:text-[20px] text-[12px] py-10'>K.S.A and Dubai and UAE</p>
                </div>
            </div>

        </div>
    </section>
)


export default Location