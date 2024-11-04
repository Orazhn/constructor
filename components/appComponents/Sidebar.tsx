import { FC } from "react";
import { IoIosClose } from "react-icons/io";


interface SidebarProps {
    setBgColor: React.Dispatch<React.SetStateAction<string>>, 
    bgColor: string, 
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>, 
    openSidebar: boolean
    setBgImage: React.Dispatch<React.SetStateAction<string>>,
    focus?: React.ReactNode 
}

const DefaultSidebar:FC<SidebarProps> = ({setBgColor, bgColor, setOpenSidebar, setBgImage, openSidebar}) => {

        const handleImageChange = async(e) => {
            const file = e.target.files[0]
            if (file && file.type.startsWith('image/')) {
                const url = URL.createObjectURL(file)
                setBgImage(url); 
                await localStorage.setItem('bgImage', JSON.stringify(url))
            } else {
              alert("Please select a valid image file.");
            }
          };
return (
    <aside 
        id="default-sidebar" 
        className={`fixed rounded-md top-0 left-0 w-auto sm:w-1/2 md:w-1/4 z-40 h-full transition-transform overflow-y-auto motion-preset-slide-right ${!openSidebar && 'motion-preset-slide-left'}`}
        aria-label="Sidebar" 
      >
        <div className="h-full px-3 py-4 overflow-y-hidden  bg-gray-800 2xl:w-96">
          <ul className="space-y-2 font-medium">
            <li className="w-full flex justify-end">
                <button onClick={() => setOpenSidebar(false)} className="hover:bg-slate-700 rounded-md">
                    <IoIosClose  className="text-3xl text-white"/>
                </button>
               
            </li>
            <li className="flex">
                <div className="flex justify-between items-center flex-wrap bg-slate-700 p-2 rounded-md">
                    <p className="text-white ">Change Background Color</p>
                    <input type="color"  onChange={(e) => {
                        setBgColor(e.target.value)
                        setBgImage('')
                        localStorage.setItem('bgImage', '')
                        localStorage.setItem('bgColor', JSON.stringify(bgColor))
                    }} 
                        value={bgColor} className="w-6 h-6 border-none p-0 outline-none bg-transparent appearance-none "/>
                </div>
            </li>
            <li className="flex flex-col bg-slate-700 p-2 rounded-md gap-2 ">
                <p className="text-white">Set Background Image</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={ handleImageChange}
                    className="bg-white text-white rounded-md"
                />
            </li>
            <div >
              
                </div>
          </ul>
        </div>
      </aside>
);
}

export default DefaultSidebar