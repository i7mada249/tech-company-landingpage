import React from 'react'
import './Header.css'
import img from'../../assets/header.png'

const Header = () => {
    return (
        <div className='page-header'>
            <div className="header-content">
                <h1>Bring your company to the next level</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className="header-img">
                <img src={img} alt="Main" />
            </div>
        </div>
    )
}

export default Header