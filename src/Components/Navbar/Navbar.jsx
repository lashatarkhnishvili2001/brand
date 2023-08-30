import React from 'react'
import Profile from '../../Assets/images/profile.png';
import Message from '../../Assets/images/message.png';
import Orders from '../../Assets/images/order.png';
import Cart from '../../Assets/images/cart.png';

import './style.css'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <NavLink className={"nav-link"} to="/Profile">
                        <div className="item-container">
                            <div className="image-container">
                                <img src={Profile} alt="" />
                            </div>
                            <span>profile</span>
                        </div>
                    </NavLink>
                </li>
                <li className="navbar-li display-none ">
                    <NavLink className={"nav-link"} to="/">    
                        <div className="item-container">
                            <div className="image-container">
                                <img src={Message} alt="" />
                            </div>
                            <span>message</span>
                        </div>
                    </NavLink>
                </li>
                <li className="navbar-li display-none">
                    <NavLink className={"nav-link"} to="/">
                        <div className="item-container">
                            <div className="image-container">
                                <img src={Orders} alt="" />
                            </div>
                            <span>orders</span>
                        </div>
                    </NavLink>
                </li>
                <li className="navbar-li active">
                    <NavLink className={"nav-link"} to="/Cart">
                        <div className="item-container cart-my-cart" id="cart-icon">
                            <div className="image-container" >
                                <img src={Cart} alt="" />
                            </div>
                            <span>my cart</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;