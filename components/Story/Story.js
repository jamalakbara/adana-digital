import Image from 'next/image'
import Link from 'next/link'
import TextLink from '../TextLink/TextLink'
import Span from '../Span/Span'
import Title from '../Title/Title'

const Story = ({val, storyRefs}) => {
  const {images, text_title, values} = val

  return (
    <section 
      ref={storyRefs} 
      className="h-screen bg-white flex items-center overflow-hidden
      sm:px-[40px] sm:flex-col
      md:px-20
      lg:flex-row lg:gap-[30px]
      xl:px-[10%]"
    >
      {/* Story Text */}
      <div 
        className='flex-1 flex flex-col justify-center'
      >
        {/* <div
          data-aos='fade-right'
        >
          <Span className='mb-[20px]' text='story' />
        </div> */}

        <div
          data-aos='fade-right'
          data-aos-delay='250'
        >
          <Title className={`text-soft-black`} text={text_title} />
        </div>

        <div 
          className="text-soft-gray 
          sm:text-sm sm:mb-5
          md:text-base md:mb-[70px]"
        >
          <div
            data-aos='fade-right'
            data-aos-delay='350'
          >
            {
              values.map((value, idx) => (
                <p 
                  key={idx}
                  className='last:mb-0 text-soft-black
                  mb-[30px]
                  sm:mb-3
                  md:mb-[6px]'
                >
                  {value}
                </p>
              ))
            }
          </div>
        </div>

        {/* <div
          data-aos='fade-right'
          data-aos-delay='450'
        >
          <TextLink text='read more' />
        </div> */}
      </div>
      
      {/* Story Images */}
      <div className="flex-1 flex flex-row-reverse items-center">
          {
            images.map((image,idx) => (
              <figure 
                data-aos={idx === 1 ? 'fade-up': 'fade-down'}
                data-aos-duration="1000"
                key={idx} 
                className={`relative 
                ${idx === 1 ? '-mr-16 z-10': ''}`}
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
    </section>
  )
}

export default Story