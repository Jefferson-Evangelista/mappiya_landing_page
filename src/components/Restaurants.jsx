import styles, { layout } from '../style'
import { jollibee, ebenezar, bulaluhan, supermarket } from '../assets'


const Restaurants = () => {

    return (
    <section id='restaurants' className={`container max-w-full h-auto flex md:flex-row flex-wrap justify-center items-center gap-y-6 my-40`}>
        <div className='container max-w-[600px] flex flex-col justify-center items-center text-center '>
            <h1 className={`${styles.heading4}  `}>Our <span className='text-red'>Partners</span></h1>
            <p className='font-poppins sm:text-[17px] text-[14px] max-w-md'> By joining forces with some of the finest entities in the country, we're driving innovation, fostering growth, and shaping success together</p>
        </div>
        
        <div className='flex flex-row flex-wrap container lg:max-w-[40%] justify-center items-center gap-x-6 gap-y-4 '>
            
                <img src={jollibee} alt="jollibee" className='object-fit sm:w-[200px] sm:h-[200px] w-[140px] h-[140px]' />
                {/* <h1 className='font-poppins font-semibold text-[18px] text-orange'>Jollibee</h1>  */}
            
                <img src={ebenezar} alt="jollibee" className='object-fit sm:w-[200px] sm:h-[200px] w-[140px] h-[140px]' />
                {/* <h1 className='font-poppins font-semibold text-[18px] text-orange'>Eben Ezar</h1> */}
          
                <img src={supermarket} alt="jollibee" className='object-fit sm:w-[200px] sm:h-[200px] w-[140px] h-[140px]' />
                {/* <h1 className='font-poppins font-semibold text-[18px] text-orange'>Pinas Supermarket</h1> */}
           
                <img src={bulaluhan} alt="jollibee" className='object-fit sm:w-[200px] sm:h-[200px] w-[140px] h-[140px]' />
                {/* <h1 className='font-poppins font-semibold text-[18px] text-orange'>Bulalohan sa Riyadh</h1> */}
            
        </div>

      
        
    </section>
    
)}


export default Restaurants