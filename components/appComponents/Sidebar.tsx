import { IoIosClose } from "react-icons/io";

export default function DefaultSidebar({setBgColor, bgColor, setOpenSidebar}: 
    {setBgColor: React.Dispatch<React.SetStateAction<string>>, bgColor: string, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>}){
return (
    <aside 
        id="default-sidebar" 
        className={`fixed top-0 left-0 sm:w-1/2 md:w-1/4 z-40 h-full transition-transform overflow-y-auto`}
        aria-label="Sidebar" 
       
      >
        <div className="h-full px-3 py-4 overflow-y-hidden  bg-gray-800 2xl:w-96">
          <ul className="space-y-2 font-medium">
            <li className="w-full flex justify-end">
                <button onClick={() => setOpenSidebar(false)} className="hover:bg-slate-700 rounded-md">
                    <IoIosClose  className="text-3xl text-white"/>
                </button>
               
            </li>
            <li className="flex flex-col">
                <div className="flex justify-between items-center flex-wrap bg-slate-700 p-2 rounded-md">
                    <p className="text-white ">Change Background Color</p>
                    <input type="color"  onChange={(e) => setBgColor(e.target.value)} 
                        value={bgColor} className="w-6 h-6 border-none p-0 outline-none bg-transparent appearance-none "/>
                </div>
            </li>
          </ul>
        </div>
      </aside>
);
}
