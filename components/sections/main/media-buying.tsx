import React from 'react'
import Image from "next/image"
import Title from "../../client/Title"

const Section = () => {
  const images = [
    {
      src: 'mission1.png',
      width: 403,
      height: 454
    },
    {
      src: 'mission2.png',
      width: 272,
      height: 275
    },
  ]

  return (
    <section 
      className="h-screen bg-soft-black flex items-center overflow-hidden
      px-[131px] 
      sm:px-[40px] sm:flex-col
      md:px-20
      lg:flex-row lg:gap-[30px]
      xl:px-[10%]"
    >
      {/* Image */}
      <div className="flex-1 flex items-center">
        {
          images.map((image,idx) => (
            <figure 
              data-aos={idx === 1 ? 'fade-down': 'fade-up'}
              data-aos-duration="1000"
              key={idx} 
              className={`${idx === 1 ? '-ml-16': ''}`}
            >
              <Image 
                src={`/img/${image.src}`}
                width={image.width}
                height={image.height}
                alt={`${image.src}-${idx}`}
              />
            </figure>
          ))
        }
      </div>

      {/* Text */}
      <div className='flex-1 flex flex-col justify-center'>
        <div
          data-aos='fade-left'
          data-aos-delay='250'
        >
          <Title className='' text='Digital Media Buying' />
        </div>

        <div 
          className="text-soft-gray 
          text-base mb-[70px]
          sm:text-sm sm:mb-5
          md:text-base md:mb-[70px]"
        >
          <div
            data-aos='fade-left'
            data-aos-delay='350'
          >
            <p 
              className='last:mb-0 text-white text-lg
              mb-[30px]
              sm:mb-3
              md:mb-[30px]'
            >
              Resonates your brand through digital media buying
            </p>
            <ul
              className='last:mb-0
              mb-[30px]
              sm:mb-3
              md:mb-[30px]
              ml-[100px]'
            >
              <li>OTT and OLV placement</li>
              <li>Digital Media Advertorials</li>
              <li>Mobile Push Notification</li>
              <li>Digital OOH</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section