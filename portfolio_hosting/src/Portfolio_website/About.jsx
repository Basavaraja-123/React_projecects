import React from 'react'

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeroImg2 from './Components/HeroImg2';
import AboutContant from './Components/AboutContant';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Im a friendly front-End Devloper." />
      <AboutContant/>
      <Footer />
    </div>
  )
}

export default About