import './category.css'
import {data} from '../../../../script/categoryData'

const Category = () => {

    
    return (
        <>
            <div className="category">
                {data.map((value, index) =>  {
                    return (
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