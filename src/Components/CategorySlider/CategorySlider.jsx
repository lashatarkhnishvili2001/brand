import './CategorySlider.css';
import { category } from '../../script/categoryData';
const CategorySlider = () => {
    
    return (
        <section className='home-first-section'>
            <div className="home-category-container">
                <ul>
                    {category.map((item) => {
                        return  <li key={item.id}>
                            <span>{item.CategoryName}</span></li>
                    })}
                </ul>
            </div>
        </section>
    )

}

export default CategorySlider