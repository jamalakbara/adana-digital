import Image from "next/image"
import TextLink from "../TextLink/TextLink"
import Span from "../Span/Span"
import Title from "../Title/Title"

const Concept = ({conceptRefs}) => {
  const conceptImages = [
    {
      src: "ornament-480.png",
      width: 272,
      height: 272,
      dataAos: {
        animation: 'fade-down',
        delay: "0",
        duration: "1000"
      }
    },
    {
      src: "ornament-480.png",
      width: 171,
      height: 171,
      dataAos: {
        animation: 'fade-up',
        delay: "750",
        duration: "1000"
      }
    },
    {
      src: "ornament-480.png",
      width: 217,
      height: 217,
      dataAos: {
        animation: 'fade-up',
        delay: "500",
        duration: "1000"
      }
    },
  ]
  
  return (
    <section 
      ref={conceptRefs} 
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
            <Span text='WHY ADANA?' className={`text-soft-black`} />

            <Title text='Adana Digital focus to craft performance marketing strategy and digital media to achieve measurable impact in order to accelerate business growth' className='leading-[60px] text-soft-black' />
            <Title text='Recognizing that every company is unique, we aim to provide excellence strategies by taking a customized approach for each of our partners' className='leading-[60px] text-soft-black' />

            {/* <TextLink text='Read More' /> */}
          </div>
        </div>

        {/* Background Images */}
        <div className='absolute flex w-full h-3/4'>
          {
            conceptImages.map((image, idx) => (
              <div 
                key={idx} 
                className={`realtive w-full animate-spin ${idx === 0 ? '' : (idx === 1 ? 'self-end' : 'self-center flex justify-end')}`}
                >
                <Image 
                  className={`delay-[${idx * 500}ms] duration-[${idx*1}s]`}
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

export default Concept