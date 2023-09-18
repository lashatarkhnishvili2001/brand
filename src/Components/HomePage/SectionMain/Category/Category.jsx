import { category } from '../../../../script/categoryData';
import './category.css'

const Category = () => {

    return (
        <>
            {/* <div className="category">
                {category.map((value, index) =>  {
                    // return index < 9 && (
                        return (
                        <div className="box" key={index}>
                            <span>{value.CategoryName}</span>
                        </div>
                    )
                })}
            </div> */}
                <div className="category">
                    <ul>
                        {category.map((value, index) =>  {
                                return (
                                <li className="box" key={index}>
                                    <span>{value.CategoryName}</span>
                                </li>   
                            )
                        })}
                    </ul>
            </div>
        </>
    )
}

export default Category;