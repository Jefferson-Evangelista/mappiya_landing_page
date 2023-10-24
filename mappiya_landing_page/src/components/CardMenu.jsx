import React from 'react'

const CardMenu = ({ title, image, info, price }) => (
    <div>
        <div className='flex flex-row flex-wrap items-center mb-5 container '>
            <img src={ image } alt='' className='rounded-2xl w-[120px]'/>
            <div className='pl-5 max-w-[210px] items-start '>
                <h1 className={`font-poppins font-semibold  text-[22px]`}>{ title }</h1>  
                <p className={`font-poppins font-normal text-[14px] `}>{ info }</p> 
                <p className='font-poppins font-normal text-[10px]'> <span className='text-[18px] font-bold'>{ price }</span> SAR</p>   
            </div>
        </div>
              
    </div>
)


export default CardMenu