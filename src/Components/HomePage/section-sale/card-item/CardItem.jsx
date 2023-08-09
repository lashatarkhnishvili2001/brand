import './cardItem.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
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

    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     swipeToSlide: true,
    //     afterChange: function(index) {
    //         console.log(
    //             `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //         );
    //     }
    // };

    return (
        <div className="flex-item">
            {/* <Slider {...settings}> */}
            {data.map((value, index ) =>  {
                    if ( index < 5) {
                        return (
                            <div className="Api" key={index}>
                                <img src={value.img} alt="" />
                                <span className='apiName'>{value.ApiName}</span>
                                <div className='price'><span>{value.price}</span></div>
                            </div>
                        )
                    }
                })}
            {/* </Slider> */}
        </div>
    )
}

export default CardItem