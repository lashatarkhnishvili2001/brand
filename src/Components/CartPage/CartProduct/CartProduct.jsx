// import React, { useEffect, useState } from 'react'
import { Heading, Heading4, Heading5, Heading6, Subheading } from '../../Headings'
import shirt from  '../../../Assets/images/CartBitmap.png'
import { ButtonLargeBlue, ButtonLargeWhite, ButtonLargeWhiteIcon, ButtonSmallWhite } from '../../Buttons'
import './CartProduct.css'
import { AddSvg, BackCartSvg, LogoPPaySvg, LogoPaySvg, PaymentPaySvg, RemoveSvg, VisaPaySvg } from '../../../static/icons'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate} from 'react-router-dom'
// import removeFromCart from '../../../store/removeFromCart/removeFromCart';
// import getMyCartProducts from '../../../store/getMyCartProducts/getMyCartProducts'
// import { Alert, Modal, Space } from 'antd'
// import Loader from '../../Loader/Loader'
// import cartPriceCounter from '../cartPriceCounter'

const CartProduct = () => {
    const navigate = useNavigate()

    // const [open, setOpen] = useState(false);
    // const [visible,setVisible] = useState(false);
    // const [totalPrice, setTotalPrice] = useState(0);

    // const JWToken = JSON.parse(localStorage.getItem('user'));

    // const dispatch = useDispatch()

    // const navigate = useNavigate()

    // const {removed, loading} = useSelector((state) => state.removeFromCart);
    
    // const {cartProducts} = useSelector((state) => state.getMyCartProducts)

    // let priceSum = 0

    // for (const item of cartProducts) {
    //     priceSum += parseFloat(item.price);
    // }

    // useEffect(() => {
    //     setTotalPrice(priceSum);
    // }, [priceSum])

    // useEffect(() => {
    //     dispatch(getMyCartProducts(JWToken.jwt));
    // }, [dispatch, loading])

    // const showModal = () => {
    //     setOpen(true);
    // };

    // const handleOK = (id) => {
    //     dispatch(removeFromCart({id, token: JWToken.jwt}))
    //     setOpen(false);
    //     setVisible(true);
    // };

    // const handleCancel = () => {
    //     setOpen(false);
    // }

    // if(visible) {
    //     setTimeout(() => {
    //         setVisible(false);
    //     }, 500);
    // }

    return (
        // <section className='section-main'>
        // {removed && 
        //     <Space direction='vertical' style={{ width: '100%', padding:"30px"}} >
        //         {visible && (
        //             <Alert message='successfully remove from the cart' type='success' closable />
        //         )} 
        //     </Space>
        // }

        //     <Heading text={`My cart ${cartProducts.length}`}/>
        //     <div className="cart-row">
        //         {!loading?
        //             (cartProducts.length > 0 ? (
        //                 <div className="cart-main-col">
        //                     {cartProducts.map((item) => {
        //                         return (
        //                             <div className="cart-item-container">
        //                                 <div className="cart-image">
        //                                     <img src={item.images[0]} alt="products" />
        //                                 </div>
        //                                 <div className="cart-info">
        //                                     <span className='cart-name'>{item.name}</span>
        //                                     <Subheading text={'Size: medium, Color: blue,  Material: Plastic '}/>
        //                                     <Subheading text={`Brand: ${item.brand}`}/>
        //                                     <div className="cart-button-row">
        //                                         <ButtonSmallWhite text={'Remove'} onClick={() => showModal()}/>
        //                                         <Modal title='Remove item from cart'
        //                                             open={open}
        //                                             cancelText='No'
        //                                             okText='Yes'
        //                                             onOk={() => handleOK(item.id)}
        //                                             onCancel={handleCancel}
        //                                         ><p>are you sure?</p></Modal>
        //                                         <ButtonSmallWhite text={'Save for later'}/>
        //                                     </div>
        //                                 </div>
        //                                 <cartPriceCounter product={item} setTotalPrice={setTotalPrice} totalPrice={totalPrice} />
        //                             </div>
        //                     )
        //                 })}
        //             <div className="cart-button">
        //                 <Link to={'/products'}>
        //                        <ButtonLargeWhiteIcon text={<Heading5 text={'Back to shop'}/>} icon={<BackCartSvg/>}/>
        //                    </Link>
        //                 <ButtonLargeWhite text={<Heading5 text={'Remove all'}/>} />
        //             </div>
        //         </div>
        //         ): (
        //             <h3 className='h3=title drk noCartItems'> NO PRODUCTS IN CART</h3>
        //         )) : <div className="cart-loading-container"><Loader/></div>  }
                
        //         <div className="cart-pay-col"> 
        //             <div className="cart-pay-info">
        //                 <div className="cart-pay-row">
        //                     <Subheading  text={'Subtotal:'} classnames = '' styles={{color:'red'}}/>
        //                     <Subheading text={${Math.round(totalPrice * 100) / 100}} />
        //                 </div>
        //                 <div className="cart-pay-row">
        //                     <Subheading text={'Discount'} styles={{color:'green'}}/>
        //                     <Subheading text={'- $60.00'}/>
        //                 </div>
        //                 <div className="cart-pay-row">
        //                     <Subheading text={'Tax:'}/>
        //                     <Subheading text={'+ $14.00'}/>
        //                 </div>
        //                 <div className="cart-total-pay">
        //                     <Heading6 text={'Total:'}/>
        //                     <Heading4 text={'$1357.97'}/>
        //                 </div>
        //                 <ButtonLargeBlue text={'Checkout'} />
        //                 <div className="cart-pay-methods">
        //                     <div className="cart-pay-method">
        //                         <PaymentPaySvg />
        //                     </div>
        //                     <div className="cart-pay-method">
        //                         <LogoPaySvg />
        //                     </div>
        //                     <div className="cart-pay-method">
        //                         <LogoPPaySvg />
        //                     </div>
        //                     <div className="cart-pay-method">
        //                         <VisaPaySvg />
        //                     </div>
        //                     <div className="cart-pay-method">
        //                         <PaymentPaySvg />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        // -------------------

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
                        <Link to={'/products'}>
                            <ButtonLargeWhiteIcon text={<Heading5 text={'Back to shop'}/>} icon={<BackCartSvg/>}/>
                        </Link>
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