'use client'

import React from 'react'
import { MoveDown } from 'lucide-react'

const Section = ({ ref }: { ref: React.MutableRefObject<null> }) => {
  return (
    <section 
      ref={ref}
      className='main-hero
        relative bg-no-repeat bg-cover bg-center bg-fixed 
        h-screen flex items-center
        sm:px-[40px]
        md:px-20
        xl:px-[10%]' 
      style={{backgroundImage: `url(/img/bg-hero.png)`}}
    >
      <div 
        className='z-10 flex flex-col
        gap-[117px] mt-20
        sm:gap-16 sm:mt-0
        md:gap-24'
      >
        <div 
          className='flex
          gap-x-64
          sm:flex-col-reverse sm:h-auto sm:gap-y-6
          lg:flex-row lg:gap-x-20
          xl:h-80'
        >
          <div 
            className='self-end'
            data-aos='fade-right'
            data-aos-delay='200'
          >
            <p 
              className='text-white font-sans font-light
              sm:text-sm
              md:text-base'
            >
              .
            </p>

            <div 
              className='flex flex-col self-start
              gap-[30px]
              sm:text-left sm:gap-1
              lg:text-right lg:gap-4'
            >
              {/* Number */}
              <span 
                className='text-white opacity-70 flex
                sm:text-xs sm:justify-start
                md:text-sm 
                lg:justify-end'
                data-aos='fade-right'
              >
                .
              </span>

              {/* Title */}
              <h1 
                className='text-white font-serif font-normal
                sm:text-3xl sm:leading-10
                md:text-[56px] md:leading-[72px]'
                data-aos='fade-right'
                data-aos-delay='150'
              >
                Collaborative Growth Through Impactful Digital Strategies
              </h1>
            </div>
          </div>

          <div 
            className='absolute flex justify-between left-0 bottom-24 w-full
            sm:px-[40px] sm:bottom-28
            md:px-20
            xl:px-[10%]'
          >
            {/* Information to scroll */}
            <div
              data-aos='fade-up'
            >
              <MoveDown
                color='white'
                className='h-10 w-8 cursor-pointer transition-all ease-in-out hover:opacity-70'
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              />
            </div>

            {/* Button */}
            <div 
              className='flex items-center cursor-pointer
              gap-[25px] text-white text-2xl'
              data-aos='fade-up'
              data-aos-delay='150'
            >
              Let&apos;s Discuss
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section