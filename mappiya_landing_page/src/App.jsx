import React from 'react'
import styles, { layout } from './style'
import { Navbar, Hero, Deliveries} from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>``
    <div className={`${layout.section}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    <Hero />
    <Deliveries />
  </div>
    
)


export default App