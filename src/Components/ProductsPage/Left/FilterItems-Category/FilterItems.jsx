import React, { useEffect, useState } from 'react'
import { Heading6, Subheading1, } from '../../../Headings';
import { ExpandMoreSvg } from '../../../../static/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { concat, slice } from 'lodash';
import { ButtonNormalBlue } from '../../../Buttons';

const LENGTH = 13;
const LIMIT =  3;

const FilterItems = ({categories}) => {
    const [toggle, setToggle] = useState(false);
    
    const navigate = useNavigate()

    const handleClick = ( id, category) => {
        const searchParams = new URLSearchParams();
        searchParams.set('category', category);
        searchParams.set('currentCategory', id );
        // searchParams.set('pageNumber', '1');

        navigate(`/products?${searchParams.toString()}`)
    }

    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(slice(categories, 0 , LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < (LENGTH -1)
        const newList = concat(list, slice(categories, index, newIndex));
        setIndex(newIndex);
        setList(newList);   
        setShowMore(newShowMore);
    }

    return (
        <div className={`filters ${toggle? 'active' : ''}`} >
                        <div className="filters-header" onClick={() => (setToggle(prev => !prev))}>
                            <Heading6 text={'category'}/>
                            <ExpandMoreSvg/>
                        </div>
                        <div className="filters-body">
                            <ul className='category-list-ul'>
                                {list.map((value, index) =>  {
                                    return (
                                        <li className='category-list-li' key={index} onClick={() => handleClick(value.id, value.name)}>{value.name}</li>   
                                        )
                                    })}
                                    <li className="list-li">
                                    <div className="see-all">
                                        {showMore && <Subheading1 text={'see-all'} onClick={loadMore} /> }
                                    </div>
                                </li>
                            </ul>
                                    
                        </div>
                    </div>

    )
}

export default FilterItems