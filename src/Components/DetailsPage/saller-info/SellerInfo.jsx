import React from 'react'
import './sellerInfo.css'
import { Heading3, Subheading } from '../../Headings';
import germany from '../../../Assets/images/DE@2x.png';
import { Verified_user, Language, FavoriteSvg } from '../../../static/icons';
import { ButtonLargeWhiteIcon, ButtonNormalBlue, ButtonNormalWhite } from '../../Buttons';
const SellerInfo = ({handleAddToCart , id, handleAuthAlert, isLoggedIn}) => {


    return (
        <div className='seller-main'>
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
                        <Subheading text={'Germany'}  span={' Berlin'}/>
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
            <div className="button-none">
                {isLoggedIn ? (<ButtonNormalBlue onClick={() => {handleAddToCart(id)}} text={'Send inquiry'} />) : (<ButtonNormalBlue onClick={() => {handleAuthAlert()}} text={'Send inquiry'} />)}
                
                
                <ButtonNormalWhite text={'Seller’s profile'} />
            </div>
        </div>
        <div className="favorite-container">
            <ButtonLargeWhiteIcon text={'Save for later'} icon={<FavoriteSvg/>}/>
        </div>
        
        </div>
    )
}

export default SellerInfo