"use client"

import React, { useMemo } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card';

export const PartnersCarousel = ({ className }: { className?: string }) => {
  const categories = useMemo(() => {
    return [
      {
        title: "Agency Partner",
      },
      {
        title: "Social Platform",
      },
      {
        title: "Publisher Partner",
      },
      {
        title: "E-Commerce Platform",
      },
      {
        title: "Marketplace Partner",
      },
      {
        title: "Email Marketing Partner",
      },
    ];
  }, []);

  return (
    <Carousel className={`w-full max-w-3xl ${className}`}>
      <CarouselContent>
        {categories.map((cat, i) => (
          <CarouselItem key={i} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-[400px]">
                  <h3 className="underline underline-offset-2 text-[#527D38] my-6">{cat.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((c,j) => (
                      <div key={`${i}.${j}`} className="">{c.title}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-y-[0px]" />
      <CarouselNext className="translate-y-[0px]" />
    </Carousel>
  )
}
