'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";  // Import Link from next/link

const OurOffices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/projects");
        setOffices(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto">
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
          <div className="relative flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.2,
              }}
            ></div>
            <img
              className="relative w-[500px]"
              src={office.image}
              alt={office.name}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{office.location}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{office.name}</span>
              <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                $45.00
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OurOffices;
