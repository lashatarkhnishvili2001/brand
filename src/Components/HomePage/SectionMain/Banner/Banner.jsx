import BannerImg from "../../../../Assets/images/Banner.png"
import { ButtonNormalWhite } from "../../../Buttons"
import { Heading2, Heading3 } from "../../../Headings"
import './banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <img src={BannerImg} alt="" />
            <div className="bannerBox">
                <Heading3 text={"Latest trending" } />
                <Heading2 text={'Electronic items'}/>
                <ButtonNormalWhite text={"Learn more"}/>
            </div>
        </div>
    )
}

export default Banner