'use client'
import React, {FC} from 'react'
import { Button } from '../ui/button'
import {useRouter} from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxComponent1 } from 'react-icons/rx';

interface IHeader {
  sidebar?: true, 
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> | undefined, 
  text?:string
}
const Header: FC<IHeader> = ({sidebar, setOpenSidebar, text = 'Components'}) => {
    const router = useRouter()
  
  return (
        <header className="bg-slate-800 flex justify-evenly p-4 w-screen overflow-y-auto gap-4">
          {sidebar && setOpenSidebar && 
          <Button className='text-md justify-self-start' onClick={() => setOpenSidebar(true)}>
            <RxHamburgerMenu className='hover:motion-scale-out-125' />
          </Button>}
          <Button 
            variant="expandIcon" Icon={RxComponent1} iconPlacement="left"
            className={`${text == 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`} 
            onClick={() => router.push('/')}>
               
              {text}
          </Button> 
          <Button 
            variant="expandIcon" Icon={IoDocumentTextOutline} iconPlacement="left"
            className={`${text != 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`}  
            onClick={() => router.push('webpreview')}>
            See the result
          </Button>
        </header>
  )
}

export default Header