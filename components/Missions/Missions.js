import Image from "next/image"
import Span from "../Span/Span"
import Title from "../Title/Title"

const Missions = ({val}) => {
  const {images, text_title, values} = val

  return (
    <section 
      className="h-screen bg-white flex items-center overflow-hidden
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
        {/* <div
          data-aos='fade-left'
        >
          <Span className='mb-[20px]' text='missions' />
        </div> */}
        
        <div
          data-aos='fade-left'
          data-aos-delay='250'
        >
          <Title className={`text-soft-black`} text={text_title} />
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
      </div>
    </section>
  )
}

export default Missions