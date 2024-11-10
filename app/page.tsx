import React from 'react'
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton
} from '@clerk/nextjs'
import { IoIosLogIn } from "react-icons/io";
import { currentUser } from '@clerk/nextjs/server';
import StartBuildingButton from '@/components/appComponents/StardBuildingButton';



const page = async() => {
  const user = await currentUser();
  const username = user?.username
  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center bg-black'>
        <header className="py-2  w-screen fixed top-0">
          <div className='flex justify-evenly w-full '>
            <SignedOut>
               <Button className="text-xl bg-white text-black hover:bg-slate-200"> <SignInButton/></Button>
            </SignedOut>
            <SignedOut>
               <Button className="text-xl bg-white text-black hover:bg-slate-200"> <SignUpButton/></Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='font-mono text-white text-5xl flex justify-center flex-col items-center gap-2'>
            <h1 className='text-center '>{username ? `Welcome back, ${username}` : 'Welcome to online web builder app'}</h1>
            <p className='text-4xl motion-preset-shake motion-delay-1000'>👋</p>
          </div>
              {
              user ?
              <StartBuildingButton/> : 
              <Button 
                className="text-xl bg-slate-100 text-black hover:bg-slate-50 w-36" 
                variant="expandIcon" Icon={IoIosLogIn} iconPlacement="right"
              >
                <SignUpButton/>
              </Button>
              
              }
            
        </div>
      
      

    </div>
  )
}

export default page