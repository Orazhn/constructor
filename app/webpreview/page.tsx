'use client';
import React, { useState, useEffect } from 'react';
import { useElements } from '../context/ElementContext';
import Header from '@/components/appComponents/Header';
import Sidebar from '@/components/appComponents/Sidebar';
import Draggable from 'react-draggable'; 

const Page = () => {
  const { elements } = useElements();
  const [openSidebar, setOpenSidebar] = useState(true);
  const [bgColor, setBgColor] = useState<string>('white');
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [focus, setFocus] = useState<React.ReactNode>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const storedBgColor = localStorage.getItem('bgColor');
      const storedBgImage = localStorage.getItem('bgImage');

      if (storedBgColor) {
        setBgColor(JSON.parse(storedBgColor));
      }

      if (storedBgImage) {
        setBgImage(JSON.parse(storedBgImage));
      }
    }
  }, []);

  return (
    <div className="flex justify-center w-screen flex-col items-center">
      <Header sidebar={true} setOpenSidebar={setOpenSidebar} text="Get components" />
      {openSidebar && (
        <Sidebar
          setBgColor={setBgColor}
          bgColor={bgColor}
          setOpenSidebar={setOpenSidebar}
          setBgImage={setBgImage}
          focus={focus}
          openSidebar={openSidebar}
        />
      )}
      <div
        className={`p-10 h-screen w-screen ${bgImage ? 'bg-center bg-cover bg-no-repeat' : ''}`}
        style={{
          background: bgImage ? `url(${bgImage}), ${bgColor}` : bgColor,
        }}
      >
        <div className="list-none">
          {elements.map((element: React.ReactNode, index: number) => (
            <Draggable key={index}>
              <li
                className="cursor-grab flex"
                onClick={() => setFocus(element)}
              >
                {element}
              </li>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
