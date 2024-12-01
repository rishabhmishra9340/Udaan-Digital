'use client'
import React from 'react'
import { useState } from 'react';

export default function Banner() {
  const buttons = [
    {
      id: 1,
      label: "Button 1",
      text: "Started in 1969 with a vision to redefine architecture and planning in India, CPKA is one of the most revered architectural firms in the country. A multidisciplinary Architectural firm based in New Delhi, India, we have a portfolio of 1000+ projects, 200 + employees and have worked with clients from more than 30 countries in last 50 years of practice. Our firm is ranked amongst the Top 100 architecture firms in the world and Top 5 in Asia",
      image: "/images/image1.jpg", // Update with the correct path to your image
    },
    {
      id: 2,
      label: "Button 2",
      text: "You clicked Button 2!",
      image: "/images/image2.jpg",
    },
    {
      id: 3,
      label: "Button 3",
      text: "You clicked Button 3!",
      image: "/images/image3.jpg",
    },
    {
      id: 4,
      label: "Button 4",
      text: "You clicked Button 4!",
      image: "/images/image4.jpg",
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="/Glory.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
        <p class="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>

        <button
          type="button"
          class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div>

    <div className="flex flex-col items-center mt-10">
      <div className="flex space-x-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleClick(button.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="mt-6 text-center">
        {selectedId !== null && (
          <div>
            <img
              src={buttons.find((button) => button.id === selectedId).image}
              alt="Selected"
              className="w-64 h-64 object-cover mx-auto rounded-md shadow-md"
            />
            <p className="mt-4 text-lg text-gray-700">
              {buttons.find((button) => button.id === selectedId).text}
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

