import React from 'react'

import Navbar from './Components/Navbar'
import HeroImg from './Components/HeroImg'
import Work from './Components/Work'
import Footer from './Components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work />
      <Footer/>
    </div>
  )
}

export default Home