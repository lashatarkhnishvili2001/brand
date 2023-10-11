import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import shirt from  '../../../Assets/images/CartBitmap.png';
import { Heading, Heading4, Heading5, Heading6, Subheading } from '../../Headings';
import { ButtonLargeBlue, ButtonLargeWhite, ButtonLargeWhiteIcon, ButtonSmallWhite } from '../../Buttons';
import { AddSvg, BackCartSvg, LogoPPaySvg, LogoPaySvg, PaymentPaySvg, RemoveSvg, VisaPaySvg } from '../../../static/icons';

import { getCartProducts } from '../../../store/getMyCartProducts/getMyCartProducts'
import {removeFromCart} from '../../../store/removeFromCart/removeFromCart';

import './CartProduct.css';
import { useCallback, useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import { Modal } from 'antd';
import CounterCart from '../CounterCart';

const CartProduct = () => {

    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    const userToken = JSON.parse(localStorage.getItem('userToken'));

    const dispatch = useDispatch();

    const {removed, loading} = useSelector((state) => state.removeFromCart)
    const {cartProducts} = useSelector((state) => state.cartProducts)

    
    let priceSum = 0

    for (const item of cartProducts) {
        priceSum += parseFloat(item.price);
    }

    useEffect(() => {
        setTotalPrice(priceSum)
    }, [priceSum])

    // const incrementProductQuantity = (id) => {
    //     const updatedProductsCart = cartProducts.map((product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    // }

    // const decrementProductQuantity = (id) => {
    //     const updatedProductsCart = cartProducts.map((product => product.id === id ? (product.quantity === 1 ? product : { ...product, quantity: product.quantity - 1 })  : product))
    // }
    

    useEffect(() => {
        dispatch(getCartProducts(userToken.jwt));
    }, [dispatch, loading])

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = useCallback((id) => {
        dispatch(removeFromCart({ userToken:userToken.jwt, id}))
        setOpen(false);
        setVisible(true)
    },[dispatch]);

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        

        <section className='section-main'>
            <Heading text={`My cart ${cartProducts.length}`}/>
            <div className="cart-row">
                {!loading ? 
                (
                    cartProducts.length > 0 ? (
                        <div className="cart-main-col">
                            {cartProducts.map((item) => {
                                return (
                                    <div className="cart-item-container" key={item.id}>
                                        <div className="cart-image">
                                            <img src={item.images[0]} alt="" />
                                        </div>
                                        <div className="cart-info">
                                            <span className='cart-name'>{item.name}</span>
                                            <Subheading text={'Size: medium, Color: blue,  Material: Plastic '}/>
                                            <Subheading text={item.brand}/>
                                            <div className="cart-button-row">
                                                <ButtonSmallWhite text={'Remove' } onClick={() => showModal()} />
                                                <Modal 
                                                    title="Remove item from cart"
                                                    open={open}
                                                    cancelText='NO'
                                                    okText="yes"
                                                    onOk={() => handleOk(item.id)}
                                                    onCancel={handleCancel}
                                                    >
                                                    are you sure?
                                                </Modal>
                                                <ButtonSmallWhite text={'Save for later'}/>
                                            </div>
                                        </div>
                                        <div className="cart-quantity-price">
                                            <CounterCart product={item} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
                                        </div>
                                    </div>
                                )
                            })}
                            
                            
                            <div className="cart-button">
                                <Link to={'/products'}>
                                    <ButtonLargeWhiteIcon text={<Heading5 text={'Back to shop'}/>} icon={<BackCartSvg/>}/>
                                </Link>
                                <ButtonLargeWhite text={<Heading5 text={'Remove all'}/>} />
                            </div>
                        </div>
                    ): ( <h3>NO PRODUCTS IN CART</h3> )) : (
                    <Loader/>
                )}

                <div className="cart-pay-col"> 
                    <div className="cart-pay-info">
                        <div className="cart-pay-row">
                            <Subheading  text={'Subtotal:'} classnames = '' styles={{
                                color:'red'
                            }}/>
                            <Subheading text={`$${Math.round(totalPrice * 100) / 100}`} />
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
                            <Heading4 text={`$${Math.round(totalPrice * 100) / 100}`}/>
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