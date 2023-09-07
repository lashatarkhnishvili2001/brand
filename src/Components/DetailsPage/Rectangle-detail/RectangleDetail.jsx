import React from 'react'
import { Heading6, Subheading } from '../../Headings'
import image from '../../../Assets/images/clothes/image 30.png';
import './RectangleDetail.css'
const RectangleDetail = () => {
    return (
        <div className='RectangleDetail'>
            <Heading6 text={'You may like'} />
            <div className="RectangleColumn">
                <ul>
                    <li>
                        <div className="listRow">
                            <div className="image">
                            <img src={image} alt="" />
                            </div>
                            <div className="destination">
                                <div className='black'>
                                    <Subheading  text={'Apple Watch Series Space Gray'}/>
                                </div>
                                <Subheading text={'$7.00 - $99.50'}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listRow">
                            <div className="image">
                            <img src={image} alt="" />
                            </div>
                            <div className="destination">
                                <div className='black'>
                                    <Subheading  text={'Apple Watch Series Space Gray'}/>
                                </div>
                                <Subheading text={'$7.00 - $99.50'}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listRow">
                            <div className="image">
                            <img src={image} alt="" />
                            </div>
                            <div className="destination">
                                <div className='black'>
                                    <Subheading  text={'Apple Watch Series Space Gray'}/>
                                </div>
                                <Subheading text={'$7.00 - $99.50'}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listRow">
                            <div className="image">
                            <img src={image} alt="" />
                            </div>
                            <div className="destination">
                                <div className='black'>
                                    <Subheading  text={'Apple Watch Series Space Gray'}/>
                                </div>
                                <Subheading text={'$7.00 - $99.50'}/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="listRow">
                            <div className="image">
                            <img src={image} alt="" />
                            </div>
                            <div className="destination">
                                <div className='black'>
                                    <Subheading  text={'Apple Watch Series Space Gray'}/>
                                </div>
                                <Subheading text={'$7.00 - $99.50'}/>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default RectangleDetail