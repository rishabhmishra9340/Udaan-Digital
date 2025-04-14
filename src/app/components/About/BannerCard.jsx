'use client'
import { useState } from 'react';
import Image from "next/image";

const ContentSection = ({ section }) => {
  switch (section) {
    case "about":
      return (
        <div>
          <h2 className="text-3xl font-bold">About Us</h2>
          <div className="mt-4 text-md max-w-4xl max-w-[100%] ">
            <p>
              Udaan Studio is a forward-thinking architecture and real estate
              company, founded in 2024 by Ar. Harsh Prajapat, with a mission to
              transform spaces through innovative, sustainable, and
              client-centric designs.
            </p>
            <p>
              &quot;Udaan&quot; (meaning &quot;Flight&quot; in Hindi) represents
              the studio&apos;s aspiration to push the boundaries of
              architecture, design, and real estate, taking creativity to new
              heights.
            </p>
            <p>
              Guided by our philosophy of &quot;Uplifting Designs Advancing
              Architecture in Nature&apos;s Embrace (UDAAN),&quot; we craft
              spaces that seamlessly blend aesthetics, functionality, and
              sustainability.
            </p>
            <div className="font-bold p-3">Our Mission</div>
            To design and develop architectural spaces that are innovative,
            eco-friendly, and timeless, ensuring harmony between modern
            aspirations and nature. We strive to uplift communities through
            meaningful designs that inspire and endure.
            <div className="font-bold p-3">Our Vision</div>
            To redefine architecture and planning in India by setting new
            benchmarks in design excellence, sustainability, and urban
            development. We aim to shape the future of Indian cities with
            forward-thinking, nature-integrated, and people-centric spaces.
            <div className="font-bold p-3">Our Approach</div>
            <ul className="p-4 list-disc list-inside">
              <li>
                Innovative Design: We push the boundaries of creativity to craft
                unique and timeless structures.
              </li>
              <li>
                Sustainable Architecture: Every project is designed with
                environmental responsibility at its core.
              </li>
              <li>
                Client-Centric Vision: Your dreams shape our blueprints,
                ensuring personalized and meaningful designs.
              </li>
              <li>
                Excellence in Execution: We blend craftsmanship and technology
                to deliver outstanding results.
              </li>
            </ul>
            At Udaan Studio, we don&apos;t just design spaces—we create
            experiences that resonate with nature and modern aspirations.
            Whether you seek a dream home, a dynamic workspace, or a
            transformative urban development, we are here to elevate your vision.
          </div>
        </div>
      );
    case "team":
      return (
        <div>
          <div className="w-full mt-8 flex justify-start ml-14 items-end gap-12">
            <Image
              src="/founder.jpg"
              alt="Team"
              width={300}
              height={384}
              className="rounded-md object-cover"
            />
            <p className="text-5xl max-w-96">
              Meet our Founder, CEO &amp; Principal Architect
            </p>
          </div>
          <div className="">
            <p className="m-4 p-2">
              Ar. Harsh Prajapat is the visionary behind Udaan Studio, leading
              the firm with a passion for innovative, sustainable, and
              people-centric architecture. With a deep understanding of design,
              urban planning, and real estate, he envisions redefining the
              architectural landscape of India through creativity and
              excellence.
            </p>
            <p className="p-2 m-4">
              A graduate of NIT Bhopal (Maulana Azad National Institute of
              Technology, Bhopal), Ar. Harsh combines technical expertise with
              practical experience to craft functional, aesthetically inspiring,
              and eco-friendly spaces. His work spans residential, commercial,
              and urban planning projects, ensuring each structure tells a
              unique story of design and purpose.
            </p>
            <p className="p-2 m-4">
              Driven by the philosophy of &quot;Uplifting Designs Advancing
              Architecture in Nature&apos;s Embrace (UDAAN),&quot; he believes in
              blending architecture with sustainability, creating spaces that
              inspire and endure. His ambition extends beyond just designing
              buildings—he strives to make a lasting impact on India&apos;s urban
              and architectural landscape, contributing to a future where
              thoughtful design shapes thriving communities and modern cities.
            </p>
            <div className="p-2 m-4">
              With a relentless pursuit of quality, innovation, and client
              satisfaction, he continues to push boundaries, setting new
              benchmarks in architecture and planning in India.
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4">
            We are a company focused on delivering exceptional services. Our
            mission is to provide high-quality solutions that improve lives.
          </p>
        </div>
      );
  }
};

export const BannerCard = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">
            25% OFF
          </p>
          <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
          <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
          <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
            Book Now
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            src="https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Banner"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <nav className="bg-gray-700 text-white p-4">
        <ul className="flex justify-center space-x-12 text-xl">
          <li>
            <button
              onClick={() => handleClick("about")}
              className="hover:bg-white p-2 rounded hover:text-black"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("team")}
              className="hover:bg-white p-2 rounded hover:text-black"
            >
              Our Team
            </button>
          </li>
        </ul>
      </nav>

      <div className="p-6">
        <ContentSection section={selectedSection} />
      </div>
    </div>
  );
};

export default App;