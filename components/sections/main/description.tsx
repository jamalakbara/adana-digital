'use client'

import React from 'react'
import Image from "next/image"
import Title from "../../client/Title"
import Paragraph from '@/components/client/Paragraph'

const Section = ({ ref }: { ref?: React.MutableRefObject<null> }) => {
  const conceptImages = [
    {
      src: "concept1.png",
      width: 272,
      height: 219,
      dataAos: {
        animation: 'fade-down',
        delay: "0",
        duration: "1000"
      }
    },
    {
      src: "concept2.png",
      width: 171,
      height: 195,
      dataAos: {
        animation: 'fade-up',
        delay: "750",
        duration: "1000"
      }
    },
    {
      src: "concept3.png",
      width: 217,
      height: 221,
      dataAos: {
        animation: 'fade-up',
        delay: "500",
        duration: "1000"
      }
    },
  ]

  return (
    <section 
      ref={ref} 
      className='h-screen bg-white overflow-hidden
      sm:px-[40px]
      md:px-20
      xl:px-[10%]'
    >
      <div className='relative h-full  flex flex-col justify-center'>
        {/* Text */}
        <div 
          className='text-center z-10'
        >
          <div 
            data-aos='zoom-in-up'
            data-aos-duration='2000'
            data-aos-easing='ease-out-cubic'
          >
            <Title text='Why Adana' className='leading-[60px]' />
            <Paragraph className='text-black w-[800px] mx-auto'>
              <span className='text-green-500'>Adana Digital</span> focus to craft performance marketing strategy and digital media to achieve <span className='text-green-500'>measurable impact</span> in order to <span className='text-green-500'>accelerate business growth</span>
            </Paragraph>
            <Paragraph className='w-[800px] mx-auto'>
              Recognizing that every <span className='text-green-500'>company is unique</span>, we aim to provide excellence strategies by taking a <span className='text-green-500'>customized approach</span> for each of our partners
            </Paragraph>
          </div>
        </div>

        {/* Background Images */}
        <div className='absolute flex w-full h-3/4'>
          {
            conceptImages.map((image, idx) => (
              <div 
                key={idx} 
                className={`realtive w-full ${idx === 0 ? '' : (idx === 1 ? 'self-end' : 'self-center flex justify-end')}`}
                >
                <Image 
                  data-aos={image.dataAos.animation}
                  data-aos-delay={image.dataAos.delay}
                  data-aos-duration={image.dataAos.duration}
                  src={`/img/${image.src}`}
                  alt={image.src}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Section