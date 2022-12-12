import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersProvider } from './context/UsersContext';
import RouterApp from './RouterApp';

import {BrowserRouter as Router} from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <Router>
        <RouterApp/>
      </Router>
    </UsersProvider>
  </React.StrictMode>
);

