import BlockBoxItem from './Block-box-item/BlockBoxItem';
import homeImage from '../../../Assets/images/Home-and-outdoor.png'
import './index.css';
import { ButtonNormalWhite } from '../../Buttons';

const BlockItemsGroup = ({data}) => {

    return (
        <div className='block-item-container'>
            <div className="homeimage">
                <img src={homeImage} alt="" />  
                <div className="home">
                    <h1>Home and outdoor</h1>
                    <ButtonNormalWhite text={"Source now"}/>
                </div>
            </div>
            <div className="block-list-container">
                <ul className="block-list-ul">
                    <BlockBoxItem data={data}/>
                </ul>
            </div>
        </div>
    )
}

export default BlockItemsGroup;