import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai"; // You can use a close icon for the toggling

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="overflow-hidden bg-[#080808] bg-white/30  backdrop-filter  text-white  mx-4 py-8 rounded-b-2xl">
        <header className="flex items-center justify-between mx-8">

          <h1 className='text-3xl  font-serif'>Portfolio</h1>

          <div
            className={`nav-links duration-500 lg:static absolute left-0 ${menuOpen ? 'top-[9%]' : 'top-[-50%]'
              } lg:min-h-fit min-h-[25vh] w-full lg:w-auto flex px-5`}
          >
            <nav>
               <ul className="lg:flex text-[20px] font-semibold gap-8 lg:flex-row flex-col"> 
              <li className="hover:underline cursor-pointer decoration-[#00ffee] underline-offset-[5px]">
                Home
                </li>
               <li className="hover:underline decoration-[#00ffee] cursor-pointer underline-offset-[8px]">
                  
                   About
                </li>
                <li className="hover:underline decoration-[#00ffee] cursor-pointer underline-offset-[8px]">
                  Education
                </li>
                <li className="hover:underline decoration-[#00ffee] cursor-pointer underline-offset-[8px]">
                  Services
                </li>
                <li className="hover:underline decoration-[#00ffee] cursor-pointer underline-offset-[8px]">
                  Contact
                </li>
               </ul> 
            </nav>
          </div>
          <div className="flex items-center text-[#00ffee] gap-4 lg:hidden">
            <i onClick={onToggleMenu} className="text-3xl cursor-pointer">
              {menuOpen ? <AiOutlineClose /> : <CiMenuBurger />}
            </i>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
