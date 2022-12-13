import React from "react";
import './components/task4/Router.css';
import Home from "./pages/Home";
import FirstTask from "./pages/FirstTask";
import SecondTask from "./pages/SecondTask";
import ThirdTask from "./pages/ThirdTask";

import { NavLink, Route, Routes } from "react-router-dom";

const links = [
    {
        id: '1',
        path: '/',
        title: 'Home page'
    },
    {
        id: '2',
        path: '/First_task',
        title: 'First task'
    },
    {
        id: '3',
        path: '/Second_task',
        title: 'Second task'
    },
    {
        id: '4',
        path: '/Third_task',
        title: 'Third task'
    },
]

const RouterApp = () => {
    return (
        <div>
            <div className="header">
                {links.map(({id, path, title}) => (
                    <NavLink 
                        style={({isActive}) => ({color : isActive ? 'blue' : 'black'})} 
                        className="link" 
                        key={id} 
                        to={path}
                    >
                        {title}
                    </NavLink>
                ))}
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/First_task' element={<FirstTask />}/>
                <Route path='/Second_task' element={<SecondTask />}/>
                <Route path='/Third_task' element={ <ThirdTask />}/>
            </Routes>
        </div>
        
    )
}

export default RouterApp;