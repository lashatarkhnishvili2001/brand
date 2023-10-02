import React, { useEffect } from 'react'
import MainSideRight from '../Right/MainSideRight'
import './ProductsMain.css'
import MainSideLeft from '../Left/MainSideLeft'
import { useState } from 'react'
import FilterView from './filter-view'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/products/products'
import { useSearchParams } from 'react-router-dom'

const ProductsMain = () => {
    const [view , setView] = useState(false)
    const [filterShow, setFilterShow] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const params = Object.fromEntries([...searchParams])

    const dispatch = useDispatch()


    const {data, loading, error }  = useSelector((state) => state.products);

    let products = data

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    
    if(params.currentCategory) {
        products = products.filter((item) => (item.categoryId === params.currentCategory))
    }

    // if(params.brands) {
    //     products = products.filter((item) => (params.brands.includes(item.brand)))
    // }else {
    //     products = data
    // }

    if(params.priceRange ) {
        let priceSplit = params.priceRange.split('-')
        products = products.filter((item) => (+item.price > +priceSplit[0] && +item.price < +priceSplit[1]))
    }

    return (
        <>

            <FilterView view={view} setView={setView} setFilterShow={setFilterShow}/>
            <div className="ProductsMain">
                <div className={`left-main ${filterShow? 'active' : ''}`}>
                    <MainSideLeft filterShow={filterShow} />
                </div>
                <div className="right-main">
                    <MainSideRight view={view} setView={setView} products={products} params={params}/>
                </div>
            </div>
        </>   
    )
}

export default ProductsMain;