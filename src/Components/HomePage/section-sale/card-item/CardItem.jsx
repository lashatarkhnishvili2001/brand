import './cardItem.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { data } from '../../../../static/products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOfferedProducts } from '../../../../store/offersProducts/offersProducts';
import { Link } from 'react-router-dom';

const CardItem = () => {
    
    const dispatch = useDispatch()

    const {offeredProducts} = useSelector((state) => state.offeredProducts)
    useEffect(() => {
        dispatch(getOfferedProducts())
    }, [dispatch])

    const settings = {
        // dots: false,
        // infinite: false,
        // speed: 500,
        // slidesToShow: 5,
        // slidesToScroll:5,
        // initialSlide: 0,

        infinite: true,
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: (
            <div>
            <div className="next-slick-arrow"> ⫸ </div>
            </div>
        ),
        prevArrow: (
            <div>
            <div className="prev-slick-arrow"> ⫷ </div>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: false,
                dots: false
                }
            },
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
            ]
        };

    return (
        <div className="flex-item">
            
            <Slider {...settings}>
                {offeredProducts.map((value, index ) =>  {
                    return index < 5 && (
                        <div className="Api" key={index}>
                            <Link to={`/details/${value.id}`}>
                                <img src={value.image} alt="" />
                            </Link>
                            <span className='apiName'>{value.name}</span>
                            <div className='price'><span>{`-${Math.floor((value.newPrice / value.oldPrice) * 100)}%`}</span></div>
                        </div>
                    )

                })}
            </Slider>
        </div>
    )
}

export default CardItem;