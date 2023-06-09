import { useContext } from 'react'
import stars from '../assets/stars-icon.svg'
import ContentApi from './ContentApi'


export default function Item({product}) {
  
  const {itemAdder} = useContext(ContentApi)

  return (


    <div className='item'>
      <img src={product.images[0]} alt="item-img.svg" />
      <div className="rating-bar">
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
        <img src={stars} alt="rating-stars" />
      </div>
      <div className="item-title">{product.title}</div>
      <div className="item-price">{product.price} USD</div>
      <button className='add-btn' onClick={()=>itemAdder(product.id)}>ADD TO CARD</button>
    </div>
  )
}
