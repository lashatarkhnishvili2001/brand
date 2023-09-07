import React, { useState } from 'react'
import { Heading6, Subheading1 } from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';

const FilterItems = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className={`filters ${toggle? 'active' : ''}`} >
                        <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                            <Heading6 text={'category'}/>
                            <ExpandMoreSvg/>
                        </div>
                        <div className="filters-body">
                            <ul className='category-list-ul'>
                                <li className='category-list-li'>
                                    <Subheading1 text={'mobile accessory'} />
                                </li>
                                <li className='category-list-li'>
                                    <Subheading1 text={'electronics'} />
                                </li>
                                <li className='category-list-li'>
                                    <Subheading1 text={'Smartphone'} />
                                </li>
                                <li className='category-list-li'>
                                    <Subheading1 text={'modern teach'} />
                                </li>
                                <li className='see-all'>
                                    <Subheading1 text={'see-all'} />
                                </li>
                            </ul>
                        </div>
                    </div>
    )
}

export default FilterItems