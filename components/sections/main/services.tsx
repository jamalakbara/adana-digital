'use client'

import Title from '@/components/client/Title'
import React, { useEffect, useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from 'next/link';

import glodana from '@/public/assets/glodana-logo.svg'

const Section = ({ ref }: { ref?: React.MutableRefObject<null> }) => {
  const images = [
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Performance Marketing',
      href: '#performance-marketing',
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Digital Media Buying',
      href: '#media-buying',
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Marketplace Management',
      href: '#marketplace-management',
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Digital Corporate Training',
      href: '#corporate-training',
    },
    {
      src: 'product1.png',
      width: 373,
      height: 278,
      title: 'Creative Solution',
      href: '/gladana',
    },
  ]

  return (
    <section 
      ref={ref} 
      className='h-screen bg-soft-black flex flex-col justify-center'
    >
      <div 
        className="
        sm:px-[40px]
        md:px-20
        xl:px-[10%]"
      >
        <div 
          className="flex
          justify-between mb-[70px]
          sm:flex-col sm:items-start
          lg:flex-row lg:items-end"
        >
          <div
            data-aos='fade-right'
            data-aos-delay='200'
          >
            <Title
              text='Evolving Together to utilize Innovative Digital Solutions to Develop Your Brand.' 
              className='leading-[44px] max-w-2xl
              sm:mt-[14px] 
              lg:mb-0' 
            />
          </div>

          <div
            data-aos='zoom-in-up'
            data-aos-delay='250'
          >
          </div>
        </div>
      </div>

      <div 
        className="
        sm:pl-[40px]
        md:pl-20
        xl:pl-[10%]"
      >
        <Carousel
          arrows
          className=""
          containerClass=""
          dotListClass=""
          itemClass=""
          partialVisible
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 20
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
        >
          {
            images.map((image,idx) => (
              <Link
                key={idx}
                href={image.href}
                className='transition-all ease-in-out hover:opacity-70'
              >
                <h1 className='text-white text-2xl mb-4' style={{ visibility: idx === images.length-1 ? 'visible' : 'hidden' }}>Our Services</h1>
                <div 
                  className={`max-w-[${image.width}px]`}
                >
                  {/* Image */}
                  <div 
                    className={`relative h-[${image.height}px]`}
                  >
                    <Image 
                      src={`/img/${image.src}`}
                      alt={image.src}
                      width={image.width}
                      height={image.height}
                    />
                  </div>

                  {/* Information */}
                  <div 
                    className="flex 
                    mt-[20px]
                    sm:gap-3
                    md:gap-[23px]"
                  >
                    {/* Number */}
                    <p className="text-white font-sans font-light
                    mt-1
                    sm:text-sm 
                    md:text-base">
                      {`0${idx + 1}`}
                    </p>

                    {/* Title and href */}
                    <div>
                      {/* Title */}
                      <h1 
                        className="text-white font-sans font-normal
                        sm:text-xl
                        md:text-2xl"
                      >
                        {image.title}
                      </h1>

                      {/* Vendor */}
                      {idx === images.length-1 ? <div
                        className="text-soft-gray font-sans font-light capitalize flex flex-row gap-4 align-middle
                        sm:text-sm
                        md:text-base"
                      >
                        <span>by: </span>
                        <Image src={glodana} alt="" width={100} /> 
                      </div> : null}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}

export default Section