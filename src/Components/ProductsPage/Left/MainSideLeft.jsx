import React, { useState } from 'react'
import { Heading6, Subheading1 } from '../../Headings'
import { ExpandLessSvg, ExpandMoreSvg } from '../../../static/icons'
import './MainSideLeft.css'
import FilterItems from './FilterItems-Category'
import FilterItemBrand from './FilterItem-brand'
import FilterItemFeatures from './FilterItem-Features'
import FilterPrice from './Filter-Price'

const MainSideLeft = () => {
    
    return (
        <div className="filters-list">
            <div className="filters-list-ul">
                <div className="filters-list-li">
                    <FilterItems/>
                </div>
                <div className="filters-list-li">
                    <FilterItemBrand/>
                </div>
                <div className="filters-list-li">
                    <FilterItemFeatures/>
                </div>
                <div className="filters-list-li">
                    <FilterPrice/>
                </div>
            </div>
        </div>
    )
}

export default MainSideLeft