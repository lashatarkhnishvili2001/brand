// import React, { useEffect, useState } from 'react'
import ContentMain from '../../Components/DetailsPage/Content-main'
import './details.css'
import BlockDetail from '../../Components/DetailsPage/Block-detail/BlockDetail'
import RelatedProducts from '../../Components/RelatedProducts'
import RectangleDetail from '../../Components/DetailsPage/Rectangle-detail'
import BannerBlue from '../../Components/Banner-blue'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getDetails } from '../../store/details/details'
import Loader from '../../Components/Loader/Loader'


const Details = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {productId} = useParams()

    const {details, loading} = useSelector((state) => state.details)

    useEffect(() => {
        dispatch(getDetails(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        if(!details && !loading) {
            navigate('/')
        }
    }, [details, loading])

    if(loading) {
        return <Loader/>
    }

    // const [product, setProduct] = useState([])
    // const {productId} = useParams()
    // useEffect( () => {
    //     fetch(`https://digitalamazonproject.azurewebsites.net/api/product/products/${productId}`)
    //     .then ((response) => response.json())
    //     .then((data) => {
    //         setProduct(data)
    //         console.log(data)
    //     })
    // }, [productId])

    return (
        <div className='details-main'> 
            <ContentMain product={details} />
            <div className="details-row">
                <BlockDetail product={details}/>
                <RectangleDetail/>
            </div>
            <RelatedProducts/>
            <BannerBlue/>
        </div>
    )
}

export default Details