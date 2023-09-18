import React from 'react'
import './cart.css'
import CartProduct from '../../Components/CartPage/CartProduct'
import BannerBlue from '../../Components/Banner-blue/BannerBlue'
import CartProductsMostDemand from '../../Components/CartPage/CartProductsMostDemand'

const Cart = () => {
    return (
        <div className='cart-main'>
            <CartProduct/>
            <CartProductsMostDemand />
            <BannerBlue/>
        </div>
    )
}

export default Cart