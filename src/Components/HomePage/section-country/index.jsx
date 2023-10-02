import React from 'react'
import { Heading } from '../../Headings'
import './index.css'
import CountryBox from './countryBox'
import CountriesBox from './countriesBox'

const Country = () => {
    return (
        <section className='section-country'>
            <Heading text={"Suppliers by region"}/>
            <div className="country-list-container">
                <ul className='country-list-ul none'>
                    <CountryBox />
                </ul>
                <ul className='country-list-ul block'>
                    <CountriesBox />
                </ul>
            </div>
        </section>
    )
}

export default Country;