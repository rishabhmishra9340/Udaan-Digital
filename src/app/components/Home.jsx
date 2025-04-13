import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="">
                <Image src='/LOGO PNG.png' alt='Logo' height={140} width={140}></Image>
              </div>
              <div>
                <Image src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="Icon" className="w-8" width={32} height={32}></Image>
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">Driven by a <span className="text-gray-700">passion</span> for excellence</h1>
                <div className="w-20 h-2 bg-gray-700 my-4"></div>
                <p className="text-xl mb-10">UDAAN Studio, Uplifting Designs Advancing Architecture in Nature&apos;s embrace, envisions a world where every structure tells a story of innovation, harmony, and sustainability.</p>
              </div>
            </header>
          </div>
        </div>
        <Image 
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
          alt="Leafs" 
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          width={634} 
          height={423} />
      </div>
    </>
  );
}
