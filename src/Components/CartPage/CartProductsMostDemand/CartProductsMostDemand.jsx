import React from 'react'
import { Heading4, Heading5, Heading7, Subheading } from '../../Headings'
import { CartProductsMostDemandArray } from '../../../static/CartProductsMostDemand'
import './CartProductsMostDemand.css'
import { ShoppingCartSvg } from '../../../static/icons'
import { ButtonLargeWhiteIcon } from '../../Buttons'

const CartProductsMostDemand = () => {
    return (
        <section className='cart-main-section'>
            <Heading4 text={'Saved for later'}/>
            <div className="cart-products-container">
                <ul className='cart-products-ul'>
                {CartProductsMostDemandArray.map((item) => {
                    return (
                    <li className='cart-products-li' key={item.id}>   
                        <div className="cart-product">
                            <div className="cart-image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="cart-product-info">
                                <Heading7 text={item.price} />
                                <Subheading text={item.product}/>
                                <ButtonLargeWhiteIcon text={<Heading5 text={'Move to cart'}/>} icon={<ShoppingCartSvg/>}/>
                            </div>
                        </div>
                    </li>
                    )
                })}
                </ul>
            </div>
        </section>
    )
}

export default CartProductsMostDemand