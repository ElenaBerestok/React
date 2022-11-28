import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './task1/AppClass';
import AppFunc from './task2/AppFunc'
import Ref from './task3/Ref';
import VideoPlayer from './task3/VideoPlayer/VideoPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppClass /> */}
    {/* <AppFunc/> */}
    {/* <Ref /> */}
    <VideoPlayer/>
  </React.StrictMode>
  // document.getElementById("root")
);
