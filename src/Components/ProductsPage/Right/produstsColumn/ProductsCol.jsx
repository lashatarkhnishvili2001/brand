import React from 'react'
import { Heading7, Subheading, Subheading1 } from '../../../Headings'
import { HeartSvg, StarSvg } from '../../../../static/icons'
import img from '../../../../Assets/images/phone.png';
import './ProductsCol.css'
import { Link, NavLink } from 'react-router-dom';

const ProductsCol = (props) => {
    const {products} = props;
    return (
        <ul className='products-list-ul'>
            {products.map((product) => {
                const {id, name, description, price, images, brand, model  } = product
                return(

                    <li className='products-list-li' key={id}>
                        <div className="product-container">
                            <div className="product-image">
                                <NavLink className={"nav-link"} to={`/details/${id}`} >
                                    <img src={images[0]} alt="products phone"/>
                                </NavLink>
                            </div>
                            <div className="product-description">
                                <div className='price'>
                                    <ins><Heading7 text={`${price}`}/></ins>
                                    <del><Subheading1 text={'$1128.00'} /></del>
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
                                <div className="product-name">
                                    <Subheading text={brand}/>
                                </div>
                                <div className="wishlist">
                                    <HeartSvg/>
                                </div>
                            </div>
                            <a href='#'></a> 
                            
                        </div>
                    </li>
            )
            })}
            
        </ul>
    )
}

export default ProductsCol