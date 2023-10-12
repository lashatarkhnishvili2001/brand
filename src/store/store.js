import { configureStore } from "@reduxjs/toolkit";

import CategoriesReducer from './category/category.jsx'
import OffersProducts from "./offersProducts/offersProducts.jsx";
import LatestProducts from "./lateslProducts/lateslProducts.jsx";
import MostDemandProducts from "./mostDemandProducts/mostDemandProducts.jsx";
import products from "./products/products.jsx";
import details from "./details/details.jsx";
import CartProductsProducts from "./getMyCartProducts/getMyCartProducts.jsx";
import AddItemToCart  from "./addInCart/addInCart.jsx";
import removeFromCart from "./removeFromCart/removeFromCart.jsx";
import authReducer from '../Slices/auth/auth.jsx';
import  messageReducer from '../Slices/auth/message.jsx'
import userInfoReducer from './getByEmail/getByEmail.jsx'
import counterReducer from "../features/counter/counterSlice.js"
// import brands from "./brands/brands.jsx";

const store = configureStore({
    reducer: {
        categories: CategoriesReducer,  
        offeredProducts: OffersProducts,
        latestProducts: LatestProducts,
        mostDemandProducts: MostDemandProducts,
        products: products,
        details: details,
        auth: authReducer,
        message: messageReducer,
        userInfo: userInfoReducer,
        cartProducts: CartProductsProducts,
        addItemToCart: AddItemToCart,
        removeFromCart: removeFromCart,
        counter: counterReducer,
        // brands: brands,
    }
})

export default store