"use client"

import React, { useMemo } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { chunk } from "lodash"

export const BrandsCarousel = ({ className }: { className?: string }) => {
  const brands = useMemo(() => {
    const out = [
      {
        name: "at Mauv",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Malo Home",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Buttonscarves",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Malo Toys",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Berlynn",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Noor Abika",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Cloxvox",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Mava Kabar",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Gurih7",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Mom Uung",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "homeground",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Smells Good",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Legato Gelato",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Tangerine Marche",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Figlio Apparel",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
      {
        name: "Torgana",
        desc: "description of experience",
        serv: ["Performance Marketing", "Digital Buying", "Marketplace"],
      },
    ];
    return out.map((o, num) => ({ ...o, num }));
  }, []);

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
