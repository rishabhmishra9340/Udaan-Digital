'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu's visibility
  const router = useRouter(); // Initialize useRouter

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to check if the current page is active
  const isActive = (path) => router.pathname == path ? 'text-clip text-green-500' : 'text-gray-700';

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
            <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/')}`} 
                  href="/">Home
                </a>
              </li>
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/about')}`} 
                  href="/about">About-Us
                </a>
              </li>
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/services')}`} 
                  href="#">Services
                </a>
              </li>
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/gallary')}`} 
                  href="/projects">Projects
                </a>
              </li>
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/gallary')}`} 
                  href="/gallary">Realty
                </a>
              </li>
              <li>
                <a 
                  className={`md:p-4 py-3 px-0 block md:mb-0 mb-2 text-xl ${isActive('/contact')}`} 
                  href="/contact">Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
