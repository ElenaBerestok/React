import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './task1/App';
// import AppPropsRender from './task3/AppPropsRender'
import { UsersProvider } from './task1/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <App/>
    </UsersProvider>
    {/* <AppPropsRender /> */}
  </React.StrictMode>
  // document.getElementById("root")
);

