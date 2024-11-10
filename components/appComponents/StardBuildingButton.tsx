'use client'
import React from 'react'
import { Button } from '../ui/button'
import { MdBuild } from 'react-icons/md'
import { useRouter } from 'next/navigation'


const StartBuildingButton = () => {
    const router = useRouter()
  return (
    <Button 
      onClick={() => router.push('constructorPage')}
      className="text-xl bg-slate-100 text-black hover:bg-slate-50 px-8 " 
      variant="expandIcon" Icon={MdBuild} iconPlacement="right"
    >
      Start building
    </Button>
  )
}

export default StartBuildingButton