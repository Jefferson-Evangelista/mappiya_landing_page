import React from 'react'
import styles from './style'
import { Navbar, Hero, Deliveries, Restaurants, Rates, Location, CTA, Footer } from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={``}>
      <Navbar/>
    </div>
    <Hero />
    <div className={`${styles.marginX} ${styles.marginY} `}>
      <Deliveries />
    </div>

    <div className={`${styles.marginX} ${styles.marginY}`}>
      <Restaurants />
    </div>
    <div className={`bg-dimWhite ${styles.paddingX}`}>
      <Rates />
      
    </div>
    <Location />
    <CTA />
    <div className={`${styles.marginX} `}>
      <Footer />
    </div>

    
  </div>
    
)


export default App