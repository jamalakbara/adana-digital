import React from 'react'
import Paragraph from '@/components/client/Paragraph'
import Title from '@/components/client/Title'
import Link from 'next/link'

const Section = ({ ref }: { ref: React.MutableRefObject<null> }) => {
  const navs = [
    { title: "Home", href: "#" },
    { title: "Expertise", href: "#" },
    { title: "Digital Partner", href: "#" },
    { title: "Portfolio", href: "#" },
    { title: "Contact", href: "#" },
  ]

  return (
    <section 
      ref={ref}
      className='h-screen bg-soft-black flex flex-col'
    >
      <div className='flex flex-col grow justify-center'>
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
              <Paragraph
                className='leading-[44px] max-w-2xl text-lg
                sm:mt-[14px] 
                lg:mb-0' 
              >
                Let&apos;s create a measurable impact toward your business
              </Paragraph>
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
          sm:px-[40px]
          md:px-20
          xl:px-[10%]"
        >
          <div 
            className="flex flex-col
            justify-end mb-[70px]
            sm:flex-col sm:items-start
            lg:flex-row lg:items-end"
          >
            <div
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <Title
                text='Start Your Journey Now' 
                className='leading-[44px] max-w-2xl underline underline-offset-8 text-3xl
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
      </div>
      <div className='h-[200px] text-white px-20 py-0 mb-6 flex flex-row justify-between'>
        {/* ADDRESS */}
        <div className='flex flex-col justify-between'>
          <p className='text-green-500'>Bandung, Indonesia</p>
          <div className='w-[300px]'>
            Jl. Pasir Luyu Hilir No. 33 (40254), <br/>
            Kecamatan Regol, <br/>
            Kelurahan Pasirluyu, Kota Bandung, <br/>
            Jawa Barat.
          </div>
        </div>

        {/* NAVIGATIONS */}
        <div className='flex flex-row gap-4 flex-wrap w-[200px] justify-center'>
          {navs.map((nav, index) => (
            <Link href={nav.href} className='text-white transition-all ease-in-out hover:opacity-70' key={index}>{nav.title}</Link>
          ))}
        </div>

        {/* EMAIL PHONE */}
        <div className=''>
          <table>
            <tbody>
              <tr>
                <td className='text-green-500 font-semibold'>Email</td>
                <td className='px-2'>:</td>
                <td>contact@byadana.com</td>
              </tr>
              <tr>
                <td className='text-green-500 font-semibold'>Phone</td>
                <td className='px-2'>:</td>
                <td>+628112114142</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* EXTERNAL LINKS */}
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <Link href="" className='text-green-500 font-semibold transition-all ease-in-out hover:opacity-70'>Instagram</Link>
            <Link href="" className='text-green-500 font-semibold transition-all ease-in-out hover:opacity-70'>LinkedIn</Link>
          </div>
          <div className='font-semibold'>Adana Digital 2024</div>
        </div>
      </div>
    </section>
  )
}

export default Section