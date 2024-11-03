import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function CarouselDemo() {
  return (
    <Carousel>
  <CarouselContent className="h-40 ">
    <CarouselItem><div className="bg-slate-400 h-full flex items-center justify-center rounded-md">1 Picture</div></CarouselItem>
    <CarouselItem><div className="bg-slate-400 h-full flex items-center justify-center rounded-md">2 Picture</div></CarouselItem>
    <CarouselItem><div className="bg-slate-400 h-full flex items-center justify-center rounded-md">3 Picture</div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      
  )
}
