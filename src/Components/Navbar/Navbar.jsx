import React from 'react'
import Profile from '../../Assets/images/profile.png';
import Message from '../../Assets/images/message.png';
import Orders from '../../Assets/images/order.png';
import Cart from '../../Assets/images/cart.png';

import './style.css'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div class="navbar-container">
            <ul class="navbar-ul">
                <li class="navbar-li">
                    <NavLink className={"nav-link"} to="/Profile">
                        <div class="item-container">
                            <div class="image-container">
                                <img src={Profile} alt="" />
                            </div>
                            <span>profile</span>
                        </div>
                    </NavLink>
                </li>
                <li class="navbar-li display-none ">
                    <NavLink className={"nav-link"} to="/">    
                        <div class="item-container">
                            <div class="image-container">
                                <img src={Message} alt="" />
                            </div>
                            <span>message</span>
                        </div>
                    </NavLink>
                </li>
                <li class="navbar-li display-none">
                    <NavLink className={"nav-link"} to="/">
                        <div class="item-container">
                            <div class="image-container">
                                <img src={Orders} alt="" />
                            </div>
                            <span>orders</span>
                        </div>
                    </NavLink>
                </li>
                <li class="navbar-li active">
                    <NavLink className={"nav-link"} to="/Cart">
                        <div class="item-container cart-my-cart" id="cart-icon">
                            <div class="image-container" >
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