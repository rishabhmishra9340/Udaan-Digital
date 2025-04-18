'use client'
import React from 'react'

export default function Banner() {
  return (
    <>
      <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img src="/about.jpg" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

        <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl text-2xl font-bold mb-6">UDAAN Studio
          </h2>
          <p class="sm:text-lg text-base text-center text-gray-200">Lets make your dream space a reality.
          </p>
        </div>
      </div>
    </>
  )
}

