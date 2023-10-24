import React, { useEffect } from 'react'
// import { products } from '../../../static/products'
import { Subheading1 } from '../../Headings'
import './productsItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products/products'
import { useNavigate } from 'react-router-dom'

const ProductsItem = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

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
                <li className='productsItem-li' key={index} onClick={() => {navigate(`/details/${value.id}`)}}>
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