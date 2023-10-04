import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Profile from "../Page/Profile";
// import DetailsRouter from "./DetailsRouter";
import NotFound from "../Page/Home/NotFound";
import Products from "../Page/Products/Products";
import Auth from "../Page/Auth";
import Details from "../Page/Details";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/authorization" element={<Auth/>} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route element={<PrivateRoutes/>} >
                <Route path="/cart" element={<Cart/>} />  
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default Router;