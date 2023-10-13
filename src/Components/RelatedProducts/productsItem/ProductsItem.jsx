import React, { useEffect } from 'react'
// import { products } from '../../../static/products'
import { Subheading1 } from '../../Headings'
import './productsItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products/products'

const ProductsItem = () => {

    const dispatch = useDispatch()

    const {data, loading, error }  = useSelector((state) => state.products);
    
    let products = data
    console.log(products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (
        <>
        {products.map((value, index) => {
            return index < 6 && (
                <li className='productsItem-li' key={index}>
                    <div className="background-img">
                        <img src={value.images[0]} alt="" />
                    </div>
                    <div className="tile">
                        <Subheading1 text={value.brand} />
                    </div>
                    <Subheading1 text={value.price} />
                </li>
            )
        })}
        </>
    )
}

export default ProductsItem