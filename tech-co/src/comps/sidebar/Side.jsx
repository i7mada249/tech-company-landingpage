import React from 'react'
import './Side.css'
import { Link } from 'react-router-dom'

const Side = () => {
  return (
    <div className='sidebar-comp'>
      <ul className='side-list'>
        <Link to='/'>All</Link>
        <Link to='/cloud'>Cloud Service</Link>
        <Link to='/database'>DB Management</Link>
        <Link to='/managment'>Management</Link>
        <Link to='/saas'>SAAS</Link>
        <Link to='/'>All</Link>
        <Link to='/cloud'>Cloud Service</Link>
        <Link to='/database'>DB Management</Link>
        <Link to='/managment'>Management</Link>
        <Link to='/saas'>SAAS</Link>
        <Link to='/'>All</Link>
        <Link to='/cloud'>Cloud Service</Link>
        <Link to='/database'>DB Management</Link>
        <Link to='/managment'>Management</Link>
        <Link to='/saas'>SAAS</Link>
      </ul>
    </div>
  )
}

export default Side