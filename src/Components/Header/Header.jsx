import Logo from "../Logo"
import Navbar from "../Navbar";
import Search from "../Search";
import Menu from "../mobile/burgermenu";
import SearchSmall from "../mobile/searchSmall/SearchSmall";

import './style.css'
const Header = ({setShow, cartProducts, userToken}) => {
    return (
        <>
        <header>
            <div className="header-container">
                <Menu setShow={setShow}/>
                <Logo/>
                <Search/>
                <Navbar cartProducts={cartProducts} userToken={userToken}/>
            </div>
            <div className="searchSmall">
                <SearchSmall/>
            </div>
        </header>
    </>
    )
}

export default Header;