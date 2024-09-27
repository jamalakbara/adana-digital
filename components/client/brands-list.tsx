"use client"

import React from 'react'
import { brands } from '@/lib/data'

export const BrandsList = () => {
  return (
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
  )
}
