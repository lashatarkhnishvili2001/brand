import Logo from "../Logo"
import Navbar from "../Navbar";
import Search from "../Search";
import Menu from "../mobile/burgermenu";
import SearchSmall from "../mobile/searchSmall/SearchSmall";

import './style.css'
const Header = ({setShow}) => {
    return (
        <>
        <header>
            <div className="header-container">
                <Menu setShow={setShow}/>
                <Logo/>
                <Search/>
                <Navbar/>
            </div>
            <div className="searchSmall">
                <SearchSmall/>
            </div>
        </header>
    </>
    )
}

export default Header;