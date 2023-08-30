import { Heading5, Subheading4 } from '../../../Headings';
import { country } from '../../../../static/Country';
import './countryBox.css';
import { useState } from 'react';

const CountryBox = () => {
    const [items, setItems] = useState(3);
    const loadMore = () => {
        setItems(items + items);
    }
    const [loading, setLoading] = useState(false);
    const slice = country.slice(0, items);

    return (
        <>
        {slice.map((item, index) => {
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

        <button onClick={() => loadMore()}>{loading ? 'loading...' : 'load more'}</button>

        </>
    )
}

export default CountryBox;