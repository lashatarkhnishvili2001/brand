import './CategorySlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from '../../script/categoryData';
const CategorySlider = () => {
    
    const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function(index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
            }
        };


    return (
        <>
            <div className="categorySlider">
                <Slider {...settings}>
                {data.map((value, index) =>  {
                    return (
                        <div className="boxSlider" key={index}>
                            <span  >{value.CategoryName}</span>
                        </div>
                    )
                })}
                </Slider>
            </div>
        </>
    )
}

export default CategorySlider