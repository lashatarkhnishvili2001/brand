import React, { useState } from 'react'
import { Heading5, Subheading } from '../../Headings';

const SingleFooter = ({list, title}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="footer-about">
            <div className="footer-title-toggle" onClick={() => (setToggle(prev => !prev))}>
                <Heading5 text={title}/>
            </div>
            <div className={`footer-list footer-toggle ${toggle? 'active' : ''}`}>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index} ><Subheading text={item.name} /></li>
                    })}
                
                </ul>
            </div> 
        </div>
    )
}

export default SingleFooter;