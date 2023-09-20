import Header from "../Components/Header"
import './style.css';
import Router from "../Router";
import Footer from "../Components/footer";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";


const Layout = () => {

    // const location = useLocation()
    // const authLocation = location.pathname === '/authorization';

    return (
        <div className="layout">
            {window.location.pathname !== "/authorization" ? <Header/> : null}

            <Router/>
            {/* <footer style={authLocation ? {display: 'none'} : {display: 'block'}}> */}
                {/* <Footer /> */}
                {window.location.pathname !== "/authorization" ? <Footer/> : null}
            {/* </footer> */}

        </div>
    )
}

export default Layout;