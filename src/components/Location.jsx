import React from 'react'
import styles from '../style'
import { location } from '../assets'

const Location = () =>  (
    <section className={`relative container max-w-full sm:h-fit h-[750px] flex flex-col border-4  justify-center items-center`}>
        <img src={location} alt="" className='w-full h-full object-fit'/>
        <div className='absolute container max-w-[800px]  h-full top-0 flex flex-col justify-center items-center gap-y-6 '>
            <h1 className='font-poppins font-semibold text-[40px] text-center'>Delivery <span className='text-red'>Location</span></h1>
            <div className='flex sm:flex-row flex-col  gap-y-10 gap-x-10'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='font-poppins font-semibold text-black uppercase text-[30px]'>Philippines</h1>
                    <div className='flex flex-col container min-w-[300px] min-h-fit bg-red rounded-2xl  justify-center items-center text-white text-center gap-y-4 p-8'>
                        <h1 className='font-poppins font-semibold  tracking-wide text-[30px]'>AVAIL OUR PROMO</h1>
                        <p className='font-poppins text-[14px]'>For franchising worth of 14, 000 pesos</p>
                        <p className='font-poppins text-[14px] mb-5'>Welcome Rider Pinas</p>
                        <p className='font-poppins text-[14px]'>K.S.A and Dubai and UAE</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='font-poppins font-semibold text-black uppercase text-[30px]'>KSA DUBAI</h1>    
                    <div className='container min-w-[300px] min-h-fit rounded-2xl  flex flex-col justify-center items-center text-black gap-y-4 p-8 bg-dimYellow'>
                        <h1 className='font-poppins font-semibold  tracking-wide text-[30px]'>SPECIAL SERVICES</h1>
                        <p className='font-poppins text-[14px]'>Liason service in POLO</p>
                        <p className='font-poppins text-[14px] mb-5'>خدمة الاتصال في مكتب العمل الفلبيني</p>
                        <p className='font-poppins text-[14px]'>K.S.A and Dubai and UAE</p>
                    </div>
                </div>
            </div>
            
            

        </div>
       
            
    </section>
)


export default Location