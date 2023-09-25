import React from 'react'
import ProductsMain from '../../Components/ProductsPage/ProductsMain'
import './products.css'
import Email from '../../Components/Email'

const Products = () => {
    return (
        <>
        <div className='products-main'>
            <ProductsMain/>
        </div>
        <Email/>
        </>
    )
}

export default Products