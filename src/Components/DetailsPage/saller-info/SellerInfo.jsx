import React from 'react'
import './sellerInfo.css'
import { Heading3, Subheading } from '../../Headings';
import germany from '../../../Assets/images/DE@2x.png';
import {Verified_user,  Language} from '../../../static/index';
import { ButtonNormalBlue, ButtonNormalWhite } from '../../Buttons';
const SellerInfo = () => {
    return (
        <div className="seller-container">
            <div className="sellerRow">
                <div className="sellerCol"><Heading3 text={'R'} /></div>
                <div className="sellerColTitle">
                    <Subheading text={'Supplier'}/>
                    <Subheading text={'Guanjoi Trading LLC'} />
                </div>
            </div>
            <div className="seller-location">
                <ul>
                    <li>
                        <img src={germany} alt="" />
                        <Subheading text={'Germany, Berlin'} />
                    </li>
                    <li>
                        <Verified_user />
                        <Subheading text={'Verified Seller'} />
                    </li>
                    <li>
                        <Language/>
                        <Subheading text={'Worldwide shipping'} />
                    </li>
                </ul>
            </div>
            <ButtonNormalBlue text={'Send inquiry'} />
            <ButtonNormalWhite text={'Seller’s profile'} />
        </div>
    )
}

export default SellerInfo