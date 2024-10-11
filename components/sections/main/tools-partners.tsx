import React from 'react'

// agency partner
import logo_plabs from "@/public/assets/logo-plabs.png";
import logo_glos from "@/public/assets/logo-glos.png";
import logo_amok from "@/public/assets/logo-amok.png";
import Image from 'next/image';

// social platform

// publisher partner

// e-commerce platform

// marketplace partner

// email marketing partner

const Section = ({ ref }: { ref: React.MutableRefObject<null> }) => {
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