import React from 'react'
import Slider from '../Slider/Slider'

const Sliders = ({partnersRefs}) => {
  const partners = [
    {
      text: 'Agency Partners',
      images: [
        "/img/agency_partner_1.png",
        "/img/agency_partner_2.png",
      ]
    },
    {
      text: 'Social Platform',
      images: [
        "/img/social_platform_1.png",
        "/img/social_platform_2.png",
        "/img/social_platform_3.svg",
        "/img/social_platform_4.png",
      ]
    },
    {
      text: 'Publisher Partner',
      images: [
        "/img/publisher_partner_1.webp",
        "/img/publisher_partner_2.gif",
        "/img/publisher_partner_3.png",
        "/img/publisher_partner_4.png",
      ]
    },
    {
      text: 'ECommerce Partner',
      images: [
        "/img/ecommerce_partner_1.png",
        "/img/ecommerce_partner_2.png",
      ]
    },
  ]

  return (
    <section ref={partnersRefs} className='partners
        relative 
        sm:px-[40px]
        md:px-20
        xl:px-[10%]'>
        {
          partners.map((partner, idx) => (
            <Slider key={idx} val={partner} />
          ))
        }
    </section>
  )
}

export default Sliders