import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Email from "../../Components/Email"
import SectionMain from "../../Components/HomePage/SectionMain"
import BlockItemsGroup from "../../Components/HomePage/block-items-group"
import Country from "../../Components/HomePage/section-country"
import Inquiry from "../../Components/HomePage/section-inquiry/inquiry"
import Recommend from "../../Components/HomePage/section-recommend"
import SelectionSale from "../../Components/HomePage/section-sale"
import Service from "../../Components/HomePage/section-service"

import { latestProductsData, mostDemandProductsDate} from '../../static/blockBoxItem';
import { getLatestProducts } from "../../store/lateslProducts/lateslProducts"
import { getMostDemandProducts } from "../../store/mostDemandProducts/mostDemandProducts"

import './Home.css'
const Home = () => {

    const {latestProducts } = useSelector((state) => state.latestProducts);
    const {mostDemandProducts } = useSelector((state) => state.mostDemandProducts)

    const userToken = JSON.parse(localStorage.getItem('userToken'))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLatestProducts() )
        dispatch(getMostDemandProducts() )
    }, [dispatch])

    const logOut = () => {
        localStorage.removeItem("userToken")
    }

    return (
        <>
        <div className="main">
            <SectionMain userToken={userToken} logOut={logOut}/>
            <SelectionSale/>
            <BlockItemsGroup data={latestProducts} dataMain={latestProductsData} />
            <BlockItemsGroup data={mostDemandProducts} dataMain={mostDemandProductsDate}/>
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