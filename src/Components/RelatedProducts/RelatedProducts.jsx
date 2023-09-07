import React from 'react'
import ProductsItem from './productsItem'
import './relativeProducts.css'
import { Heading4 } from '../Headings'

const RelatedProducts = () => {
    return (
        <div className="RelatedProducts">
            <Heading4 text={'Related products'} />
            <div className="products-container">
                <ul className='products-item-ul'>
                    <ProductsItem/>
                </ul>
            </div>
        </div>
    )
}

export default RelatedProducts