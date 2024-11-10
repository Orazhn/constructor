'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import Menubar from "@/components/webcomponents/Menubar";
import Calendar from "@/components/webcomponents/Calendar";
import DatePicker from "@/components/webcomponents/DatePicker";
import { useElements } from "@/app/context/ElementContext";
import Header from "@/components/appComponents/Header";
import CarouselDemo from "@/components/webcomponents/Carousel";
import CardWithForm from "@/components/webcomponents/Card";

const  Page = () =>  {
  const { addElement } = useElements();

  const addHandler = (element: React.JSX.Element, name: string) => {
    addElement( element, name )
  };
  const checkData = localStorage.getItem("elements")
  if (!checkData) {
    localStorage.setItem("elements", JSON.stringify({dbelements: [], bgColor: ""} )) 
  }
  
  return (
    <div className="flex flex-col">
      <Header setOpenSidebar={undefined} />
      <div className="pt-5 flex flex-col">
        <div className="flex justify-center items-center pt-5">
          <h1 className="text-center text-white font-mono sm:text-lg md:text-2xl motion-duration-1500 motion-preset-confetti ">
            Build your website without code
          </h1>
        </div>
        <div className="flex flex-wrap w-screen justify-center">
          <div className="flex flex-wrap justify-center gap-5 pt-5">
            <div className="w-auto bg-gray-800 p-2 rounded-md">
              <Menubar />
              <div className="pt-3 ">
                <Button onClick={() => addHandler(<Menubar />, 'Menubar')}>Add</Button>
              </div>
            </div>
            <div className="bg-gray-800 p-2 rounded-md">
              <Calendar />
              <div className="pt-3">
                <Button onClick={() => addHandler(<Calendar />, 'Calendar')}>Add</Button>
              </div>
            </div>
            <div className="w-auto bg-gray-800 p-2 rounded-md">
              <DatePicker />
              <div className="pt-3">
                <Button onClick={() => addHandler(<DatePicker />, 'DatePicker')}>Add</Button>
              </div>
            </div>
            <div className="w-auto bg-gray-800 p-2 rounded-md">
              <CarouselDemo />
              <div className="pt-3">
                <Button onClick={() => addHandler(<CarouselDemo />, 'CarouselDemo')}>Add</Button>
              </div>
            </div>
            <div className="w-auto bg-gray-800 p-2 rounded-md">
              <CardWithForm />
              <div className="pt-3">
                <Button onClick={() => addHandler(<CardWithForm />, 'CardWithForm')}>Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page