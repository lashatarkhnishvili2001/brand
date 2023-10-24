import React, { useEffect } from 'react'
import { Heading6, Subheading } from '../../Headings'
import image from '../../../Assets/images/clothes/image 30.png';
import './RectangleDetail.css'
import { getLatestProducts } from '../../../store/lateslProducts/lateslProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const RectangleDetail = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {latestProducts } = useSelector((state) => state.latestProducts);


    useEffect(() => {
        dispatch(getLatestProducts() )
    },[dispatch]) 

    return (
        <div className='RectangleDetail'>
            <Heading6 text={'You may like'} />
            <div className="RectangleColumn">
                <ul>
                    {latestProducts.map((item) => {
                        return (
                        <li onClick={() => {navigate(`/details/${item.id}`)}}>
                            <div className="listRow" >
                                <div className="image">
                                <img src={item.images[0]} alt="" />
                                </div>
                                <div className="destination">
                                    <div className='black'>
                                        <Subheading  text={item.brand}/>
                                    </div>
                                    <Subheading text={item.price}/>
                                </div>
                            </div>
                        </li>
                        )
                    })}
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default RectangleDetail