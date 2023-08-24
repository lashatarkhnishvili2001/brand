import './cardItem.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import laptop from '../../../../Assets/images/laptops.png';

const CardItem = () => {
    const data = [
        {
            img : laptop,
            ApiName:'phone',
            price: '-333%',
        },
        {
            img : laptop,
            ApiName:'phone',
            price: '-50%',
        },
        {
            img : laptop,
            ApiName:'phone',
            price: '20%',
        },
        {
            img : laptop,
            ApiName:'phone',
            price: '20%',
        },
        {
            img : laptop,
            ApiName:'phone',
            price: '-733%',
        },
        {
            img : laptop,
            ApiName:'phone',
            price: '-333%',
        },
        {
            img : laptop,
            ApiName:'phone dmo',
            price: '-40%',
        }
    ]

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
                {data.map((value, index ) =>  {
                    return index < 5 && (
                        <div className="Api" key={index}>
                            <img src={value.img} alt="" />
                            <span className='apiName'>{value.ApiName}</span>
                            <div className='price'><span>{value.price}</span></div>
                        </div>
                    )

                })}
            </Slider>
        </div>
    )
}

export default CardItem