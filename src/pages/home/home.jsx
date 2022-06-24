import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Navbarr from '../../components/navbar/navbar'
import HeroBanner from '../../components/hero banner/heroBanner'
import Games from '../../components/games/games'
import Newsletter from '../../components/newsletter/newsletter'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
    <div>
      
        <Topbar/>
        <Navbarr/>
        <HeroBanner/>
        <Games/>
        <Newsletter/>
      
        <Footer/>
    </div>
  )
}

export default Home