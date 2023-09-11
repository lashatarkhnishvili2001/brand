import React from 'react'
import './cart.css'
import CartProduct from '../../Components/CartPage/CartProduct'
import BannerBlue from '../../Components/Banner-blue/BannerBlue'

const Cart = () => {
    return (
        <div className='cart-main'>
            <CartProduct/>
            <BannerBlue/>
        </div>
    )
}

export default Cart