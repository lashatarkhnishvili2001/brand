import './BlockBoxItem.css';
import { Heading1, Subheading4 } from '../../../Headings'
import { blockItemsGroup } from '../../../../script/categoryData'

const BlockBoxItem = ({data}) => {
    return (
        <>
            {data.map((value, index) => {
                return index < 8 && (
                    <li className="block-list-li" key={index}>
                        <Heading1 text={value.name}/>
                        <Subheading4 text='From' />
                        <Subheading4 text={`USD ${value.price}`} />
                        <img src={value.img} alt="" />
                    </li>
                )
            })}
        </>
    )
}

export default BlockBoxItem

