import Chevron from '../../../Assets/images/chevron.png'
import React, { useState } from 'react'
import { Heading5, Subheading } from '../../Headings';

const SingleFooter = ({list, title}) => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className={`box-container ${toggle? 'action' : ''}`}>
            <div className="box-header" onClick={() => (setToggle(prev => !prev))}>
                <Heading5 text={title}/>
                <img src={Chevron} alt="chevron" />
            </div>
            <ul>
                {list.map((item)=> {
                    return(
                            <li><Subheading text={item.name} /></li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default SingleFooter;