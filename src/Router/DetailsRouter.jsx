import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../Page/Details'
import NotFound from '../Page/Details/NotFound'

const DetailsRouter = () => {
    return (
        <Routes>
            <Route path="/:detailsID" element={<Details/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}

export default DetailsRouter;