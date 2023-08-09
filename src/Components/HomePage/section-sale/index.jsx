import { Heading4, Subheading1, Subheading3 } from '../../Headings';
import CardItem from './card-item/CardItem';
import './index.css';

const SelectionSale = () => {
    return (
            <div className="bg-card">
                <div className="data">
                    <div className="title-row">
                        <Heading4 text={"Deals and offers"} />
                        <Subheading1 text={"Hygiene equipments"} />
                    </div>
                    <div className="time-container">
                        <div className="border">
                            <div className="number">04</div>
                            <Subheading3 text={'days'} />
                        </div>
                        <div className="border">
                            <div className="number">04</div>
                            <Subheading3 text={'days'} />
                        </div>
                        <div className="border">
                            <div className="number">04</div>
                            <Subheading3 text={'days'} />
                        </div>
                        <div className="border">
                            <div className="number">04</div>
                            <Subheading3 text={'days'} />
                        </div>
                    </div>
                </div>
            <div className="container">
                <CardItem/>
            </div>
        </div>
    )
}

export default SelectionSale;