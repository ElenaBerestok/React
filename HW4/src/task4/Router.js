import React from "react";
import './Router.css';
import App from '../task1/App';
import ContactsList from "../task2/ContactsList";
import { UsersProvider } from "../context/UsersContext";
import AppPropsRender from "../task3/AppPropsRender";

import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <h1>Home page</h1>
            <p>Тут Іванна може побачити всі tasks цієї домашки</p>
        </div>
    )
}

const FirstTask = () => {
    return (
        <div>
            <UsersProvider>
                <App />
            </UsersProvider>
        </div>
    )
}

const RouterApp = () => {
    return (
        <div>
            <div className="header">
                <Link className="link" to='/'>Home page</Link>
                <Link className="link" to='/First_task'>First task</Link>
                <Link className="link" to='/Second_task'>Second task</Link>
                <Link className="link" to='/Third_task'>Third task</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/First_task' element={<FirstTask />}/>
                <Route path='/Second_task' element={<ContactsList />}/>
                <Route path='/Third_task' element={ <AppPropsRender />}/>
            </Routes>
        </div>
        
    )
}

export default RouterApp;