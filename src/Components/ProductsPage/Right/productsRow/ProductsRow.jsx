import React, { useState } from 'react';
import { Heading4, Heading5, Heading6, Heading7, Subheading, Subheading1 } from '../../../Headings';
import { HeartSvg, StarSvg } from '../../../../static/icons';
import img from '../../../../Assets/images/phoneRed.png';
import './ProductsRow.css'

const ProductsRow = () => {


    return (
        <ul className='products-list-ul-row'>
            <li className='products-list-li-row'>
                <div className="product-container-row">
                    <div className="product-image-row">
                        <img src={img} alt="products phone"/>
                    </div>
                    <div className="product-description-row">
                    <div className="product-name">
                            <Heading5 text={'GoPro HERO6 4K Action Camera - Black'}/>
                        </div>
                        <div className='price'>
                            <ins><Heading4 text={'$99.05'}/></ins>
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
                            <Subheading text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                        </div>
                        <a href='#'><Heading5 text={'View details'}/> </a> 

                        <div className="wishlist-row">
                            <HeartSvg/> 
                        </div>
                    </div>
                    <a href='#'></a> 
                    
                </div>
            </li>
            <li className='products-list-li-row'>
                <div className="product-container-row">
                    <div className="product-image-row">
                        <img src={img} alt="products phone"/>
                    </div>
                    <div className="product-description-row">
                    <div className="product-name">
                            <Heading5 text={'GoPro HERO6 4K Action Camera - Black'}/>
                        </div>
                        <div className='price'>
                            <ins><Heading4 text={'$99.05'}/></ins>
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
                            <Subheading text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                        </div>
                        <a href='#'><Heading5 text={'View details'}/> </a> 

                        <div className="wishlist-row">
                            <HeartSvg/> 
                        </div>
                    </div>
                    <a href='#'></a> 
                    
                </div>
            </li>
            <li className='products-list-li-row'>
                <div className="product-container-row">
                    <div className="product-image-row">
                        <img src={img} alt="products phone"/>
                    </div>
                    <div className="product-description-row">
                    <div className="product-name">
                            <Heading5 text={'GoPro HERO6 4K Action Camera - Black'}/>
                        </div>
                        <div className='price'>
                            <ins><Heading4 text={'$99.05'}/></ins>
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
                            <Subheading text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}/>
                        </div>
                        <a href='#'><Heading5 text={'View details'}/> </a> 

                        <div className="wishlist-row">
                            <HeartSvg/> 
                        </div>
                    </div>
                    <a href='#'></a> 
                    
                </div>
            </li>
           

    </ul>
    )
}

export default ProductsRow