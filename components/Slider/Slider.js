import React from 'react'
import Carousel from 'react-multi-carousel'
import Image from 'next/image';
import Span from '../Span/Span';

const Slider = ({val}) => {
  const {text, images} = val
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <section className=''>
      <div className='flex justify-center items-center mb-[20px]'>
        <Span text={text} className={`text-soft-black`} />
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="flex justify-center items-center mb-[50px]"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="flex justify-center items-center"
      >
        {
          images.map((image, idx) => (
            <div>
              <Image 
                key={idx} 
                src={image} 
                alt="" 
                width={150}  
                height={150}
                />
            </div>
          ))
        }
      </Carousel>
    </section>
  )
}

export default Slider