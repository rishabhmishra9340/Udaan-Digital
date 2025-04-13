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

  // Function to handle navigation on click
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <>
      <header className="w-full z-50 lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md border-b border-gray-200">
        <div className="flex-1 flex justify-between items-center">
          <Image src='/Ganpati.png' width={50} height={50} alt='Logo' className='object-contain'></Image>
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
                <button
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/')}`}
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/about')}`}
                  onClick={() => handleNavigation('/about')}
                >
                  About-Us
                </button>
              </li>
              <li>
                <button
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/services')}`}
                  onClick={() => handleNavigation('/service')}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className={`md:p-4 py-3 px-0 block text-xl ${isActive('/projects')}`}
                  onClick={() => handleNavigation('/projects')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`md:p-4 py-3 px-0 block md:mb-0 mb-2 text-xl ${isActive('/contact')}`}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
