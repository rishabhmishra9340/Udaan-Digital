'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";  // Import Link from next/link

const OurOffices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://udaan-digital-backend-1.onrender.com/api/projects");
        setOffices(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    <div className="bastia-font text-4xl p-12">Projects</div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto">
        {offices.map((office) => (
          <Link
            href={`/project/${office.id}`}
            key={office.id}
            className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs h-72 shadow-lg"
          >
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>

            {/* Text Above */}
            <div className="absolute z-10 top-0 left-0 w-full px-4 py-3 text-white">
              <span className="block text-sm opacity-75">{office.location}</span>
              <span className="block font-semibold text-sm bastia-font">{office.name}</span>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-[5]" />

            {/* Image */}
            <div className="relative flex items-center justify-center h-full">
              <div
                className="block absolute w-60 h-60 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-full h-full object-cover"
                src={office.image}
                alt={office.name}
              />
            </div>
          </Link>
        ))}
      </div>
     </>  );
};

export default OurOffices;
