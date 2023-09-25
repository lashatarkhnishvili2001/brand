import { useNavigate } from 'react-router-dom';
import './CategorySlider.css';
const CategorySlider = ({categories}) => {
    
    const navigate = useNavigate()

    const handleClick = ( id, category) => {
        const searchParams = new URLSearchParams();
        searchParams.set('category', category);
        searchParams.set('currentCategory', id );
        // searchParams.set('pageNumber', '1');

        navigate(`/products?${searchParams.toString()}`)
    }


    return (
        <section className='home-first-section'>
            <div className="home-category-container">
                <ul>
                    {categories.map((item) => {
                        return  <li key={item.id} onClick={() => handleClick(item.id, item.name)}><span>{item.name}</span></li>
                    })}
                </ul>
            </div>
        </section>
    )

}

export default CategorySlider