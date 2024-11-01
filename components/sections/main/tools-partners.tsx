import React from 'react'

// agency partner
import logo_plabs from "@/public/assets/logo-plabs.png";
import logo_glos from "@/public/assets/logo-glos.png";
import logo_amok from "@/public/assets/logo-amok.png";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Title from '@/components/client/Title';

// social platform

// publisher partner

// e-commerce platform

// marketplace partner

// email marketing partner

const Section = ({ ref }: { ref?: React.MutableRefObject<null> }) => {
  const categories = [
    {
      title: "Agency Partner",
      items: [logo_plabs, logo_glos, logo_amok],
    },
    {
      title: "Social Platform",
      items: [logo_amok],
    },
    {
      title: "Publisher Partner",
      items: [logo_amok],
    },
    {
      title: "E-Commerce Platform",
      items: [logo_amok],
    },
    {
      title: "Marketplace Partner",
      items: [logo_amok],
    },
    {
      title: "Email Marketing Partner",
      items: [logo_amok],
    },
  ];

  return (
    <section 
      ref={ref}
      className='h-screen bg-white flex flex-col align-middle justify-center'
    >
      <Title text='Our Digital Tools and Media Partners' className='text-center text-black font-semibold pt-10' />
      <Carousel
        opts={{
          align: 'center',
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        orientation='vertical'
        className='w-screen h-[60vh] mt-[10%]'
      >
        <CarouselContent className='h-[400px]'>
          {categories.map((cat, i) => (
            <CarouselItem key={`${i+1}`} className='md:basis-1/3'>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="underline underline-offset-8 text-[#527D38] my-6 text-center">{cat.title}</h3>
                <div className="flex flex-row gap-2 flex-wrap justify-center">
                {cat.items.map((item, j) => (
                  <div key={`${i}.${j}`} className="">
                    <Image src={item} alt="" width={150} />
                  </div>
                ))}
              </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )

  return (
    <section 
      ref={ref}
      className='h-screen bg-white flex flex-col justify-center'
    >
      <div
        className="hidden lg:grid grid-cols-2 gap-4"
        data-aos='zoom-in-down'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
      >
        {categories.map((cat, i) => (
          <div
            key={i+1}
            className="flex flex-col justify-center gap-2"
          >
            <h3 className="underline underline-offset-8 text-[#527D38] my-6 text-center">{cat.title}</h3>
            <div className="flex flex-row gap-2 flex-wrap justify-center">
              {cat.items.map((item, j) => (
                <div key={`${i}.${j}`} className="">
                  <Image src={item} alt="" width={150} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section