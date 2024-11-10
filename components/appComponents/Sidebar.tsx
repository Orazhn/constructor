'use client'
import { FC } from "react";
import { IoIosClose } from "react-icons/io";
import { Button } from "../ui/button";
import { AiOutlineBuild } from "react-icons/ai";
import {useRouter} from "next/navigation";
import { useElements } from "@/app/context/ElementContext";
import toast from 'react-hot-toast';


interface SidebarProps {
    setBgColor: React.Dispatch<React.SetStateAction<string>>, 
    bgColor: string, 
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>, 
    openSidebar: boolean
}

const DefaultSidebar:FC<SidebarProps> = ({setBgColor, bgColor, setOpenSidebar, openSidebar}) => {
        const router = useRouter()
        const {setElements} = useElements()

        const deleteAll = () => {
            setElements([])
            localStorage.setItem('elements', JSON.stringify({dbelements:[], bgColor: "#000000"}))
            toast("You can discard changes by reloading page or submit by pressing save button",
                {
                    icon: '⏮️',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff',
                    }
                }
            )
        }

return (
    <aside 
        id="default-sidebar" 
        className={`fixed rounded-md top-0 left-0 w-auto sm:w-1/2 md:w-1/4 z-40 h-full transition-transform overflow-y-auto motion-preset-slide-right ${!openSidebar && 'motion-preset-slide-left'}`}
        aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-hidden  bg-gray-800 2xl:w-96">
                <ul className="space-y-2 font-medium">
                    <li className="w-full flex justify-between">
                    <Button onClick={() => router.push('/')}>
                        <AiOutlineBuild className='text-2xl text-white '/>
                    </Button>
                        <Button onClick={() => setOpenSidebar(false)} className="hover:bg-slate-700 rounded-md px-2">
                            <IoIosClose  className="text-3xl text-white"/>
                        </Button>
                    </li>
                    <li className="flex">
                        <div className="flex justify-between items-center flex-wrap bg-slate-700 p-2 rounded-md">
                            <p className="text-white ">Change Background Color</p>
                            <input
                                onChange={e => {
                                    setBgColor(e.target.value)
                                    const data = JSON.parse(localStorage.getItem("elements") || `{dbelements: [], bgColor: ""}`)
                                    data.bgColor = bgColor
                                    localStorage.setItem('elements', JSON.stringify(data))
                                }} 
                                type="color"
                                value={bgColor} className="w-6 h-6 border-none p-0 outline-none bg-transparent appearance-none"
                            />
                        </div>
                    </li>
                    <li>
                        <Button className="bg-black" onClick={() => deleteAll()}>Delete all</Button>
                    
                    </li>
                
                </ul>
            </div>
           
      </aside>
);
}

export default DefaultSidebar