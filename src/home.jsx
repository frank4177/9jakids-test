import React from 'react'
import Navbar from './navbar/navbar';
import Showcase from './showcase/showcase';
import Skills from './skills/skills';
import Works from './works/works';
import Services from './services/services';
import Contact from './contact/contact';
import Footer from './footer/footer';
import CVandPic from './CVandPic/CVandPic';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Showcase/>
        <Skills/>
        <Works/>
        <CVandPic/>
        <Contact/>
        {/* <Services/> */}
        
        <Footer/>
    </div>
  )
}

export default Home;