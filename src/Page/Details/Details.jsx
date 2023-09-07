import React from 'react'
import ContentMain from '../../Components/DetailsPage/Content-main'
import './details.css'
import BlockDetail from '../../Components/DetailsPage/Block-detail/BlockDetail'
import RelatedProducts from '../../Components/RelatedProducts'
import RectangleDetail from '../../Components/DetailsPage/Rectangle-detail'



const Details = () => {


    return (
        <div className='details-main'> 
            <ContentMain/>
            <div className="details-row">
                <BlockDetail/>
                <RectangleDetail/>
            </div>

            <RelatedProducts/>
        </div>
    )
}

export default Details