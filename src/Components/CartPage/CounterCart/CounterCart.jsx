import React, { useRef, useState } from 'react'
import { AddSvg, RemoveSvg } from '../../../static/icons'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment} from '../../../features/counter/counterSlice';


const CounterCart = ({product, setTotalPrice,}) => {
    // const count = useSelector((state) => state.counter.count);
    // const dispatch = useDispatch();

    
    const [itemCounter, setItemCounter] = useState(1)

    const totalRef = useRef()

    const handleMinus = () => {
        if(itemCounter > 1){
            setItemCounter(prev => prev - 1)
            setTotalPrice(prev => (prev - parseFloat(product.price)))
        }
        
    }

    const handlePlus = () => {
        setItemCounter(prev => prev + 1)
        setTotalPrice(prev => (prev + parseFloat(product.price)))
    }



    return (
    <>
        <span className='cart-price'>${(product.price * itemCounter).toFixed(2)}</span>
        <div className="cart-quantity">
            <div className="quantity-remove"  onClick={() => handleMinus()}>
                <RemoveSvg/>
            </div>
            <div className="quantity-num" ref={totalRef}>
                {itemCounter}
            </div>
            <div className="quantity-add"  onClick={() => handlePlus()}>
                <AddSvg/>
            </div>
        </div>
    </>
        // <div className="cart-quantity">
        //     <div className="quantity-remove" onClick={() => dispatch(decrement())}>
        //         <RemoveSvg/>
        //     </div>
        //     <div className="quantity-num" >
        //         {count}
        //     </div>
        //     <div className="quantity-add" onClick={() => dispatch(increment())}>
        //         <AddSvg/>
        //     </div>
        // </div>
    )
}

export default CounterCart