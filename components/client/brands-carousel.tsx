"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { chunk } from "lodash"
import { brands } from '@/lib/data'

export const BrandsCarousel = ({ className }: { className?: string }) => {
  return (
    <React.Fragment>
      <Carousel
        className={`w-full max-w-3xl relative ${className}`}
        plugins={[
          Autoplay({ delay: 3000 })
        ]}
      >
        <CarouselContent>
          {chunk(brands, 4).map((bg, i) => (
            <CarouselItem key={`${i}`} className="">
              <div className="flex flex-col p-3 lg:p-1 text-left">
                {bg.map((b, j) => (
                  <div key={`${i}.${j}`}>
                    <div className="py-2 flex flex-row justify-between gap-2 border-b-2 border-b-[#527D38] border-b-solid h-fit lg:h-[140px]">
                      <span className="text-[#527D38] text-lg lg:text-xl">{b.num+1}.</span>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#527D38] text-md lg:text-lg font-semibold">{b.name}</p>
                        <p className="text-[#527D38] text-sm lg:text-md">{b.desc}</p>
                        <p className="block lg:hidden text-[#527D38] text-sm lg:text-md italic">
                          {b.serv.join(", ")}
                        </p>
                      </div>
                      <ul className="hidden lg:block list-none">
                        {b.serv.map((s, k) => (
                          <li key={`${i}.${j}.${k}`} className="text-[#527D38] text-sm lg:text-md">{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </React.Fragment>
  )
}
