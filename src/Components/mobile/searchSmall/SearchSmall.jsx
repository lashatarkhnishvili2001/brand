import './searchSmall.css';
import Search from '../../../Assets/images/search.png';

const SearchSmall = () => {
    return (
    <form>
        <div className="search-small">
            <img src={Search} alt="search" />
            <input type='text' placeholder='search' />
        </div>
    </form>
    )

}

export default SearchSmall