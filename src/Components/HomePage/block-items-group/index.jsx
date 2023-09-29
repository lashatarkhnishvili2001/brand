import BlockBoxItem from './Block-box-item/BlockBoxItem';
import './index.css';
import { ButtonLargeWhiteIcon, ButtonNormalWhite } from '../../Buttons';
import { Link } from 'react-router-dom';
import { Heading7 } from '../../Headings';
import { ArrowForwardSvg } from '../../../static/icons';

const BlockItemsGroup = ({data, dataMain}) => {
    
    return (
        <div className='block-item-container'>
            {dataMain.map((item) => {
                return(
                    <div className='id' key={item.id}>
                        <div className="homeimage" >
                            <img src={item.image} alt="" />  
                            <div className="home">
                                <h1>{item.title}</h1>
                                <Link to={'/products'}>
                                    <ButtonNormalWhite text={"Source now"}/>
                                </Link>
                            </div>
                        </div>
                        <div className="title">
                            <Heading7 text={item.name}/>
                        </div>
                    </div>
                )
            })}
            <div className="block-list-container">
                <ul className="block-list-ul">
                    <BlockBoxItem data={data}/>
                </ul>
            </div>
            <div className="link-source">
                <Link to={'/products'}>
                    <ButtonLargeWhiteIcon text={'source'} icon={<ArrowForwardSvg/>}/>
                </Link>
            </div>
        </div>
    )
}

export default BlockItemsGroup;