import React from 'react'
import { Subheading } from '../Headings'
import './style.css';

const FooterOwner = () => {
    return (
        <section className='footer-language-section'>
            <div className="footerOwner-container">
                <Subheading text={'© 2023 Ecommerce. '}/>
                <Subheading text={'Lasha Tarkhnishvili'}/>
            </div>
        </section>
    )
}

export default FooterOwner