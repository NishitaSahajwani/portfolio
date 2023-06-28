import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'
import Contact from './Contact'
function Portfolio() {
  return (
    <div>
       <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <SocialLinks/>
    </div>
  )
}

export default Portfolio