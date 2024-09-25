"use client"

import React, { useMemo } from 'react'
import { Carousel, CarouselContent, CarouselItem, /* CarouselNext, CarouselPrevious */ } from '../ui/carousel'
import { Card, CardContent } from '../ui/card';
import Autoplay from "embla-carousel-autoplay"

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

export const PartnersCarousel = ({ className }: { className?: string }) => {
  const categories = useMemo(() => {
    return [
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
  }, []);

  return (
    <Carousel
      className={`w-full max-w-3xl relative ${className}`}
      plugins={[
        Autoplay({ delay: 3000 })
      ]}
    >
      <CarouselContent>
        {categories.map((cat, i) => (
          <CarouselItem key={i} className="">
            <div className="p-1">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-center justify-center h-[400px]">
                  <h3 className="underline underline-offset-2 text-[#527D38] my-6">{cat.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cat.items.map((item,j) => (
                      <div key={`${i}.${j}`} className="">
                        <Image src={item} alt="" width={150} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute top-[10%] lg:top-[50%] left-[30%] lg:left-[-10%]" />
      <CarouselNext className="absolute top-[10%] lg:top-[50%] right-[30%] lg:right-[-10%]" /> */}
    </Carousel>
  )
}
