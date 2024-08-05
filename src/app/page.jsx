'use client'

import { Button } from '../components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

//Components
import Stats from '../components/Stats'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Bilal Ahmad'], // Array of words to type
    loop: true,             // Boolean indicating if it should loop
    typeSpeed: 150,          // Typing speed in ms
    deleteSpeed: 70,        // Deleting speed in ms
    delaySpeed: 1000,       // Delay between typing and deleting in ms
  });

  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col  items-center justify-between xl:pt-1 xl:pb-10' >
          {/* text */}
          <div className='text-center xl:justify-center order-2 xl:order-none'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h2 '>
              Hello I'm <br /> <span className='text-accent'>{text}</span>
              <Cursor />
            </h1>
            <p className='max-w-[500px] mb-5 text-white/80'>
              a passionate Full Stack Developer with a strong foundation in both front-end and
              back-end development, I create dynamic, responsive, and user-friendly web applications.</p>

            {/* CV Button*/}
            <div className='flex flex-col items-center gap-8'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/cv.pdf" download="CV.pdf" className="flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </a>
              </Button>
            </div>
          </div >

        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home