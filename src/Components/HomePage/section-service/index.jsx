import React from 'react'
import { Heading } from '../../Headings'
import './index.css';
import ServiceBox from './ServiceBox';

const Service = () => {
    return (
        <section className='service-container'>
            <Heading text={'Our extra services'}/>
            <div className="service-list-container">
                <ul className='service-list-ul'>
                    <ServiceBox/>
                </ul>
            </div>
        </section>
    )
}

export default Service;