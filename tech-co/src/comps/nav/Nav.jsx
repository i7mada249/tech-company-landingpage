import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-cont'>
      <nav className='navbar'>
        <div className="nav-logo">
          <h3 className="logo">LOGO HERE</h3>
        </div>
        <div className="nav-elements">
          <a href="">Home</a>
          <a href="">Benefits</a>
          <a href="">Pricing</a>
          <button>Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav