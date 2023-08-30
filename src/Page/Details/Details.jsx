import React from 'react'
import ContentMain from '../../Components/DetailsPage/Content-main'
import './details.css'
import BlockDetail from '../../Components/DetailsPage/Block-detail/BlockDetail'
import CardItem from '../../Components/HomePage/section-sale/card-item'
import RelatedProducts from '../../Components/RelatedProducts'

// import { useParams } from 'react-router-dom'

// import { detailsArray } from '../../static/details'

const Details = () => {
    // const params = useParams();


    return (
        <div className='details-main'> 
            <ContentMain/>
            <BlockDetail/>
            <RelatedProducts/>
        </div>
    )
}

export default Details