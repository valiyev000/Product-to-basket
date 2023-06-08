import React from 'react'
import stars from '../assets/stars-icon.svg'

export default function Item() {
  return (
    <div className='item'>
      <img src="../src/assets/item-img.svg" alt="item-img.svg" />
      <div className="rating-bar">
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
      </div>
      <div className="item-title">Chanel Egoiste</div>
      <div className="item-price">255 AZN</div>
      <button className='add-btn'>ADD TO CARD</button>
    </div>
  )
}
