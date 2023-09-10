import React from 'react'
import MainSideRight from '../Right/MainSideRight'
import './ProductsMain.css'
import MainSideLeft from '../Left/MainSideLeft'
import { Subheading4 } from '../../Headings'
import { FilterSvg } from '../../../static/icons'
import { useState } from 'react'
import FilterView from './filter-view'

const ProductsMain = () => {
    const [view , setView] = useState(false)
    const [filterShow, setFilterShow] = useState(false)

    return (
        <>

            <FilterView view={view} setView={setView} setFilterShow={setFilterShow}/>
            <div className="ProductsMain">
                <div className={`left-main ${filterShow? 'active' : ''}`}>
                    <MainSideLeft filterShow={filterShow}/>
                </div>
                <div className="right-main">
                    <MainSideRight view={view} setView={setView}/>
                </div>
            </div>
        </>   
    )
}

export default ProductsMain;