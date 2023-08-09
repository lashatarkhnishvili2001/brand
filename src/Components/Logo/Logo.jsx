import './style.css'
import BrandLogo from '../../Assets/images/logo.png';
import Menu from '../mobile/burgermenu';
import { Link } from 'react-router-dom';



const Logo = () => {
    return (
        <Link to='/'>
            <div className='logo'>
                <button className='logo-icon'>
                    <div className='logo-icon-one'><img src={BrandLogo} alt="" /></div>
                    <div className='logo-icon-two'> </div>
                </button>
                <span className='title-brand'>brand</span>
            </div>
        </Link>
    )
}

export default Logo