import React from 'react'

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HeroImg2 from './Components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Im a friendly front-End Devloper." />
      <Footer />
    </div>
  )
}

export default About