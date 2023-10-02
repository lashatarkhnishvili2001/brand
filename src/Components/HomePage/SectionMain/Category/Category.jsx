import { useNavigate } from 'react-router-dom';
import './category.css'
import { Heading1 } from '../../../Headings';
const Category = ({categories}) => {

    const navigate = useNavigate()

    const handleClick = ( id, category) => {
        const searchParams = new URLSearchParams();
        searchParams.set('category', category);
        searchParams.set('currentCategory', id );
        // searchParams.set('pageNumber', '1');

        navigate(`/products?${searchParams.toString()}`)
    }

    return (
        <>
            <div className="category">
                <ul>
                    {categories.map((value, index) =>  {
                            return (
                            // <li className="box" key={index} >
                            //     <Link to={`products/${value.id}`}><Heading1 text={value.name}/></Link>
                            // </li>   
                            <li className="box" key={index} onClick={() => handleClick(value.id, value.name)}>
                                <Heading1 text={value.name}/>
                            </li>   
                            
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Category;