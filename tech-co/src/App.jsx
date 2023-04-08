import React from 'react'
import './App.css'
import Header from './comps/header/Header'
import Nav from './comps/nav/Nav'
import Side from './comps/sidebar/Side'
import Mainpage from './comps/main/Mainpage'
import Footer from './comps/Footer'

const App = () => {
  return (
    <div className='whole-app'>
      <div className="nav">
        <Nav />
      </div>
      <Header />
      <div className="app-content">
        <Side />
        <Mainpage />
      </div>
      <Footer />
    </div>
  )
}

export default App