import MenuImg from '../../../Assets/images/menu.png';
import './menu.css';

const Menu = ({setShow}) => {
    return (
        <div className="menu" onClick={() => setShow(true)}>
            <img src={MenuImg} alt="menu" />
        </div>
    )   
}

export default Menu;



