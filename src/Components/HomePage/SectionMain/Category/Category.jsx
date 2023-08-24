import { category } from '../../../../script/categoryData';
import './category.css'

const Category = () => {


    return (
        <>
            <div className="category">
                {category.map((value, index) =>  {
                    return index < 9 && (
                        <div className="box" key={index}>
                            <span  >{value.CategoryName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Category;