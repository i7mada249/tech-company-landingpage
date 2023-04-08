import React from 'react'
import './Offer.css'

const Offer = ( {saves, details, imgUrl} ) => {
  return (
    <div>
      <div className="sm-offer">
        <div className="up">
          <p>{saves}</p>
        </div>
        <div className="cen-offer">
          <img src={imgUrl} alt="" />
          <p>{details}</p>
        </div>
        <div className="down">
          <h4>USE CODE</h4>
          <button className='offer-btn'>see more</button>
        </div>
      </div>
    </div>
  )
}

export default Offer