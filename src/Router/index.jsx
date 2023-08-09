import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Profile from "../Page/Profile";

const Router = () => {
return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    )
}

export default Router;