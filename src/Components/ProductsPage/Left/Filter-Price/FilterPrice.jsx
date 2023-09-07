import React, { useState } from 'react'
import { Heading6 } from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';

const FilterPrice = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className={`filters ${toggle? 'active' : ''}`}>
            <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading6 text={'brand'}/>
                <ExpandMoreSvg/>
            </div>
            <div className="filters-body">
                
            </div>
        </div> 
    )
}

export default FilterPrice