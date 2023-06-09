import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import ContentApi from './ContentApi';

export default function Navbar() {

  console.log("Navbar render");

  const {basketItem} = useContext(ContentApi)

  return (
    <nav>
      <NavLink activeClassName="selectedNav" to="/" exact>Home</NavLink>
      <NavLink activeClassName="selectedNav" to="/basket">
        <img src="../src/assets/bag-icon.svg" alt="bag-icon.svg" />
        <span>Basket</span>
        <div className="productCounter">{basketItem.length}</div>
      </NavLink>
    </nav>
  )
}
