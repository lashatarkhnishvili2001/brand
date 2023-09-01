import React from 'react'
import ContentMain from '../../Components/DetailsPage/Content-main'
import './details.css'
import BlockDetail from '../../Components/DetailsPage/Block-detail/BlockDetail'
import RelatedProducts from '../../Components/RelatedProducts'



const Details = () => {


    return (
        <div className='details-main'> 
            <ContentMain/>
            <BlockDetail/>
            <RelatedProducts/>
        </div>
    )
}

export default Details