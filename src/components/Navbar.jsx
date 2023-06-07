import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <nav>
        <NavLink activeClassName="selectedNav" to="/" exact>Home</NavLink>
        <NavLink activeClassName="selectedNav" to="/basket">
            <img src="../src/assets/bag-icon.svg" alt="bag-icon.svg" />
            <span>Basket</span>
            <div className="productCounter">0</div>
        </NavLink>
    </nav>
  )
}
