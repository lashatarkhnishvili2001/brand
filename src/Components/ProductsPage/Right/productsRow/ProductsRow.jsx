import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heading4, Heading5, Heading6, Heading7, Subheading, Subheading1 } from '../../../Headings';
import { HeartSvg, StarSvg } from '../../../../static/icons';
import img from '../../../../Assets/images/phoneRed.png';
import './ProductsRow.css'

const ProductsRow = (props) => {
const {products} = props;

    return (
        <ul className='products-list-ul-row'>

            {
                products.map((product) => {
                    const {id, name, description, price, images, brand, model  } = product
                    return (
                        <li className='products-list-li-row' key={id}>
                <div className="product-container-row">
                    <div className="product-image-row" >
                        <NavLink className={"nav-link"} to={`/details/${id}`} >
                            <img src={images[0]} alt="products phone"/>
                        </NavLink>
                    </div>
                    <div className="product-description-row">
                        <div className="product-name">
                            <Heading5 text={name}/>
                        </div>
                        <div className='price'>
                            <ins><Heading4 text={`$${price}`}/></ins>
                            <del><Heading6 text={'$1128.00'} /></del>
                        </div>
                        <div className="start-container">
                            <ul>
                                <li className='active'>
                                    <StarSvg/>
                                </li>
                                <li>
                                    <StarSvg/>
                                </li>
                            </ul>
                            <span className='start-number'>7.5</span>
                        </div>
                        <div className="destination">
                            <Subheading text={description}/>
                        </div>
                        <NavLink className={"nav-link"} to={`/details/${id}`} >
                        <Heading5 text={'View details'}/>
                        </NavLink>
                        <div className="wishlist-row">
                            <HeartSvg/> 
                        </div>
                    </div>
                </div>
            </li>
                    )
                })
            }

            
            

    </ul>
    )
}

export default ProductsRow