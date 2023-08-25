import React from 'react'
import image from '../../../Assets/images/image 34.png'
import './contentMain.css'
import SellerInfo from '../saller-info'
import { Heading4, Heading7, Subheading1, Subheading4 } from '../../Headings'

const ContentMain = () => {



    return (
        <div className="content-main">
            <div className='images-page '>
                <img src={image} alt="" />
                <div className="images">
                </div>
            </div>
            <div className="info">
                <Heading4 text={'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle'}/>
                <div className="price-background">
                    <div className="price">
                        <span><Heading7 text={'$98.00'} /></span>
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
                                <Subheading1 text={'price:'} />
                            </div>
                            <div className='twoBox'>
                                <span>kkdem ekmkejjncjd nkd klakdk lasha ;ksj ;alj wf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div> <div className='twoBox'>
                                <span>kkdem ekmkewf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div> <div className='twoBox'>
                                <span>kkdem ekmkewf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div> <div className='twoBox'>
                                <span>kkdem ekmkewf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div> <div className='twoBox'>
                                <span>kkdem ekmkewf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                        <li>
                        <div className="oneBox">
                                <Subheading1 text={'price:'} />
                            </div> <div className='twoBox'>
                                <span>kkdem ekmkewf laldj ijiwdi ndiei o</span>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        
            <SellerInfo/>
        </div>
    )
}

export default ContentMain