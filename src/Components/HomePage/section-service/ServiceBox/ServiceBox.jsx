import React from 'react'
import { service } from '../../../../script/categoryData'
import { Heading5 } from '../../../Headings'
import './ServiceBox.css';

const ServiceBox = () => {
    return (
        <>
        {service.map((value, index) => {
            return (
                <li className='service-list-li' key={index}>
                        <div>
                            <img src={value.img} alt="" />
                        </div>
                        <div className="icon-radius">
                            <div className="icon">
                                {value.icon}
                            </div>
                        </div>
                        <div className='description'>
                            <Heading5 text={value.describe}/> 
                        </div>
                </li>
            )
        })}

        
        </>
    )
}

export default ServiceBox