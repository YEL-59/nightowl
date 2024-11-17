import React, { useState } from "react";
import { Link } from 'react-router-dom';

import navlogo from '/vite.svg';
import { FaShoppingBag, FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

const NavBar = () => {
  let Links = [
    { name: 'Home', link: '/', icon: <FaHome className="text-2xl" /> },
    { name: 'About Us', link: '/aboutus', icon: <FaInfoCircle className="text-2xl" /> },
    { name: 'Contact Us', link: '/contact_us', icon: <FaPhone className="text-2xl" /> },
  ];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="bg-blue-400">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center text-black py-4 px-5">
        
        {/* Logo and Icons - Displayed together on small screens */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="/" className="flex items-center">
            <img src={navlogo} alt="main logo" className="drop-shadow-xl" />
          </a>
          <div className="flex md:hidden gap-4">
            {isLoggedIn ? (
            Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="text-black hover:text-blue-500"
              >
                <span className="text-xl">{link.icon}</span>
              </Link>
            ))
         
          ):(
            <button
            onClick={() => setIsLoggedIn(true)} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
            )}
            
            <Link to="/cart" className="text-black hover:text-blue-500">
              <FaShoppingBag className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Centered Search Form on large screens */}
        <form className="w-full md:w-[20rem] lg:w-[40rem] mx-auto mt-4 md:mt-0">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        {/* Links for large screens */}
        <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? (
            Links.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                className="text-black hover:text-blue-500"
              >
                <span className="text-xl">{link.icon}</span>
              </Link>
            ))
         
          ):(
            <button
            onClick={()=>setIsLoggedIn(true)}
            className="border text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
            )}
          <Link to="/cart" className="text-white hover:text-blue-500 flex justify-center items-center">
            <FaShoppingBag className="text-2xl" />
            <span className="hidden md:block font-medium ">Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
//This will helps in preventing unnecessary re-renders when there are no prop changes
export default React.memo (NavBar);
