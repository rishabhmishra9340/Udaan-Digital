'use client'
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu's visibility

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <Image src='/bhraman7.jpg' width={50} height={50} alt='Logo' className='object-contain' />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden block text-gray-900"
          onClick={toggleMenu} // Toggle the menu on click
        >
          <svg className="fill-current"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {/* Responsive Menu */}
        <div className={`md:flex md:items-center md:w-auto w-full ${menuOpen ? 'block' : 'hidden'}`} id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><a className="md:p-4 py-3 px-0 block text-xl" href="/about">About-Us</a></li>
              <li><a className="md:p-4 py-3 px-0 block text-xl" href="#">Plans</a></li>
              <li><a className="md:p-4 py-3 px-0 block text-xl" href="/gallary">Gallary</a></li>
              <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-xl" href="/contact">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
