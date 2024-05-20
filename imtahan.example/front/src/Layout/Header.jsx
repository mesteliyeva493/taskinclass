import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <div>
     
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/Basket">
                Basket
            </Link>
            <Link to="/Add">
                Add
            </Link>
            <Link to="/Wishlist">
            Wishlist
            </Link>
        </div>
     </div>
    </>
  )
}

export default Header