import React from 'react'
import { country } from '../../../../static/Country';
import { Heading5, Subheading4 } from '../../../Headings';


const CountriesBox = () => {
    return (
        <>
        {country.map((item, index) => {
            return index < 10 && (
                <li className='country-list-li' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="title">
                        <Heading5 text={item.title}/>
                        <Subheading4 text={item.describe}/>
                    </div>
                </li>
            )
        })}
        </>
    )
}

export default CountriesBox