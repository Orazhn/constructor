'use client';
import React, { useState, useEffect } from 'react';
import { useElements } from '../context/ElementContext';
import Header from '@/components/appComponents/Header';
import Sidebar from '@/components/appComponents/Sidebar';
import {Rings} from 'react-loading-icons'
import { Toaster } from 'react-hot-toast';


const Page = () => {
  const { elements, loading, dbBgColor } = useElements();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [bgColor, setBgColor] = useState<string>('');
  

  useEffect(() => {
    if (!loading) {
      setBgColor(dbBgColor);
    }
    
  }, [loading]);

  return (
    <div className="flex justify-center w-screen flex-col items-center">
      <Header sidebar={true} setOpenSidebar={setOpenSidebar} text="Get components" />
      {openSidebar && (
        <Sidebar
          setBgColor={setBgColor}
          bgColor={bgColor}
          setOpenSidebar={setOpenSidebar}
          openSidebar={openSidebar}
        />
      )}
      <div
        className={` w-screen ${elements ? 'h-screen' : 'h-auto'}`}
        style={{
          background: bgColor,
        }}>
        {loading ? 
          <div className='flex w-screen h-screen justify-center items-center'>
            <Rings className='text-xl'/>
          </div>
           :
          <div className="list-none flex flex-col w-full items-center justify-center gap-2 pt-3">
            {elements.map((element: React.ReactNode, index: number) => 
              <div  key={index}>
                  <li
                    className="flex">
                    {element}
                  </li>
              </div>
            )}
          </div>
        }
        </div>
        <Toaster />
    </div>
  );
};

export default Page;
