import React from 'react'

export default function BannerCard() {
  return (
    <section class="px-3 py-5 bg-neutral-100 lg:py-10">
        <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
                <p class="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                <p class="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
                <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Book Now</button>
            </div>
            <div class="order-1 lg:order-2">
                <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
            </div>
        </div>
    </section>
  )
}
