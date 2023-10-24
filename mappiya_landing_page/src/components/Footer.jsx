import React from 'react'
import styles, { layout } from '../style'
import { exploreLinks, servicesLinks, contactLinks } from '../constants'

const Footer = () =>  (
  <footer id='contacts' className={`${layout.section} justify-between items-start w-full`}>
    <div>
      <h1 className='font-poppins font-bold uppercase'>Explore</h1>
      {exploreLinks.map((explore) => (
          <ul>
            <li>{explore.link}</li>
          </ul>  
      ))}
    </div>
    <div>
      <h1 className='font-poppins font-bold uppercase'>Services</h1>
      {servicesLinks.map((service) => (
          <ul>
            <li>{service.link}</li>
          </ul>  
      ))}
    </div>
    <div>
      <h1 className='font-poppins font-bold text-center uppercase'>Contact Us</h1>
      {contactLinks.map((contact) => (
        <div className='flex flex-row w-full items-start '> 
          <div className='justify-end items-end w-[55px] mb-3'>
          <img src={contact.icon} alt={contact.title} />
          </div>
          
          <div className='justify-start items-center'>
            <ul className=''>
              <li className='max-w-[250px]'>{contact.link}</li>
            </ul>  
          </div>
          
        </div>
          
      ))}
    </div>
    <div >
      <h1 className='font-bold text-center uppercase mb-2'>Message Us</h1>
      <form action="" className='flex flex-col items-center'>
        <input 
          type="text" 
          id="fname" 
          name="fname" 
          placeholder='First name'
          className='bg-dimWhite rounded-[20px] p-2 mb-2'
        />

        <input 
          type="text" 
          id="lname" 
          name="lname"
          placeholder='Last name'
          className='bg-dimWhite rounded-[20px] p-2 mb-2'
        />
        <textarea name="text" id="message" cols="30" rows="8" className='border-black bg-dimWhite p-2 rounded-[20px] w-[194px] h-[116px]'/>
        <button className='w-[166px] h-[37px] text-[16px] font-bold bg-orange text-white text-center rounded-2xl mt-2 active:bg-slate-700'>Submit</button>
      </form>
    </div>
      
 
  </footer>
)


export default Footer