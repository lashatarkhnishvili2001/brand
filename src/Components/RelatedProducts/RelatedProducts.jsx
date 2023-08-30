import React from 'react'
import ProductsItem from './productsItem'
import './relativeProducts.css'

const RelatedProducts = () => {
    return (
        <div className="RelatedProducts">
            <div className="products-container">
                <ul className='products-item-ul'>
                    <ProductsItem/>
                </ul>
            </div>
        </div>
    )
}

export default RelatedProducts