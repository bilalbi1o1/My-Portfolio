"use client"

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Front-end Development',
    description: 'I can build responsive and user-friendly websites for you using the react and nextjs. My approach ensures that your website looks great on all devices and provides an excellent user experience, keeping visitors engaged.',
    href: "\contact",
  },
  {
    num: '02',
    title: 'Back-end Development',
    description: 'I can build and maintain servers, databases, and application logic. My focus is on creating scalable and efficient systems that ensure your website runs smoothly and securely.',
    href: "\contact",
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description: 'I can create a complete web application from scratch, ensuring seamless integration between the user interface and server-side components. My full-stack expertise ensures a cohesive and fully functional web solution.',
    href: "\contact",
  },
  {
    num: '04',
    title: 'Front and Back-end Integration',
    description: 'By connecting the user interface with back-end services and APIs, I facilitate efficient data exchange and functionality, resulting in a cohesive and high-performing web application.',
    href: "\contact",
  },
  {
    num: '05',
    title: 'Edit Existing Websites',
    description: 'I offer services to update and enhance your existing website. This includes fixing bugs, improving performance, updating content, and adding new features. My goal is to keep your website up-to-date, relevant, and functioning optimally, ensuring it continues to meet your needs and the expectations of your users.',
    href: "\contact",
  },
]

const Services = () => {
  return <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0' >
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return <div key={index} 
            className='flex-1 flex flex-col justify-center gap-6 group'>
            {/* top */}
            <div className='w-full justify-between flex items-center'>
              <div 
              className='text-5xl font-extrabold text-outline text-transparent 
              group-hover:text-outline-hover transition-all duration-500'>
                {service.num}</div>
              <Link href={service.href} 
              className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
               transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                <BsArrowDownRight className='text-primary text-3xl' />
              </Link>
            </div>
            {/* heading */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent
            transition-all duration-500'
            >{service.title}</h2>
            {/* description */}
            <p className='text-white/60'>{service.description}</p>
            {/* border */}
            <div className='border-b border-white/20 w-full'></div>
          </div>
        })}
      </motion.div>
    </div>
  </section>
}

export default Services