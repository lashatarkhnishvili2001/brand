import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/details/description");
        }, 1000);
    }, [navigate]);
    
    return <Loader/>
}

export default NotFound