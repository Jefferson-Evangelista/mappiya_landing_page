import React from 'react'
import styles from '../style'
import { takoyaki, riceBowl, ramen, dimsum, sushi, foodBundle, beverages } from '../constants'
import CardMenu from './CardMenu'

const EbenEzarMenu = () => {
  return (
    <section className={`${styles.marginX} ${styles.marginY} `}>
        <h1 className={`${styles.heading3}`}>Eben Ezar Menu</h1>
        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Takoyaki</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {takoyaki.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Japanese Rice Bowl</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {riceBowl.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange `}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Ramen</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {ramen.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Dimsum</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {dimsum.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange `}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Sushi</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {sushi.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange `}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Food Bundle</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-xl mx-auto`}>
          {foodBundle.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>
        
        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange `}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Beverages</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} grid md:grid-cols-2 grid-cols-1 gap-x-[36px] gap-y-[24px] container max-w-3xl mx-auto`}>
          {beverages.map((item) => (
            <div className='flex flex-row justify-between items-start'>
              <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
            </div>
            
          ))}
        </div>





        


        
      



        
        
        
    </section>
    
  )
}

export default EbenEzarMenu