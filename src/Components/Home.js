import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'
import { MainBody } from './Main page/MainBody'
import { Body } from './Dynamic page/Body'
import { Carousels } from './Carousel/Carousels'
export const Home = () => {
  return (
    <div>
     <Navbar />
     {/* <MainBody /> */}
     <Carousels />
     <Body />
     <Footer />
    </div>
  )
}
