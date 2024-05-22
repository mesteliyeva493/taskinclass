import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 '>
                     <div>
                        <img src="https://preview.colorlib.com/assets/img/logo.png" alt="" />
                     </div>
                     </div>
                     <div className="col-lg-9">

                     
                        <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/basket"}>Basket</Link>
                            </li>
                            <li>
                                <Link to={"/wishlist"}>wishlist</Link>
                            </li>
                            <li>
                                <Link to={"/add"}>add</Link>
                            </li>
                        </ul>
                        <div className='hamburger'> <GiHamburgerMenu /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header