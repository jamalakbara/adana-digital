import Span from "../Span/Span"
import TextLink from "../TextLink/TextLink"
import Title from "../Title/Title"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const Products = ({productsRefs}) => {
  const images = [
    {
      src: '1-creative-solution.jpg',
      width: 373,
      height: 278,
      title: 'Creative Solution',
    },
    {
      src: '2-perfomance-marketing.jpg',
      width: 373,
      height: 278,
      title: 'Perfomance Marketing',
    },
    {
      src: '3-digital-media-buying.jpg',
      width: 373,
      height: 278,
      title: 'Digital Media Buying',
    },
    {
      src: '4-marketplace-management.jpg',
      width: 373,
      height: 278,
      title: 'Marketplace Management',
    },
    {
      src: '5-corporate-training.jpg',
      width: 373,
      height: 278,
      title: 'Corporate Training',
    },
  ]

  return (
    <section 
      ref={productsRefs} 
      className='h-screen bg-white flex flex-col justify-center'
    >
      <div 
        className="
        sm:px-[40px]
        md:px-20
        xl:px-[10%]"
      >
        <div
          data-aos='fade-right'
          className="text-right mb-[20px]"
        >
          <Span text='our services' className={`text-soft-black`} />
        </div>
        
        {/* <div 
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
              text='Inspired by clear ideas, surprising functions, and the timeless design' 
              className='leading-[44px] max-w-2xl
              sm:mt-[14px] 
              lg:mb-0' 
            />
          </div>

          <div
            data-aos='zoom-in-up'
            data-aos-delay='250'
          >
            <TextLink text='explore more' />
          </div>
        </div> */}
      </div>

      {/* Carousel */}
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
              <div 
                key={idx} 
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
                  md:gap-[46px]"
                >
                  {/* Number */}
                  <p className="text-white font-sans font-light
                  mt-1
                  sm:text-sm 
                  md:text-base
                  text-soft-black">
                    {`0${idx + 1}`}
                  </p>

                  {/* Title and vendor */}
                  <div>
                    {/* Title */}
                    <h1 
                      className="text-white font-sans font-normal
                      sm:text-xl
                      md:text-2xl
                      text-soft-black"
                    >
                      {image.title}
                    </h1>

                    {/* Vendor */}
                    {
                      image.vendor && <span 
                      className="text-soft-gray font-sans font-light capitalize
                      sm:text-sm
                      md:text-base"
                    >
                      {`by ${image.vendor}`}
                    </span>
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}

export default Products