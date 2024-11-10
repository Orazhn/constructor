'use client'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button';

const Layout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
    const router = useRouter()
  return (
    <div className='h-screen bg-black'>
        <header className='fixed t-0 text-xl p-5 '>
            <Button 
                className='bg-black'>
                <FaArrowLeft onClick={() => router.push('/')} />
            </Button>
        </header>
        {children}
    </div>
  )
}

export default Layout