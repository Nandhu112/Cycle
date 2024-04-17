import React from 'react';
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-white">
        {/* Left side */}
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button className="focus:outline-none">
            <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* Home and Shop text fields */}
          <div className="ml-4 space-x-4">
            <a href="#" className="text-gray-900 hover:text-black font-semibold">Home</a>
            <a href="#" className="text-gray-600 hover:text-black">Shop</a>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-shrink-0 flex justify-center">
          <img src="https://t4.ftcdn.net/jpg/03/28/49/43/360_F_328494327_A2XpjDQp8f74FsQh7W7yof1tXU9ob3Sb.jpg" alt="Logo" className="h-8" />
          <a href="#" className="text-black pt-1 pl-2 font-bold hover:text-black">CYCLE</a>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          {/* Bell Icon */}
          <button className="mr-4 focus:outline-none m-2">
            <CiBellOn className="h-6 w-6 text-gray-600 rounded-full border border-gray-200 p-1" />
          </button>
          {/* Cart Icon with Badge */}
          <button className="mr-4 focus:outline-none relative">
            <div className="relative">
              <CiShoppingCart className="h-6 w-6 text-gray-600 rounded-full border border-gray-200 p-1" />
              <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">12</div>
            </div>
          </button>
          {/* Avatar */}
          <div className="h-8 w-8 rounded-full overflow-hidden m-2">
            <img src="https://cdn.siasat.com/wp-content/uploads/2022/05/srk-5.jpg" alt="Avatar" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Navbar;
