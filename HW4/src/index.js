import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './task1/App';
import AppPropsRender from './task3/AppPropsRender'

import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <AppPropsRender />
  </React.StrictMode>
  // document.getElementById("root")
);

