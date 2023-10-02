import { Heading5, Subheading4 } from '../../../Headings';
import { country } from '../../../../static/Country';
import './countryBox.css';
import { useState } from 'react';
import { slice, concat } from 'lodash';
import { ButtonNormalBlue } from '../../../Buttons';

const LENGTH = 11;
const LIMIT =  3;

const CountryBox = () => {
    const [showMore, setShowMore] = useState(true);
    const [list, setList] = useState(slice(country, 0 , LIMIT));
    const [index, setIndex] = useState(LIMIT);

    const loadMore = () => {
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < (LENGTH -1)
        const newList = concat(list, slice(country, index, newIndex));
        setIndex(newIndex);
        setList(newList);   
        setShowMore(newShowMore);
    }

    return (
        <>
        {list.map((item, index) => {
            return index < 10 && (
                <li className='country-list-li' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="title">
                        <Heading5 text={item.title}/>
                        <Subheading4 text={item.describe}/>
                    </div>
                </li>
            )
        })}
        
        {showMore && <ButtonNormalBlue onClick={loadMore} text={'Load More'}/> }
        </>
    )
}

export default CountryBox;