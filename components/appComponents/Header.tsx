'use client'
import React, {FC} from 'react'
import { Button } from '../ui/button'
import {useRouter} from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxComponent1 } from 'react-icons/rx';
import { UserButton } from '@clerk/nextjs';
import { AiOutlineBuild } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import toast from 'react-hot-toast';

interface IHeader {
  sidebar?: true, 
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> | undefined, 
  text?:string
}
const Header: FC<IHeader> = ({sidebar, setOpenSidebar, text = 'Components'}) => {
    const router = useRouter()
  
    const saveData = async() => {
      try {
        const dbData = JSON.parse(localStorage.getItem('elements') || "[]");
        await fetch('/api/dbComponents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dbData),
        })
      }catch (error){
        console.error('Redis error while posting:', error);
      }
      
    }

  return (
        <header className="bg-slate-800 flex justify-evenly items-center py-4 w-screen overflow-y-auto gap-4">
          {!sidebar && 
            <Button onClick={() => router.push('/')}>
              <AiOutlineBuild className='text-2xl text-white '/>
            </Button>
          }
          {sidebar && setOpenSidebar && 
          <Button className='text-md justify-self-start' onClick={() => setOpenSidebar(true)}>
            <RxHamburgerMenu className='hover:motion-scale-out-125' />
          </Button>}
          <Button 
            variant="expandIcon" Icon={RxComponent1} iconPlacement="left"
            className={`${text == 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`} 
            onClick={() => router.push('constructorPage')}>
              {text}
          </Button> 
          <Button 
            variant="expandIcon" Icon={IoDocumentTextOutline} iconPlacement="left"
            className={`${text != 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`}  
            onClick={() => router.push('webpreview')}>
            See the result
          </Button>
          {
            text !== 'Components' && 
            <Button onClick={() => 
              toast.promise(saveData(),
              {
                loading: 'Saving...',
                success: <b>Data saved!</b>,
                error: <b>Could not save.</b>,
              })} 
              variant="expandIcon" Icon={FaRegSave} iconPlacement="right">
              Save
            </Button>
          }
          <div className=' text-white'>
            <UserButton showName />  
          </div>
        </header>
  )
}

export default Header