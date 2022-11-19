import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/task1/App.js';
import Form from './components/task2/Form.js';
import Lifecycle from './components/task3/Lifecycle.js'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <Lifecycle />
  </React.StrictMode>
  // document.getElementById("root")
);
