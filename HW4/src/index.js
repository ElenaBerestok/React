import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './task1/App';
// import AppPropsRender from './task3/AppPropsRender'
import { UsersProvider } from './task1/UsersContext';
import LoaderHOC from './task2/LoaderHOC';
import RouterApp from './task4/Router';

import {BrowserRouter as Router} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UsersProvider>
      <App/>
    </UsersProvider> */}
    {/* <AppPropsRender /> */}
    <LoaderHOC />
    {/* <Router>
      <RouterApp/>
    </Router> */}
  </React.StrictMode>
  // document.getElementById("root")
);

