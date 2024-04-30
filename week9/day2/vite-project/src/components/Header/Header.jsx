import React from 'react'
import './Header.scss'
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
    <header className='header'>
      <div className='logo'><a href="#"><img src="https://capp.nicepage.com/images/default-logo.png" alt="" /></a></div>
      <div className='hamburger'> <RxHamburgerMenu /></div>
    </header>

    
    </>
  )
}

export default Header