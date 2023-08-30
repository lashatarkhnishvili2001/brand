import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.css'
import { Heading5 } from '../../Headings';

const navigation = ({detailInformation}) => {
    return (
        !!detailInformation && (
            <nav className='details-navigation'>
                <ul>
                    {detailInformation.map((item) => { 
                        return (
                            <li key={item.id} >
                                <NavLink className='detail-nav-link' to={`/details/${item.id}`}><Heading5 text={item.title}/> </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    );
};

export default navigation