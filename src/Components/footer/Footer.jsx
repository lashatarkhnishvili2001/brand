import { Facebook ,Group,Group2,Instagram, Linkedin, Twitter, Youtube} from '../../static';
import React, { useState } from 'react'
import './footer.css';
import Logo from '../Logo';
import { Heading5, Subheading, Subheading1 } from '../Headings';
import { footer } from '../../script/categoryData';

const Footer = () => {
    const [toggle, setToggle] = useState(false);

    return (
        
        <>
        <footer>
            <div className='footer-container'>
                <div className='box'>
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
                {/* <div className='box'>
                    <Heading5 text={'About'}/>
                    <ul>
                        <li><Subheading text={'About US'} /></li>
                        <li><Subheading text={'Find store'} /></li>
                        <li><Subheading text={'Categories Cares'} /></li>
                        <li><Subheading text={'Blogs'} /></li>
                    </ul>
                </div> */}
                {footer.map((item) => {
                    return (
                        <div className='box'>
                            <Heading5 text={item.title}/>
                            <ul>
                                {item.name.map((item)=> {
                                    return(
                                        <li><Subheading text={item.name} /></li>
                                    )
                                })}
                            
                            </ul>
                        </div>
                    )
                })}

                <div className='box'>
                    <Heading5 text={'Get app'}/>
                    <ul>
                        <li> <Group/> </li>
                        <li> <Group2/></li>
                    </ul>
                </div>
                
            
            
            </div>
        </footer>
        </>
    )
}

export default Footer