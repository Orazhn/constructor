'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import Menubar from "@/components/webcomponents/Menubar"
import Calendar from "@/components/webcomponents/Calendar"
import DatePicker  from "@/components/webcomponents/DatePicker"
import { useElements } from "./context/ElementContext"
import Header from "@/components/appComponents/Header"
import CarouselDemo from "@/components/webcomponents/Carousel"
import CardWithForm from "@/components/webcomponents/Card"






export default function Home() {
  const { addElement } = useElements();

  const addHandler = (element: React.JSX.Element) => {
    addElement(element)
  }
  return (
    <div className="flex flex-col">
      <Header setOpenSidebar={undefined} />
      <div className="pt-5 flex flex-col">
      <div className="flex justify-center items-center">
          <h1 className="text-center text-white font-mono  border-r-2 border-white overflow-hidden whitespace-nowrap animate-typewriter sm:text-lg md:text-xl">Build your website without code</h1>
        </div>
        <div className="flex flex-wrap w-screen justify-center">
        
        <div className="flex flex-wrap justify-center gap-5 pt-5">
          <div className="w-auto bg-gray-800 p-2 ">
            <Menubar/>
            <div className="pt-3">
             <Button onClick={() => addHandler(<Menubar/>)}>Add</Button>
            </div>
          </div>
          <div className=" bg-gray-800 p-2">
            <Calendar/>
            <div className="pt-3">
             <Button onClick={() => addHandler(<Calendar/>)}>Add</Button>
            </div>
          </div>
          <div className="w-auto bg-gray-800 p-2">
            <DatePicker/>
            <div className="pt-3">
             <Button onClick={() => addHandler(<DatePicker/>)}>Add</Button>
            </div>
          </div>
          <div className="w-auto bg-gray-800 p-2 ">
            <CarouselDemo/>
            <div className="pt-3">
             <Button onClick={() => addHandler(<CarouselDemo/>)}>Add</Button>
            </div>
          </div>
          <div className="w-auto bg-gray-800 p-2 ">
            <CardWithForm/>
            <div className="pt-3">
             <Button onClick={() => addHandler(<CardWithForm/>)}>Add</Button>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    
    </div>
  )
}
