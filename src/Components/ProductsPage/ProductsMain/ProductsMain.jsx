import React from 'react'
import MainSideRight from '../Right/MainSideRight'
import './ProductsMain.css'
import MainSideLeft from '../Left/MainSideLeft'

const ProductsMain = () => {
    return (
        <div className="ProductsMain">
            <div className="left-main">
                <MainSideLeft/>
            </div>
            <div className="right-main">
                <MainSideRight/>
            </div>
        </div>
    )
}

export default ProductsMain;