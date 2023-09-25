import './BlockBoxItem.css';
import { Heading1, Subheading4 } from '../../../Headings'
import { Link } from 'react-router-dom';

const BlockBoxItem = ({data}) => {
    return (
        <>
            {data.map((value, index) => {
                return index < 8 && (
                    
                    <li className="block-list-li" key={index}>
                        <Link to={`/details/${value.id}`}>
                            <img src={value.image} alt="" />
                        </Link>
                        <div className="block-title">
                        <Link to={`/details/${value.id}`}>
                            <Heading1 text={value.name}/>
                        </Link>
                            <Subheading4 text='From' />
                            <Subheading4 text={`USD ${value.price}`} />
                        </div>
                    </li>
                )
            })}
        </>
    )
}

export default BlockBoxItem

