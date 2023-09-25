import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import Footer from "../Components/footer";
import Sidebar from "../Components/mobile/Sidebar";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Layout = () => {
    const [show, setShow] = useState(false)

    const location = useLocation()
    const authLocation = location.pathname === '/authorization';

    return (
        <div className="layout">
            {!authLocation && ( <Sidebar show={show} setShow={setShow}/> )}

            {!authLocation && ( <Header setShow={setShow}/> )}

            <Router/>

            {!authLocation && ( <footer>  <Footer /> </footer> )}
        </div>
    )
}

export default Layout;