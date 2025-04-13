'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

const Clients = () => {
  const clients = [
    { id: 1, name: "Client 1", logo: "/adani-pic.webp" },
    { id: 2, name: "Client 2", logo: "/taj.webp" },
    { id: 3, name: "Client 3", logo: "/jcb.webp" },
    { id: 4, name: "Client 4", logo: "/tata.webp" },
    { id: 5, name: "Client 5", logo: "/lalit.webp" },
    { id: 6, name: "Client 6", logo: "/tcs.webp" },
    { id: 7, name: "Client 7", logo: "/adani-pic.webp" },
    { id: 8, name: "Client 8", logo: "/taj.webp" },
    { id: 9, name: "Client 9", logo: "/jcb.webp" },
    { id: 10, name: "Client 10", logo: "/tata.webp" },
    { id: 11, name: "Client 11", logo: "/lalit.webp" },
    { id: 12, name: "Client 12", logo: "/tcs.webp" },
    { id: 13, name: "Client 13", logo: "/adani-pic.webp" },
    { id: 14, name: "Client 14", logo: "/taj.webp" },
    { id: 1, name: "Client 1", logo: "/adani-pic.webp" },
    { id: 2, name: "Client 2", logo: "/taj.webp" },
    { id: 3, name: "Client 3", logo: "/jcb.webp" },
    { id: 4, name: "Client 4", logo: "/tata.webp" },
    { id: 5, name: "Client 5", logo: "/lalit.webp" },
    { id: 6, name: "Client 6", logo: "/tcs.webp" },
    { id: 7, name: "Client 7", logo: "/adani-pic.webp" },
    { id: 8, name: "Client 8", logo: "/taj.webp" },
    { id: 9, name: "Client 9", logo: "/jcb.webp" },
    { id: 10, name: "Client 10", logo: "/tata.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  // Automatically cycle through the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000); // 3-second interval
    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalPages]);

  // Get the current set of clients
  const currentClients = clients.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Our Clients</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {currentClients.map((client) => (
          <div
            key={client.id + Math.random()}
            className="flex items-center justify-center bg-white shadow-md p-4 rounded-lg"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Clients;
