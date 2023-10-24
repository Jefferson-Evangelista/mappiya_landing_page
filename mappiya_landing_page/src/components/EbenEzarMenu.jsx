import React from 'react'
import styles from '../style'
import { riceBowl, takoyaki, ramen, dimsum, sushi, foodBundle, beverages } from '../constants'
import CardMenu from './CardMenu'

const EbenEzarMenu = () => {
  return (
    <section className={`${styles.marginX} ${styles.marginY} `}>
        <h1 className={`${styles.heading3}`}>Eben Ezar Menu</h1>
        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>TAKOYAKI</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {takoyaki.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>JAPANESE RICE BOWL</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {riceBowl.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>
        
        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>RAMEN</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {ramen.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>DIMSUM</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {dimsum.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>SUSHI</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {sushi.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>FOOD BUNDLE</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {foodBundle.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>

        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>BEVERAGES</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {beverages.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/> 

          ))}
        </div>
      



        
        
        
    </section>
    
  )
}

export default EbenEzarMenu