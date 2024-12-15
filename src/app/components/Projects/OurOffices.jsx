import React from 'react';

export default function OurOffices() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
      {/* Card 1 */}
      <div className="flex-shrink-0 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs h-72 shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative  flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
          </div>
          <img className="relative w-[700px]" src="/teams2.jpeg" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Indore</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Vijay Lily</span>
            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs h-72 shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
          </div>
          <img className="relative w-[500px]" src="/teams1.jpeg" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Bangalore</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Monstera</span>
            <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex-shrink-0 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs h-72 shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
          </div>
          <img className="relative w-[500px]" src="/teams1.jpeg" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Chennai</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Oak Tree</span>
            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex-shrink-0 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs h-72 shadow-lg">
        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
          style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div className="relative flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}>
          </div>
          <img className="relative w-[500px]" src="/teams2.jpeg" alt="" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Delhi</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Oak Tree</span>
            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
