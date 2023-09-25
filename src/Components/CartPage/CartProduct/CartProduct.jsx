import React from 'react'
import { Heading, Heading4, Heading5, Heading6, Subheading } from '../../Headings'
import shirt from  '../../../Assets/images/CartBitmap.png'
import { ButtonLargeBlue, ButtonLargeWhite, ButtonLargeWhiteIcon, ButtonSmallWhite } from '../../Buttons'
import './CartProduct.css'
import { AddSvg, BackCartSvg, LogoPPaySvg, LogoPaySvg, PaymentPaySvg, RemoveSvg, VisaPaySvg } from '../../../static/icons'

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
                    <div className="cart-button">
                        <ButtonLargeWhiteIcon text={<Heading5 text={'Back to shop'}/>} icon={<BackCartSvg/>}/>
                        <ButtonLargeWhite text={<Heading5 text={'Remove all'}/>} />
                    </div>
                </div>
                <div className="cart-pay-col"> 
                    <div className="cart-pay-info">
                        <div className="cart-pay-row">
                            <Subheading  text={'Subtotal:'} classnames = '' styles={{
                                color:'red'
                            }}/>
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
                        <div className="cart-pay-methods">
                            <div className="cart-pay-method">
                                <PaymentPaySvg />
                            </div>
                            <div className="cart-pay-method">
                                <LogoPaySvg />
                            </div>
                            <div className="cart-pay-method">
                                <LogoPPaySvg />
                            </div>
                            <div className="cart-pay-method">
                                <VisaPaySvg />
                            </div>
                            <div className="cart-pay-method">
                                <PaymentPaySvg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartProduct