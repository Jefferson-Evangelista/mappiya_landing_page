import React from 'react'

const CardMenu = ({ title, image, info, price }) => (
    <div className='flex md:flex-row flex-col gap-x-4'> 
            <img src={ image } alt='' className='rounded-md max-w-[120px] max-h-[120px]'/>
        <div>
                <h1 className={`font-poppins font-semibold  text-[22px]`}>{ title }</h1>  
                <p className={`font-poppins font-normal text-[14px] `}>{ info }</p> 
                <p className='font-poppins font-normal text-[10px]'> <span className='text-[18px] font-bold'>{ price }</span> SAR</p>   
        </div>
    </div>
)


export default CardMenu

