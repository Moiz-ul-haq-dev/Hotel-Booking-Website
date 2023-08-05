import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from '../components/Carousel'
import AboutPage from './AboutPage'
import ExploreRoomsPage from './ExploreRoomsPage'
import OurServicesPage from './OurServicesPage'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
        <Navbar/>
        <ImageCarousel/>
        <AboutPage />
        <ExploreRoomsPage />
        <OurServicesPage />
        <Footer />
    </>
  )
}
