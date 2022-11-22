import React from 'react';
import ReactDOM from 'react-dom/client';
import AlbumsFirstWay from './task1/Albums.firstWay';
import AlbumsSecondWay from './task1/Albums.secondWay'
import { DataContext, DataProvider } from './task1/DataContext';
import FuncAlbums from './task2/FuncAlbums';
import FuncAlbumsSecondWay from './task2/FuncAlbumsSecondWayy';
import Ref from './task3/Ref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AlbumsFirstWay /> */}
    {/* <DataProvider>
      <AlbumsSecondWay />
    </DataProvider>  */}
    <FuncAlbums/>
    {/* <DataProvider>
      <FuncAlbumsSecondWay/>
    </DataProvider> */}
    
    {/* <Ref /> */}
  </React.StrictMode>
  // document.getElementById("root")
);
