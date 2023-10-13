import React, { useState } from 'react'
import Profile from '../../Assets/images/profile.png';
import Message from '../../Assets/images/message.png';
import Orders from '../../Assets/images/order.png';
import Cart from '../../Assets/images/cart.png';

import './style.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Heading5 } from '../Headings';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';



const Navbar = ({cartProducts, userToken}) => {

    const navigate = useNavigate()

    const {isLoggedIn} = useSelector((state) => state.auth)

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        
        setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
        navigate('/authorization')
        }, 1000);
    };
    const handleCancel = () => {
        setOpen(false);
    };



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
                    {/* <NavLink className={"nav-link"} to="/">     */}
                        <div className="item-container">
                            <div className="image-container">
                                <img src={Message} alt="" />
                            </div>
                            <span>message</span>
                        </div>
                    {/* </NavLink> */}
                </li>
                <li className="navbar-li display-none">
                    {/* <NavLink className={"nav-link"} to="/"> */}
                        <div className="item-container">
                            <div className="image-container">
                                <img src={Orders} alt="" />
                            </div>
                            <span>orders</span>
                        </div>
                    {/* </NavLink> */}
                </li>
                {isLoggedIn ? (<li className="navbar-li active dot">
                    <NavLink className={"nav-link"} to="/Cart">
                        <div className="item-container cart-my-cart" id="cart-icon">
                            <div className="image-container" >
                                <img src={Cart} alt="" />
                            </div>
                            <span>my cart</span>
                            { !userToken || !cartProducts.length ? (null) : (
                            <div className="cart-length">
                                <Heading5 text={cartProducts.length}/>
                            </div>
                            )}
                        </div>
                    </NavLink>
                </li>) : (
                    <li className="navbar-li active dot">
                        <div className="item-container cart-my-cart" onClick={() => showModal()} id="cart-icon">
                            <div className="image-container" >
                                <img src={Cart} alt="" />
                            </div>
                            <span>my cart</span>
                        </div>
                    </li>
                )}
                
                <Modal
                    title="You must be authorized"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    okText='Login'
                >
                
                </Modal>
            </ul>
        </div>
    )
}

export default Navbar;