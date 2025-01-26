import React from 'react'
import Banner from '../components/About/Banner'
import BannerCard from '@/app/components/About/BannerCard'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <>
    <Navbar/>
   <Banner/>
   <BannerCard/>
   </>
  )
}
