import React from 'react';

export default function Services() {
  return (
    <>
      <div className="banner p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src="/teams1.jpeg"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-3xl font-bold">ARCHITECTURE</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute bottom-4 left-4 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="list-none  mt-2 text-white">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
                <li>Point 5</li>
              </ul>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <img
              src="/teams2.jpeg"
              alt="Image 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-3xl font-bold">SUSTAINABILITY</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute bottom-4 left-4 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="list-none  mt-2 text-white">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
                <li>Point 5</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image 3 */}
          <div className="relative group">
            <img
              src="/teams1.jpeg"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-3xl font-bold">ARCHITECTURE</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute bottom-4 left-4 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="list-none  mt-2 text-white">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
                <li>Point 5</li>
              </ul>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group">
            <img
              src="/teams1.jpeg"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-3xl font-bold">ARCHITECTURE</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute bottom-4 left-4 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="list-none  mt-2 text-white">
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
                <li>Point 4</li>
                <li>Point 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 className="p-7 text-xl font-serif">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium laboriosam quasi itaque laborum! Exercitationem distinctio cumque officia et. Non, consectetur possimus ab nulla eius voluptatibus sequi reprehenderit numquam? Voluptatum?
      </h1>
    </>
  );
}
