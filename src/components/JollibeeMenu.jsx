import React from 'react'
import styles from '../style'
import CardMenu from './CardMenu'
import { meal } from '../constants'

const JollibeeMenu = () => {
  return (
    <section className={`${styles.marginX} ${styles.marginY} `}>
        <h1 className={`${styles.heading3}`}>Jollibee Menu</h1>
        <div className={`${styles.paddingY2} ${styles.paddingX2} mt-10 bg-orange rounded-xl rounded-b-none`}>
          <h1 className={`font-poppins font-semibold text-[24px] text-white`}>Meal</h1>
        </div>
        <div className={`${styles.paddingY2} ${styles.paddingX2} flex flex-wrap gap-4 justify-between items-center mx-5`}>
          {meal.map((item) => (
            <CardMenu title={item.title} image={item.img} info={item.description} price={item.price}/>
          ))}
        </div>
    </section>
  )
}

export default JollibeeMenu