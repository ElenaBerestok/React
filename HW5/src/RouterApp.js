import React from "react";
import Card from './Card';
import YourCards from './YourCards'; 
import AddCard from './AddCard';

import {   
    Routes, 
    Route, 
    Navigate, 
} from "react-router-dom";

const RouterApp = () => {
    return (
        <>
        {/* <Navigate>

        </Navigate> */}
        <Routes>
            <Route path='/' element={<YourCards/>} />
            <Route path='/AddCard' element={<AddCard/>} />
        </Routes>
        </>
        
    )
}

export default RouterApp;