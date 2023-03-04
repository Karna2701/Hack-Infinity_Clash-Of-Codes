import React from 'react'
import Navbar from './navbar'
import Header from './header'
import  Url from './url'
import DragDropFiles from './DragDropFiles'
import Benefits from './benefits'
import Works from './works'


const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>
      <Benefits />
      <Works/>

    </div>
  )
}

export default LandingPage