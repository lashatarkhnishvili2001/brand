import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getCartProducts } from "../store/getMyCartProducts/getMyCartProducts";
import Header from "../Components/Header"
import Router from "../Router";
import Footer from "../Components/footer";
import Sidebar from "../Components/mobile/Sidebar";

import './style.css';
import FooterOwner from "../Components/footerOwner";


const Layout = () => {
    const [show, setShow] = useState(false)

    const userToken = JSON.parse(localStorage.getItem('userToken'));

    // const dispatch = useDispatch()

    const {cartProducts} = useSelector((state) => state.cartProducts)
    // const {loading} = useSelector((state) => state.addItemToCart)

    const location = useLocation()
    const authLocation = location.pathname === '/authorization';

    // useEffect(() => {
    //     if(userToken) {
    //         dispatch(getCartProducts(userToken.jwt))
    //     }
    // }, [dispatch, loading])

    return (
        <div className="layout">
            {!authLocation && ( <Sidebar show={show} setShow={setShow} /> )}

            {!authLocation && ( <Header setShow={setShow} cartProducts={cartProducts} userToken={userToken}/> )}

            <Router/>

            {!authLocation && ( <footer>  <Footer /> </footer> )}
            {!authLocation && ( <footer>  <FooterOwner /> </footer> )}

        </div>
    )
}

export default Layout;