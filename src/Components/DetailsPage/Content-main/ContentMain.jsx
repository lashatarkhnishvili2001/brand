import React, { useState } from 'react'
import './contentMain.css'
import SellerInfo from '../saller-info'
import { Heading4, Heading6, Heading7, Subheading1, Subheading4 } from '../../Headings'
// import { data } from '../../../static/details'
import { CheckSvg, FavoriteSvg, MessageSvg, Shopping_basketSvg, StarSvg } from '../../../static/icons'
import { ButtonLargeWhiteIcon, ButtonNormalBlue } from '../../Buttons';

const ContentMain = (props) => {
    const {product} = props;
    const {id, name, images, price} = product
    // const [item] = useState(data);
    const [value, setValue] = useState(0);


    return (
        <section>
            <div className="content-main" key={id}>
                
                <div className='images-page' >
                        <img src={images && images[value]} alt="" />
                    <div className="images-container">
                        {images?.map((img, index) => (
                            <div className="images" key={index} onClick={() => setValue(index)}>
                                <img src={img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            <div className="info">
                <ButtonLargeWhiteIcon text={'In stock'} icon={<CheckSvg/>}/>
                <Heading4 text={name}/>
                <div className='disPlay'> 
                        <div className="start-container">
                                    <ul>
                                        <li className='active'>
                                            <StarSvg/>
                                        </li>
                                        <li className='active'>
                                            <StarSvg/>
                                        </li>
                                        <li className='active'>
                                            <StarSvg/>
                                        </li>
                                        <li>
                                            <StarSvg/>
                                        </li>
                                        <li>
                                            <StarSvg/>
                                        </li>
                                    </ul>
                                    <span className='start-number'>7.5</span>
                        </div>
                        <div className="info-dot"></div>
                        <div className="message"><MessageSvg/><Subheading1 text={'32 reviews'}/></div>
                        <div className="info-dot"></div>
                        <div className="message"><Shopping_basketSvg/><Subheading1 text={'154 sold'}/></div>
                </div>
                <div className="info-mobile-price">
                    <Heading6 text={`$${price}`}/>
                </div>
                <div className="info-mobile-button">
                    <ButtonNormalBlue text={'Send inquiry'}/>
                    <div className="info-FavoriteIcon">
                        <FavoriteSvg />
                    </div>
                </div>
                <div className="price-background">
                    <div className="price">
                        <span><Heading7 text={`$${price}`} /></span>
                        <Subheading4  text={'50-100 pcs'}/>
                    </div>
                    <div className="bgLine"></div>
                    <div className="price">
                        <Heading7 text={'$98.00'} />
                        <Subheading4  text={'50-100 pcs'}/>
                    </div>
                    <div className="bgLine"></div>
                    <div className="price">
                        <Heading7 text={'$98.00'} />
                        <Subheading4  text={'50-100 pcs'}/>
                    </div>
                </div>
                <div className="short-info">
                    <ul>
                        <li>
                            <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div>
                            <div className='twoBox'>
                                <span>Negotiable</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'type:'} />
                            </div>
                            <div className='twoBox'>
                                <span>classic shop</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'material:'} />
                            </div> <div className='twoBox'>
                                <span>plastic material</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'Design:'} />
                            </div> <div className='twoBox:'>
                                <span>Modern nice</span>
                            </div>
                        </li>
                        <div className="line-info"></div>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'customization:'} />
                            </div> <div className='twoBox'>
                                <span>Customized logo and design custom packager</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'protection:'} />
                            </div> <div className='twoBox'>
                                <span>Refund Policy</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'Warranty:'} />
                            </div> <div className='twoBox'>
                                <span>2 years full Warranty</span>
                            </div>
                        </li>
                        <div className="line-info"></div>
                    </ul>
                </div>
                
            </div>
            
            <SellerInfo/>
            </div>

        </section>
    )
}

export default ContentMain