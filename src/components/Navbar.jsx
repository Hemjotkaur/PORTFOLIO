import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
   
    {
      id: 4,
      text: "Contact",
    }
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 z-50 bg-white overflow-hidden">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 -ml-10">
            <img
              src="data:image/png;base64,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"
              className="h-12 w-12 mt-3 rounded-full"
              alt=""
            />
            <div className="">
            <h1 className="font-semibold text-xl cursor-pointer mt-7">
              Hemjot kaur</h1>
              {/* <p className="text-sm  "></p> */}
      
              </div>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden  md:flex space-x-9  list-none hover:scale-100 duration-200 cursor-pointer  ">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >
                {text}</Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMdClose size={24} /> : <IoMenuSharp size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center  space-y-3 list-none text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                   <Link 
                   onClick={() => setMenu(!menu)} 
                   to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >
                {text}</Link>
                 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
