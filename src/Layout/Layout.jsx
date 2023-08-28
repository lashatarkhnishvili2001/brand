import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import Footer from "../Components/footer";


const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Router/>
            <Footer/>
        </div>
    )
}

export default Layout;