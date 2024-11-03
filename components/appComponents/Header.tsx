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
          <Button className='justify-self-start' onClick={() => setOpenSidebar(prev => !prev)}>
            <RxHamburgerMenu />
          </Button>}
          <Button 
            className={`${text == 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`} 
            onClick={() => router.push('/')}>
               <RxComponent1 className="text-white text-xl"/>  
              {text}
          </Button> 
          <Button 
            className={`${text != 'Components' && 'underline decoration-blue-500 decoration-2 underline-offset-4'} font-mono`}  
            onClick={() => router.push('webpreview')}>
            <IoDocumentTextOutline />
            See the result
          </Button>
        </header>
  )
}

export default Header