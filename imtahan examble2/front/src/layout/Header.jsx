import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul>
        <li> <Link to={'/'}> Home</Link> </li>
        <li> <Link to={'/add'}>Add</Link></li>
        <li> <Link to={'/basket'}> Basket</Link></li>
        <li><Link to={'/wishlist'}>Wishlist</Link></li>
      
      </ul>
    </div>
  )
}

export default Header
