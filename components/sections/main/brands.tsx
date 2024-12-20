import React from 'react'
import { brands } from '@/lib/data'

const Section = ({ ref }: { ref?: React.MutableRefObject<null> }) => {
  return (
    <section 
      ref={ref}
      className='h-screen bg-white flex flex-row py-[100px]'
    >
      <div className='w-[50vw] px-20'>
        <p className="text-lg text-[#527D38] font-semibold mb-6">Incredible brands:</p>
        <div className="grid grid-cols-2">
          {brands.map((brand, i) => (
            <p key={i+1} className="text-[#527D38] my-2">{brand.name}</p>
          ))}
        </div>
      </div>
      <ul className="h-[500px] overflow-y-scroll list-none w-full lg:mx-10 px-1 lg:px-2">
        {brands.map((b, i) => (
          <li key={i+1} className="">
            <div className="py-2 flex flex-row justify-between gap-2 h-[140px] lg:h-[120px]">
              <span className="text-[#527D38] text-lg lg:text-xl">{String(b.num+1).padStart(3, "0")}.</span>
              <div className="flex flex-col gap-2">
                <p className="text-[#527D38] text-md lg:text-lg font-semibold">{b.name}</p>
                <p className="text-[#527D38] text-sm lg:text-md">{b.desc}</p>
                <p className="block lg:hidden text-[#527D38] text-sm lg:text-md italic">
                  {b.serv.join(", ")}
                </p>
              </div>
              <ul className="hidden lg:block list-none">
                {b.serv.map((s, j) => (
                  <li key={`${i}.${j}`} className="text-[#527D38] text-sm lg:text-md">{s}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row align-top">
              <div className="grow bg-gradient-to-r from-transparent to-[#527D38] h-[3px]"></div>
              <div className="grow bg-gradient-to-r from-[#527D38] to-transparent h-[3px]"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Section