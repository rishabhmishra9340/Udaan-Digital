import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <nav class="flex px-4 justify-between items-center">
              <div class="">
                <Image src='/LOGO PNG.png' alt='Not Found' height={140} width={140}></Image>
              </div>
              <div>
                <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"></img>
              </div>
            </nav>
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold">Driven by a <span class="text-gray-700">passion</span> for excellence</h1>
                <div class="w-20 h-2 bg-gray-700 my-4"></div>
                <p class="text-xl mb-10">UDAAN Studio, Uplifting Designs Advancing Architecture in Nature's embrace, envisions a world where every structure tells a story of innovation, harmony, and sustainability.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"></img>
      </div>
    </>
  )
}
