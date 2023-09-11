import React from 'react'
import { Heading, Heading4, Heading6, Subheading } from '../../Headings'
import shirt from  '../../../Assets/images/CartBitmap.png'
import { ButtonLargeBlue, ButtonSmallWhite } from '../../Buttons'
import './CartProduct.css'
import { AddSvg, RemoveSvg } from '../../../static/icons'

const CartProduct = () => {
    return (
        <section className='section-main'>
            <Heading text={`My cart ${'(3)'}`}/>
            <div className="cart-row">
                <div className="cart-main-col">
                    <div className="cart-item-container">
                        <div className="cart-image">
                            <img src={shirt} alt="" />
                        </div>
                        <div className="cart-info">
                            <span className='cart-name'>T-shirts with multiple colors, for men and lady</span>
                            <Subheading text={'Size: medium, Color: blue,  Material: Plastic '}/>
                            <Subheading text={'Seller: Artel Market'}/>
                            <div className="cart-button-row">
                                <ButtonSmallWhite text={'Remove'}/>
                                <ButtonSmallWhite text={'Save for later'}/>
                            </div>
                        </div>
                        <div className="cart-quantity-price">
                            <span className='cart-price'>$78.99</span>
                            <div className="cart-quantity">
                                <div className="quantity-remove">
                                    <RemoveSvg/>
                                </div>
                                <div className="quantity-num">
                                    3
                                </div>
                                <div className="quantity-add">
                                    <AddSvg/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-container">
                        <div className="cart-image">
                            <img src={shirt} alt="" />
                        </div>
                        <div className="cart-info">
                            <span className='cart-name'>T-shirts with multiple colors, for men and lady</span>
                            <Subheading text={'Size: medium, Color: blue,  Material: Plastic '}/>
                            <Subheading text={'Seller: Artel Market'}/>
                            <div className="cart-button-row">
                                <ButtonSmallWhite text={'Remove'}/>
                                <ButtonSmallWhite text={'Save for later'}/>
                            </div>
                        </div>
                        <div className="cart-quantity-price">
                            <span className='cart-price'>$78.99</span>
                            <div className="cart-quantity">
                                <div className="quantity-remove">
                                    <RemoveSvg/>
                                </div>
                                <div className="quantity-num">
                                    3
                                </div>
                                <div className="quantity-add">
                                    <AddSvg/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-container">
                        <div className="cart-image">
                            <img src={shirt} alt="" />
                        </div>
                        <div className="cart-info">
                            <span className='cart-name'>T-shirts with multiple colors, for men and lady</span>
                            <Subheading text={'Size: medium, Color: blue,  Material: Plastic '}/>
                            <Subheading text={'Seller: Artel Market'}/>
                            <div className="cart-button-row">
                                <ButtonSmallWhite text={'Remove'}/>
                                <ButtonSmallWhite text={'Save for later'}/>
                            </div>
                        </div>
                        <div className="cart-quantity-price">
                            <span className='cart-price'>$78.99</span>
                            <div className="cart-quantity">
                                <div className="quantity-remove">
                                    <RemoveSvg/>
                                </div>
                                <div className="quantity-num">
                                    3
                                </div>
                                <div className="quantity-add">
                                    <AddSvg/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-pay-col"> 
                    <div className="cart-pay-info">
                        <div className="cart-pay-row">
                            <Subheading  text={'Subtotal:'}/>
                            <Subheading text={'$1403.97'} />
                        </div>
                        <div className="cart-pay-row">
                            <Subheading text={'Discount'}/>
                            <Subheading text={'- $60.00'}/>
                        </div>
                        <div className="cart-pay-row">
                            <Subheading text={'Tax:'}/>
                            <Subheading text={'+ $14.00'}/>
                        </div>
                        <div className="cart-total-pay">
                            <Heading6 text={'Total:'}/>
                            <Heading4 text={'$1357.97'}/>
                        </div>
                        <ButtonLargeBlue text={'Checkout'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartProduct