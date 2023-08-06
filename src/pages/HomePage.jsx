import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/Carousel'
import AboutUsPage from './AboutUsPage'
import ExploreRoomsPage from './ExploreRoomsPage'
import OurServicesPage from './OurServicesPage'
import Footer from '../components/Footer'
import ExploreStaffPage from './ExploreStaffPage'

export default function HomePage() {

  return (
    <>
        <Navbar/>
        <ImageCarousel/>
        <AboutUsPage/>
        <ExploreRoomsPage />
        <OurServicesPage />
        <ExploreStaffPage />
        <Footer />
    </>
  )
}
