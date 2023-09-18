import {GridViewSvg, ListViewSvg} from '../../../static/icons';
import './MainSideRight.css'
import { Heading6, Subheading1 } from '../../Headings';
import ProductsCol from './produstsColumn';
import ProductsRow from './productsRow';
const MainSideRight = ({view, setView} ) => {
    
    
    return (
            <div className="Products-list-container">
                <div className="view-products">
                    <div className="products-found-quantity">
                        <Subheading1 text={`12,911 items in`}/>
                        <Heading6 text={'Mobile accessory'}/>
                    </div>

                    <div className="products-list-right">
                        <div className="verified-input">
                            <input type="checkbox" className='verified' id='verified' />
                            <label htmlFor="verified" ><Subheading1 text={'Verified only'} /> </label>
                        </div>
                        <div className="Featured">
                            <select className="selectedFruit">
                                <option value="Featured">Featured</option>
                                <option value="fff">fff</option>
                                <option value="ddd">ddd</option>
                            </select>
                        </div>

                        <div className="products-list-grid-view">
                            <button className={`grid-view ${!view ? 'active' : ''}`} onClick={() => setView(false)}>
                                <GridViewSvg/>
                            </button>
                            <button className={`list-view ${view ? 'active' : ''}`} onClick={() => setView(true)}>
                                <ListViewSvg/>
                            </button>
                        </div>
                    </div>
                </div>

                {view ? (
                    <ProductsRow/>
                ) : ( 
                    <ProductsCol/> 
                )}

            </div>
            )
}

export default MainSideRight