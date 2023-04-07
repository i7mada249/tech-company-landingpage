import React from 'react'
import Header from './comps/header/Header'
import Nav from './comps/nav/Nav'
import Side from './comps/sidebar/Side'
import Main from './comps/main/Main'

const App = () => {
  return (
    <div>
      <div className="nav">
        <Nav />
      </div>
      <Header />
      <div className="content">
        <Side />
        <Main />
      </div>
    </div>
  )
}

export default App