import React from 'react'
import Navbar from './Navbar'
import Header from './header'
import  Url from './url'
import DragDropFiles from './DragDropFiles'


const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <Header />
      <Url/>
      <DragDropFiles/>

    </div>
  )
}

export default LandingPage