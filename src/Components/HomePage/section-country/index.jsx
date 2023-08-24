import React from 'react'
import { Heading } from '../../Headings'
import './index.css'
import CountryBox from './countryBox'

const Country = () => {
    return (
        <section className='section-country'>
            <Heading text={"Suppliers by region"}/>
            <div className="country-list-container">
                <ul className='country-list-ul'>
                    <CountryBox/>
                </ul>
            </div>
        </section>
    )
}

export default Country;