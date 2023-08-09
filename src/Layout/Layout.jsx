import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import CategorySlider from "../Components/CategorySlider";


const Layout = () => {
    return (
        <div className="layout">
            <div className="header-container">
                <Header/>
            </div>
            <div className="CategorySlider">
                {/* <CategorySlider/> */}
            </div>
            <div className="routing-container">
                <Router/>
            </div>
        </div>
    )
}

export default Layout;