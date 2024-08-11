import React from 'react'

//components
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='max-lg:fixed max-lg:bottom-0 mb-0 bg-slate-800 w-full h-16 flex items-center justify-between xl:mt-5'>
      <div>
        <Socials containerStyles='flex pl-2 sm:pl-8 gap-6' iconStyles='h-9 w-9 border  
                border-accent rounded-full flex justify-center items-center text-accent 
                text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
      </div>
      <h1 className='mr-5 text-slate-400'>
        ba298466@gmail.com
      </h1>
    </div>
  )
}

export default Footer