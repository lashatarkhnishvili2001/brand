import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import Footer from "../Components/footer";
import Email from "../Components/Email";


const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Router/>
            <Email/>
            <Footer/>
        </div>
    )
}

export default Layout;