import CategorySlider from "../../Components/CategorySlider"
import Email from "../../Components/Email"
import SectionMain from "../../Components/HomePage/SectionMain"
import BlockItemsGroup from "../../Components/HomePage/block-items-group"
import Country from "../../Components/HomePage/section-country"
import Inquiry from "../../Components/HomePage/section-inquiry/inquiry"
import Recommend from "../../Components/HomePage/section-recommend"
import SelectionSale from "../../Components/HomePage/section-sale"
import Service from "../../Components/HomePage/section-service"
import { blockItemsGroup, blockItemsGroup2} from '../../static/blockBoxItem';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="main">
            <CategorySlider/>
            <SectionMain/>
            <SelectionSale/>
            <BlockItemsGroup data={blockItemsGroup}/>
            <BlockItemsGroup data={blockItemsGroup2}/>
            <Inquiry/>
            <Recommend/>
            <Service/>
            <Country/>
        </div>
            <Email/>
        </>
    )
}

export default Home