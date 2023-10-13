import React from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
    const location = useLocation()
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    return userToken ? <Outlet /> : <Navigate to={"/authorization"} state={{from: location}} replace/>
}

export default PrivateRoutes