import React, { useEffect, useState } from 'react'
import { Heading6, } from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';
import { category } from '../../../../script/categoryData';
import { useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCategories } from '../../../../store/category/category';
const FilterItems = () => {
    const [toggle, setToggle] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams()

    const params = Object.fromEntries([...searchParams]);
    
    const handleCurrentCategory = ( id , category) => {
        setSearchParams({
            ...params,
            currentCategory: id,
            category,
        })
    }
    
    // const {categories, loading, error} = useSelector((state) => state.categories)
    // const dispatch = useDispatch()


    // useEffect(() => {
    //     dispatch(getCategories());
    // },[dispatch]);


    return (
        <div className={`filters ${toggle? 'active' : ''}`} >
                        <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                            <Heading6 text={'category'}/>
                            <ExpandMoreSvg/>
                        </div>
                        <div className="filters-body">
                            <ul className='category-list-ul'>
                                {category.map((value, index) =>  {
                                    return (
                                        <li className='category-list-li' key={index} onClick={() => handleCurrentCategory(value.id, value.name)}>{value.name}</li>   
                                )
                                })}
                            </ul>
                        </div>
                    </div>
    )
}

export default FilterItems