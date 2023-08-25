import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Profile from "../Page/Profile";
import Details from "../Page/Details";

const Router = () => {
return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
    )
}

export default Router;