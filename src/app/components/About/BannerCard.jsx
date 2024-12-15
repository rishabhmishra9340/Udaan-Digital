'use client'
import { useState } from 'react';

const ContentSection = ({ section }) => {
  switch (section) {
    case 'about':
      return (
        <div>
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4 text-xl max-w-4xl max-w-[100%]">
            Started in 1969 with a vision to redefine architecture and planning in India, CPKA is one of the most revered architectural firms in the country. A multidisciplinary Architectural firm based in New Delhi, India, we have a portfolio of 1000+ projects, 200 + employees and have worked with clients from more than 30 countries in last 50 years of practice. Our firm is ranked amongst the Top 100 architecture firms in the world and Top 5 in Asia

            Our integrated practice undertakes consultancy in Master Planning, Architecture Urban Design, Structural and Civil Engineering, Electrical, Plumbing and Sanitary Engineering, Air-conditioning and FDV System, Fire Fighting System, Quantity Surveying and Estimating, and Project Management. Our unique multi-disciplinary approach is the reason for creation of some of the most iconic buildings across the globe in addition to our commitment to design excellence by imbibing innovation and sustainability in our works. Our firm, from the very beginning has ensured the inclusion of vernacular and sustainable architecture and associated design practices in our projects. Our multi-faceted family includes some of the best industrial architects, housing architects, institutional architects, structural engineers etc.

            We have been receiving global awards and recognition across major design platforms such as the BUILD Review’s 2018 Architecture Innovation Awards, wherein we have been recognized as the ‘Most Innovative Indian Architectural Design Firm for the year 2018’, amongst other numerous awards. Our firm has been constantly been ranked among the top 100 architectural firms in the world, featuring yet again in 2022.
          </p>
          <img
            className="w-full mt-8 max-h-96"
            src="/teams1.jpeg"
            alt="About Us"
          />
        </div>
      );
    case 'leadership':
      return (
        <div>
          <h2 className="text-2xl font-semibold">Leadership</h2>
          <div className="grid lg:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Leader 1" />
              <h3 className="text-xl text-center mt-4">John Doe</h3>
              <p className="text-center text-gray-600">CEO</p>
              <p className="mt-4 text-center">
                John has over 20 years of experience in the tech industry. He is passionate about leading teams to success and innovation.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Leader 2" />
              <h3 className="text-xl text-center mt-4">Jane Smith</h3>
              <p className="text-center text-gray-600">CTO</p>
              <p className="mt-4 text-center">
                Jane is a visionary leader with a strong background in technology. She drives innovation and spearheads the development of cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/2.jpg" alt="Leader 3" />
              <h3 className="text-xl text-center mt-4">Emily Johnson</h3>
              <p className="text-center text-gray-600">CFO</p>
              <p className="mt-4 text-center">
                Emily has an extensive background in finance. She ensures the company’s financial stability while driving growth and profitability.
              </p>
            </div>
          </div>
        </div>
      );
    case 'award':
      return (
        <div>
          <h2 className="text-2xl font-semibold">Awards</h2>
          <div className="grid lg:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img className="mx-auto w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Golden_Oscar_statue.svg/1024px-Golden_Oscar_statue.svg.png" alt="Award 1" />
              <h3 className="mt-4 text-xl">Best Startup of the Year</h3>
              <p className="text-gray-600">Awarded in 2023 for our groundbreaking innovation in the tech industry.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img className="mx-auto w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/5/53/TechCrunch_logo_2020.svg" alt="Award 2" />
              <h3 className="mt-4 text-xl">Excellence in Technology Innovation</h3>
              <p className="text-gray-600">Recognized for our innovative technology solutions and impact on the industry.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img className="mx-auto w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Logo_Employer_Of_The_Year.svg/1024px-Logo_Employer_Of_The_Year.svg.png" alt="Award 3" />
              <h3 className="mt-4 text-xl">Top Employer of the Year</h3>
              <p className="text-gray-600">Awarded for our commitment to creating a positive work culture and employee satisfaction.</p>
            </div>
          </div>
        </div>
      );
    case 'team':
      return (
        <div>
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <div className="w-full mt-8">
            <img className="w-full h-96 object-cover" src="/teams2.jpeg" alt="Team" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Team Member 1" />
              <h3 className="text-xl text-center mt-4">Alice Brown</h3>
              <p className="text-center text-gray-600">Project Manager</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Team Member 2" />
              <h3 className="text-xl text-center mt-4">Bob White</h3>
              <p className="text-center text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img className="w-32 h-32 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/4.jpg" alt="Team Member 3" />
              <h3 className="text-xl text-center mt-4">Charlie Green</h3>
              <p className="text-center text-gray-600">UX Designer</p>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4">
            We are a company focused on delivering exceptional services. Our mission is to provide high-quality solutions that improve lives.
          </p>
        </div>
      );
  }
};

const BannerCard = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
          <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Book Now</button>
        </div>
        <div className="order-1 lg:order-2">
          <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Banner" />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <nav className="bg-blue-900 text-white p-4">
        <ul className="flex justify-center space-x-12 text-xl">
          <li><button onClick={() => handleClick('about')} className="hover:bg-white p-2 rounded hover:text-black">About Us</button></li>
          <li><button onClick={() => handleClick('leadership')} className="hover:bg-white p-2 rounded hover:text-black">Leadership</button></li>
          <li><button onClick={() => handleClick('award')} className="hover:bg-white p-2 rounded hover:text-black">Awards</button></li>
          <li><button onClick={() => handleClick('team')} className="hover:bg-white p-2 rounded hover:text-black">Our Team</button></li>
        </ul>
      </nav>

      <div className="p-6">
        <ContentSection section={selectedSection} />
      </div>

      <BannerCard />
    </div>
  );
};

export default App;