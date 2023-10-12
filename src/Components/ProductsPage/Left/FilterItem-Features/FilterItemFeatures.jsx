import React, { useState } from 'react'
import { Heading6, Subheading1 } from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';

const FilterItemFeatures = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className={`filters ${toggle? 'active' : ''}`}>
            <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading6 text={'Features'}/>
                <ExpandMoreSvg/>
            </div>
            <div className="filters-body">
                <form>
                    <ul className='list-ul'>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='samsung'/>
                                <label htmlFor="samsung">Metallic</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='Huawei'/>
                                <label htmlFor="Huawei">Plastic cove</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='apple'/>
                                <label htmlFor="apple">8GB Ram</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='lenovo'/>
                                <label htmlFor="lenovo">Super power</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='lenovo'/>
                                <label htmlFor="lenovo">Large Memory</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="see-all">
                                <Subheading1 text={'see-all'} />
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="see-all">
                                <Subheading1 style={{color: 'red'}} text={'no function'}  />
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div> 
    )
}

export default FilterItemFeatures