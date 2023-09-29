import React, { useRef, useState } from 'react'
import { AddSvg, RemoveSvg } from '../../../static/icons'

const cartPriceCounter = ({product, setTotalPrice }) => {
    const [itemCounter, setItemCounter] = useState(1)

    const totalRef = useRef()

    const handleMinus = () => {
        if (itemCounter > 1) {
            setItemCounter(prev => prev - 1)
            setTotalPrice(prev => (prev - parseFloat(product.price)))
        }

    }

    const handlePlus = () => {
        setItemCounter(prev => prev + 1)
            setTotalPrice(prev => (prev + parseFloat(product.price)))
    }

    return (
            <div className="cart-quantity-price">
                <span className='cart-price'>${(product.price * itemCounter).toFixed(2)}</span>
                <div className="cart-quantity">
                    <div className="quantity-remove">
                        <RemoveSvg onClick={() => handleMinus()}/>
                    </div>
                    <div className="quantity-num" ref={totalRef}>
                        {itemCounter}
                    </div>
                    <div className="quantity-add">
                        <AddSvg onClick={() => handlePlus()}/>
                    </div>
                </div>
            </div>
    )
}

export default cartPriceCounter;