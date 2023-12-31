import React from 'react'
import styles from './style'
import { Navbar, Hero, Deliveries, About, Restaurants, Rates, Location, CTA, Footer } from './components';

const App = () => (
  <div className='bg-white container max-w-full overflow-hidden'>
    <div className={`${styles.marginX}`}>
      <Navbar/>
    </div>
    <div className={`${styles.marginX} ${styles.marginY} `}>
      <Hero />
    </div>

    <About />

    <div className={`${styles.marginX} ${styles.marginY} `}>
      <Deliveries />
    </div>

    <div className={`${styles.marginX} ${styles.marginY}`}>
      <Restaurants />
    </div>
    <div className={`bg-dimWhite ${styles.paddingX}`}>
      <Rates />
      
    </div>
    <div className={`${styles.marginY}`}>
      <Location />
    </div>
    
    <CTA />
    <div className={`${styles.marginX} ${styles.marginY} `}>
      <Footer />
    </div>

    
  </div>
    
)


export default App