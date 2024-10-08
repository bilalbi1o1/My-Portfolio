"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from "next/image"

//components
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: '01',
    title: 'Business App Crud',
    category: 'Full-Stack',
    description: "A full stack Crud application with proper authentication and front and back-end integration with dataBase connection.",
    stack: [
      { name: "React js" },{ name: "Node js" }, { name: "Express" },{ name: "CSS" },{ name: "MySql" },{ name: "JWT" },
    ],
    image: "/projectPhoto/p1Thumbnail.png",
    live: "",
    github: "https://github.com/bilalbi1o1/Business-App-Crud"
  },
  {
    num: '02',
    title: 'Dos Shell',
    category: 'Data-Structures',
    description: "Dos Shell project with all the basic functionalitites of a dos shell implemented using Tree data structure.",
    stack: [
      { name: "C++" },
    ],
    image: "/projectPhoto/dosThumbnail.png",
    live: "",
    github: "https://github.com/bilalbi1o1/DosShell"
  },
  {
    num: '03',
    title: 'Excel',
    category: 'Data-Structures',
    description: "Excel project with all the basic functionalitites of excel implemented using Linked Lists.",
    stack: [
      { name: "C++" },
    ],
    image: "/projectPhoto/excelThumbnail.png",
    live: "",
    github: "https://github.com/bilalbi1o1/miniExcel"
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => 
  {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4,duration:0.4 ,ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
           order-2 xl:order-none" >
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline
               " >{project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item,index) => {
                    return <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                })}
              </ul>
              {/* border */}
                <div className="border border-white/20">
                </div>
                {/* button */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                 {project.live && <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
                      flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl 
                        group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>}
                  {/* github project button */}
                  <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
                      flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl 
                        group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]" >
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[500px] mb-4"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project,index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[380px] relative group flex justify-center 
                  items-center bg-transparent ">
                    {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full
                      bg-black/10 z-10"></div>
                    {/* image */}
                      <div className="relative w-full h-full ">
                        <Image src={project.image} layout="fill" objectFit="contain"
                         className="object-cover"
                        alt="" />
                      </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles=" flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-16 z-20 w-full justify-between 
              xl:w-max xl:justify-none" 
              btnStyles="max-xl:bg-opacity-40 bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
               h-[44px] flex justify-center items-center transition-all"
              iconsStyles="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work