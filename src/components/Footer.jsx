import React from 'react'
import { exploreLinks, servicesLinks, contactLinks } from '../constants'
import { mappiyalogo } from '../assets'

const Footer = () =>  (
  <footer id='contacts' className={`flex xs:flex-row flex-col xs:justify-start xs:items-start justify-center items-center max-w-full gap-y-10`}>

    <div className='flex sm:justify-center sm:items-center items-start '>
      <img src={mappiyalogo} alt="" className='w-[300px]'/>

    </div>

    <div className=' flex sm:flex-row flex-col-reverse sm:justify-evenly justify-center container max-w-full gap-y-10 gap-x-7'>
        <div className='sm:ml-0 ml-[55px]'>
            <h1 className='font-poppins font-bold uppercase text-red'>Explore</h1>
            {exploreLinks.map((explore)=> (
              <ul key={explore.id}>
                <li>{explore.link}</li>
              </ul>
            ))}
        </div>

        <div className='sm:ml-0 ml-[55px]'>
            <h1 className='font-poppins font-bold uppercase text-red'>Services</h1>
            {servicesLinks.map((service)=> (
              <ul key={service.id}>
                <li>{service.link}</li>
              </ul>
            ))}
        </div>

        <div className='container max-w-md '>
          <h1 className='font-poppins font-bold text-red uppercase text-start ml-[55px]'>Contacts</h1>
                {contactLinks.map((contact) => (
                  
                  <div key={contact.id} className='flex flex-row container max-w-full items-center '> 
                  
                    <div  className='flex justify-center items-center w-[55px] h-[55px] '>
                      <img src={contact.icon} alt={contact.title}/>
                    </div>
                    
                    <div key={contact.id} className='flex justify-start items-center leading-none'>
                      
                        <ul  className=''>
                          <li className='max-w-[250px]'>{contact.link}</li>
                        </ul>  
                      </div>
                      
                    </div>
                
                ))}
        </div>
    </div>
  </footer>
)


export default Footer

