import Logo from "../Logo"
import Navbar from "../Navbar";
import Search from "../Search";
import Menu from "../mobile/burgermenu";
import SearchSmall from "../mobile/searchSmall/SearchSmall";

import './style.css'
const Header = () => {
    return (
        <>
        <main>
            <div className="header-container">
                <Menu/>
                <Logo/>
                <Search/>
                <Navbar/>
            </div>
            <div className="searchSmall">
                <SearchSmall/>
            </div>
        </main>
    </>
    )
}

export default Header;

{/* <div className="menu-container">
                <Menu/>
                <div className="header-container">
                    <Logo/>
                    <Search/>
                    <Navbar/>
                </div>
            </div>
            <div className="searchSmall">
                <SearchSmall/>
            </div> */}