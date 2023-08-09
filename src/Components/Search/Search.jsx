// import { ButtonSmallRight } from '../Buttons';
import Chevron from '../../Assets/images/chevron.png';
import './style.css';

const Search = () => {
    return (
            <div class="search-container">
                
                    <div class="search">
                        <input type="text" placeholder="search"/>
                        <span>All category<img src={Chevron} alt='chevron'/> </span>
                        <button type='button'>Search</button>
                    </div>
                
        </div>
    )
}

export default Search;