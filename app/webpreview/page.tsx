'use client'
import React, { useState } from 'react';
import { useElements } from '../context/ElementContext';
import Header from '@/components/appComponents/Header';
import Sidebar from '@/components/appComponents/Sidebar';
import Draggable from 'react-draggable'; 

const Page = () => {
  const { elements } = useElements();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [bgColor, setBgColor] = useState<string>('bg-white');

  return (
    <div className='flex justify-center w-screen flex-col items-center'>
      <Header sidebar={true} setOpenSidebar={setOpenSidebar} text='Get components'/>
      {openSidebar && <Sidebar setBgColor={setBgColor} bgColor={bgColor} setOpenSidebar={setOpenSidebar} />}
      <div className={`p-10 h-screen w-screen`} style={{ backgroundColor: bgColor }}>
        <div className='list-none'> 
          {elements.map((element: React.ReactNode, index: number) => (
            <Draggable key={index}>
              <li className='cursor-grab flex'>{element}</li>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
