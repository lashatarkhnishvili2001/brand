import Logo from "../Logo"
import Navbar from "../Navbar";
import Search from "../Search";
import Menu from "../mobile/burgermenu";
import SearchSmall from "../mobile/searchSmall/SearchSmall";

import './style.css'
const Header = () => {
    return (
        <>
        <header>
            <div className="menu-container">
                <Menu/>
            <div className="header-container">
                <Logo/>
                <Search/>
                <Navbar/>
            </div>
            </div>
            <SearchSmall/>
        </header>
    </>
    )
}

export default Header;