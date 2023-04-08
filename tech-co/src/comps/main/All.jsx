import React from 'react'
import './Main.css'
import Offer from '../offer/Offer'
import {
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
  offer6
} from '../../assets/imports'

const All = () => {
  return (
    <div className="all-offers-page">
      <div className='all-offers'>
        <Offer saves='Save 50%' imgUrl={offer1} details='this is an example text that shows you details about the offer' />
        <Offer saves='Save 50%' imgUrl={offer2} details='this is an example text that shows you details about the offer' />
        <Offer saves='Save 50%' imgUrl={offer3} details='this is an example text that shows you details about the offer' />
        <Offer saves='Save 50%' imgUrl={offer4} details='this is an example text that shows you details about the offer' />
        <Offer saves='Save 50%' imgUrl={offer5} details='this is an example text that shows you details about the offer' />
        <Offer saves='Save 50%' imgUrl={offer6} details='this is an example text that shows you details about the offer' />
      </div>
    </div>
  )
}

export default All