import React from 'react'
import './Main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Side from '../../comps/sidebar/Side'

import All from './All'
import Cloud from './Cloud'
import Db from './Db'
import Saas from './Saas'
import Managment from './Managment'
import img1 from '../../assets/cloud-sm.png'
import img2 from '../../assets/cloud-bg.png'



const Main = () => {
  return (
    <div className='main-page'>
      <div className="main-offer">
        <div className="offer-top">
          <img src={img1} alt="1" />
          <p>new</p>
        </div>

        <div className="offer-center">
          <img src={img2} alt="2" />
          <p className="center-text">Google Cloud Platform - Tools & Modern Applications</p>
        </div>

        <div className="offer-bot">
          <div className="offer-bot-content">
            <p>Save</p>
            <h4>$100 000</h4>
          </div>
          
          <button>see more</button>
        </div>
      </div>


      <Routes>
        <Route path='/' exact Component={All} />
        <Route path='/cloud' exact Component={Cloud} />
        <Route path='/managment' exact Component={Managment} />
        <Route path='/database' exact Component={Db} />
        <Route path='/saas' exact Component={Saas} />
      </Routes>
    </div>
  )
}

export default Main