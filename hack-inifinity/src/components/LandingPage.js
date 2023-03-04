import React from 'react'
import Navbar from './Navbar'
import Header from './header'
import  Url from './url'
import DragDropFiles from './DragDropFiles'
import Benefits from './benefits'
import Works from './works'
import Footer from './Footer'


const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>
      <Benefits />
      <Works/>
      <Footer/>

    </div>
  )
}

export default LandingPage