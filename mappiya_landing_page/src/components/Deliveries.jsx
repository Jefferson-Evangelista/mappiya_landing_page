import React from 'react'
import styles from '../style'
import { servicesImg } from '../constants'

const Deliveries = () => (
    <section id='services' className={`${styles.flexCenter} ${styles.paddingY} flex flex-col`}>
        <h1 className={`${styles.heading4} `}>What Mappiya Can Deliver?</h1>
        <div className='flex sm:flex-row flex-col m-4 justify-between items-center'>
            {servicesImg.map((img) => (
                <div>
                    <img src={img.image} alt={img.title} className='sm:w-[161px] sm:h-[161px] w-[300px] h-[300px] m-5 hover:shadow-2xl rounded-[27px] '/>
                     <p className='text-center font-bold uppercase font-poppins'>{img.title}</p>
                </div>
               
            ))}
        </div>
    </section>
        
  )


export default Deliveries