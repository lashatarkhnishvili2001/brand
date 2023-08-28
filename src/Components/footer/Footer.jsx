import {footer, Facebook ,Group,Group2,Instagram, Linkedin, Twitter, Youtube} from '../../static/footer';
import React, { useState } from 'react'
import './footer.css';
import Logo from '../Logo';
import { Heading5, Subheading, Subheading1 } from '../Headings';

import SingleFooter from './Singlefooter/Singlefooter';

const Footer = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev)
    }

    return (
        <>
        <footer>
            <div className='footer-container'>
                <div className='box-brand'>
                    <Logo/>
                    <div className="describe">
                        <Subheading1 text={'Best information about the company gies here but now lorem ipsum is'}/>
                    </div>
                    <div className="footer-social">
                        <a href='#'><Facebook/> </a>
                        <a href='#'><Instagram/> </a>
                        <a href='#'><Linkedin/> </a>
                        <a href='#'><Twitter/> </a>
                        <a href='#'><Youtube/> </a>
                    </div>
                </div>
        
                {footer.map((item) => {
                    return (
                        <SingleFooter list={item.list} title={item.title} />
                    )
                })}

                
                {/* <div className='box'>
                    <Heading5 text={'Get app'}/>
                    <img src={Chevron} alt="chevron" />

                    <ul>
                        <li> <Group/> </li>
                        <li> <Group2/></li>
                    </ul>
                </div> */}
                
            
            
            </div>
        </footer>
        </>
    )
}

export default Footer