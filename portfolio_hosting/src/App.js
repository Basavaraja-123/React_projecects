import React from 'react'

import About from './Portfolio_website/About'
import Contact from './Portfolio_website/Contact'
import Home from './Portfolio_website/Home'
import Projects from './Portfolio_website/Projects' 

import { Route,Routes} from 'react-router-dom';


function App  () {
  return (
    <> 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        </Routes>
      

         {/* <Home/>
         <Projects/>
         <About/>
         <Contact/> */}
         
    </>
  )               
}
export default App


