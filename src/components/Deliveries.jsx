import React from 'react'
import styles from '../style'
import { servicesImg } from '../constants'

const Deliveries = () => (
    <section id='services' className={`${styles.flexCenter} ${styles.paddingY} flex flex-col container max-w-full h-auto items-center justify-center gap-y-10 sm:my-0 my-32`}>
        <div className='container max-w-4xl '>
            <h1 className={`${styles.heading4} text-center text-black font-bold`}>What We <span className='text-red'>Deliver</span></h1>
            <p className='font-poppins sm:text-[17px] text-[14px] text-center'>"Swift and reliable, our delivery service ensures your products reach you on time, every time. Experience the convenience of seamless shipping as we bring your orders directly to your doorstep."</p>
        </div>
        
        <div className={`flex md:flex-row flex-wrap justify-center items-center `}>
            {servicesImg.map((img, index) => (
                <div key={img.id}>
                    <img src={img.image} alt={img.title} className={`sm:w-[161px] sm:h-[161px] xs:w-[100px] xs:h-[100px] w-[70px] h-[70px] m-5 hover:drop-shadow-4xl duration-500 rounded-[27px] ${index === servicesImg.length - 5 ? 'cursor-pointer' : 'cursor-default'}`}/>
                     <p className='text-center font-bold uppercase font-poppins text-black'>{img.title}</p>
                </div>
               
            ))}
        </div>
    </section>
        
  )


export default Deliveries