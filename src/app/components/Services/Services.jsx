import React from 'react';

export default function Services() {
  return (
    <>
      <div className="banner p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <p className='max-w-full text-center m-8'>At Udaan Studio, we don’t just design structures—we create experiences that inspire, spaces that breathe, and cities that evolve. Our services are tailored to bring your vision to life with innovation, sustainability, and precision at the core of every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src="/urban.jpg"
              alt="Image 1"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold">Urban & Infrastructure Planning – Sustainable Cities, Smarter Solutions</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute m-2 bottom-4 left-0 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <p>
                We contribute to shaping resilient, inclusive, and well-connected urban environments through:
              </p>
              <ul className="list-none  mt-2 text-white">
                <li>✔ Smart Urban Design – Future-ready cities with tech-integrated infrastructure</li>
                <li>✔ Public Space Revitalization – Parks, plazas, and community hubs fostering social interaction.</li>
                <li>✔ Sustainable Infrastructure – Green energy, efficient water management, and eco-friendly transit.</li>
                <li>✔ Disaster-Resilient Planning – Strategies to withstand environmental challenges.</li>
                <li>✔ Economic & Social Balance – Designs that drive economic growth and social inclusivity.</li>
              </ul>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <img
              src="/archi.jpg"
              alt="Image 2"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold">Architectural Design – Shaping Dreams into Reality</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute m-2 bottom-4 left-0 bg-black text-white p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>
                We craft architectural masterpieces that blend aesthetics with functionality. Whether it’s a residence, commercial space, or institutional project, we focus on:
              </p>
              <ul className="list-none  mt-2 text-white">
                <li> ✔ Iconic Designs – Unique and timeless architecture tailored to your vision.</li>
                <li> ✔ Sustainable Innovation – Eco-friendly, energy-efficient, and climate-responsive structures.</li>
                <li> ✔ Structural Excellence – A balance of beauty and engineering precision.</li>
                <li>✔ Human-Centric Spaces – Designs that enhance comfort, utility, and well-being.</li>
                <li>✔ Seamless Execution – From concept to construction, ensuring flawless results.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Image 3 */}
          <div className="relative group ">
            <img
              src="/bim.jpg"
              alt="Image 1"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold">Building Information Modeling (BIM) – Precision, Efficiency, and Collaboration</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute m-2 bottom-4 left-0 text-white bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>
                We harness the power of technology to streamline construction, reduce errors, and enhance efficiency with:
              </p>
              <ul className="list-none  mt-2 text-white">
                <li>✔ 3D Digital Visualization – Experience your project before it’s built.</li>
                <li>✔ Error-Free Execution – Clash detection and precise modeling for seamless construction.</li>
                <li>✔ Cost & Time Optimization – Smart planning to reduce wastage and delays.</li>
                <li>✔ Lifecycle Management – Efficient operation and maintenance strategies.</li>
                <li>✔ Team Collaboration – Real-time coordination among architects, engineers, and builders.</li>
              </ul>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative group ">
            <img
              src="/mp.jpg"
              alt="Image 1"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold">Master Planning – Designing the Future, Today</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute m-2 bottom-4 text-white left-0 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>
                Our master planning solutions create livable, sustainable, and future-ready developments that grow with communities. We offer:
              </p>
              <ul className="list-none  mt-2 text-white">
                <li>✔ Integrated Urban Vision – Holistic planning for cities, townships, and large-scale developments.</li>
                <li>✔ Sustainability-Focused Growth – Smart zoning and green solutions for long-term impact.</li>
                <li>✔ Mobility & Connectivity – Optimized road networks, transit systems, and walkable environments.</li>
                <li>✔ Regulatory Compliance – Designs aligned with government policies and local needs.</li>
                <li>✔ Scalable Developments – Future-proofed layouts that evolve with time.</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <img
              src="/int.jpg"
              alt="Image 1"
              className="w-full h-[500px] rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-2xl font-bold">Interior Design – Transforming Spaces, Elevating Lifestyles</h2>
            </div>
            {/* List - Hidden by default, appears on hover */}
            <div className="absolute m-2 bottom-4 text-white left-0 bg-black p-4 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>
                Our interior designs are more than aesthetics; they are crafted experiences that reflect personality, functionality, and luxury. We specialize in:
              </p>
              <ul className="list-none  mt-2 text-white">
                <li>✔ Tailor-Made Elegance – Unique concepts that mirror your style and vision.</li>
                <li>✔ Space Optimization – Smart layouts maximizing efficiency and comfort.</li>
                <li>✔ Material Innovation – Premium, sustainable materials for a luxurious touch.</li>
                <li>✔ Immersive Ambiance – A perfect blend of lighting, textures, and colors.</li>
                <li>✔ Function-Driven Comfort – Designs that enhance usability and everyday experiences.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
