import React from 'react'
import Header from './Team_Membar_allocation/Header'

import Footer from './Team_Membar_allocation/Footer'
import Emplyees from './Team_Membar_allocation/Emplyees'






// Portfolio_Website import About from './Portfolio_Website/About'
// import Contact from './Portfolio_Website/Contact'
// import Home from './Portfolio_Website/Home'
// import Projects from './Portfolio_Website/Projects' 
// import { Route,Routes} from 'react-router-dom'; Portfolio_Website


function App  () {
  return (
    <> 
      <Header/>
      <Emplyees />
     
      <Footer />

       
      
       {/* Portfolio_Website<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        </Routes> Portfolio_Website */}
      

        
         
    </>
  )               
}
export default App


