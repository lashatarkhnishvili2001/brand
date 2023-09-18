import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import Footer from "../Components/footer";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Layout = () => {
    const [notFound, setNotFound] = useState(false)

    const locate = useLocation()
    const authLocation = locate.pathname === '/authorization'
    return (
        <div className="layout">
            <header style={authLocation ? {display: 'none'} : {display: 'block'}}>
                <Header/>
            </header>
            <Router/>
            <footer style={authLocation ? {display: 'none'} : {display: 'block'}}>
            <Footer />

            </footer>

        </div>
    )
}

export default Layout;