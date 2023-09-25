import React, { useState } from 'react'
import { Heading6, Subheading1 } from '../../../Headings'
import { ExpandMoreSvg } from '../../../../static/icons'
import { useSearchParams } from 'react-router-dom';

const FilterItemBrand = ({brands}) => {
    const [toggle, setToggle] = useState(false);

    // const [searchParams, setSearchParams] = useSearchParams()

    // const params = Object.fromEntries([...searchParams]);

    // const handleCheckboxChange = (brand, event) => {

    //     if (event.target.checked) {
    //         setSearchParams({
    //             ...params,
    //             brands: (params.brands || "") + "&" + brand,
    //             pageNumber: 1
    //         })
    //     } else {
    //         let newBrands = params.brands.split('&')
    //         setSearchParams({
    //             ...params,
    //             brands: (newBrands.filter((item) => item !== brand)).join('&')
    //         })
    //     }
    // };

    return (
        <div className={`filters ${toggle? 'active' : ''}`}>
            <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading6 text={'brand'}/>
                <ExpandMoreSvg/>
            </div>
            <div className="filters-body">
                <form>
                    <ul className='list-ul'>
                        {/* {brands.map((value, index) => {
                            <li className="list-li" key={index}>
                                <div className="list-item-container">
                                    <input onChange={(e) => (handleCheckboxChange(e.target.id, e))} type='checkbox' id={value}
                                            checked={params.brands? params.brands.includes(value) : false}/>
                                    <label htmlFor={value}>{value}</label>
                                </div>
                            </li>
                        })} */}
                        {/* <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='Huawei'/>
                                <label htmlFor="Huawei">Huawei</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='apple'/>
                                <label htmlFor="apple">apple</label>
                            </div>
                        </li>
                        <li className="list-li">
                            <div className="list-item-container">
                                <input type='checkbox' id='lenovo'/>
                                <label htmlFor="lenovo">lenovo</label>
                            </div>
                        </li> */}
                        <li className="list-li">
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