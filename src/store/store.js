import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from './category/category.jsx'
import OffersProducts from "./offersProducts/offersProducts.jsx";
import LatestProducts from "./lateslProducts/lateslProducts.jsx";
import MostDemandProducts from "./mostDemandProducts/mostDemandProducts.jsx";
import products from "./products/products.jsx";
import details from "./details/details.jsx";

const store = configureStore({
    reducer: {
        categories: CategoriesReducer,
        offeredProducts: OffersProducts,
        latestProducts: LatestProducts,
        mostDemandProducts: MostDemandProducts,
        products: products,
        details: details
        
    }
})

export default store