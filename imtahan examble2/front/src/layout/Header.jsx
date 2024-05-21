import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
function Header() {
  return (
    <header>
      <div className='container'>
    <div className="row align-items-center ">
    <div className='col-3 '>
        <a href="#">EATWELL</a>
      </div>
      <div className='col-9'>
      <ul>
        <li> <Link to={'/'}> Home</Link> </li>
        <li> <Link to={'/add'}>Add</Link></li>
        <li> <Link to={'/basket'}> Basket</Link></li>
        <li><Link to={'/wislist'}>Wishlist</Link></li>
      </ul>
      </div>
    </div>
    </div>
    </header>
  )
}

export default Header
