import React, { useState } from 'react'
import { Heading6, Subheading1 } from '../../../Headings'
import { ExpandMoreSvg } from '../../../../static/icons'

const FilterItemBrand = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className={`filters ${toggle? 'active' : ''}`}>
            <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading6 text={'brand'}/>
                <ExpandMoreSvg/>
            </div>
            <div className="filters-body">
                <form>
                    <ul className='category-list-ul'>
                        <li className="category-list-li">
                            <div className="category-list-item-container">
                                <input type='checkbox' id='samsung'/>
                                <label for="samsung">Samsung</label>
                            </div>
                        </li>
                        <li className="category-list-li">
                            <div className="category-list-item-container">
                                <input type='checkbox' id='Huawei'/>
                                <label for="Huawei">Huawei</label>
                            </div>
                        </li>
                        <li className="category-list-li">
                            <div className="category-list-item-container">
                                <input type='checkbox' id='apple'/>
                                <label for="apple">apple</label>
                            </div>
                        </li>
                        <li className="category-list-li">
                            <div className="category-list-item-container">
                                <input type='checkbox' id='lenovo'/>
                                <label for="lenovo">lenovo</label>
                            </div>
                        </li>
                        <li className="category-list-li">
                            <div className="see-all">
                                <Subheading1 text={'see-all'} />
                            </div>
                        </li>
                        
                    </ul>
                </form>
            </div>
        </div> 
    )
}

export default FilterItemBrand