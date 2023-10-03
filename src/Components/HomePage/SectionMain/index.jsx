import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../store/category/category'
import Banner from './Banner'
import CardRight from './CardRight'
import Category from './Category'
import './index.css'
import { useEffect } from 'react'
import CategorySlider from '../../CategorySlider'

const SectionMain = ({userToken, logOut}) => {
    const {categories, error, loading} = useSelector((state) => state.categories)

    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(getCategories())
    },[dispatch])

    return (
        <section className="sectionMain">
            <CategorySlider categories={categories}/>
            <div className="sectionMain-container">
                <Category categories={categories}/>
                <Banner/>
                <CardRight userToken={userToken} logOut={logOut}/>
            </div>
        </section>
    )
}

export default SectionMain