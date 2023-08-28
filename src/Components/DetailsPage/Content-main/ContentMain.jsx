import React, { useState } from 'react'
import images from '../../../Assets/images/imageS.png'
import image from '../../../Assets/images/image 34.png'
import images2 from '../../../Assets/images/images 40.png'
import './contentMain.css'
import SellerInfo from '../saller-info'
import { Heading4, Heading7, Subheading1, Subheading4 } from '../../Headings'
import { data } from '../../../static/details'

const ContentMain = () => {

    const [products, setProducts] = useState(data);
    const [value, setValue] = useState(1);
    // const {mainImage} = products[value]


    return (
        <section>

        {products.map((item) => {
            return(
                <div className="content-main" key={item.id}>
            
                <div className='images-page' >
                        <img src={item.src[0]} alt="" />
                    <div className="images-container">
                        {item.src.map((img, index) => (
                            <div className="images" key={index} onClick={() => setValue(index)}>
                                <img src={img} alt="" />
                            </div>
                        ))}
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
      
            })}
        </section>
    )
}

export default ContentMain