import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Profile from "../Page/Profile";
import DetailsRouter from "./DetailsRouter";
import NotFound from "../Page/Home/NotFound";

const Router = () => {
return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details/*" element={<DetailsRouter/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default Router;