import React from 'react'
import { products } from '../../../static/products'
import { Subheading1 } from '../../Headings'
import './productsItem.css'

const ProductsItem = () => {
    return (
        <>
        {products.map((value, index) => {
            return index < 6 && (
                <li className='productsItem-li' key={index}>
                    <div className="background-img">
                        <img src={value.img} alt="" />
                    </div>
                    <div className="tile">
                        <Subheading1 text={value.title} />
                    </div>
                    <Subheading1 text={value.price} />
                </li>
            )
        })}
        </>
    )
}

export default ProductsItem