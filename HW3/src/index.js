import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassAlbums from './task1/ClassAlbums';
import ClassWithContext from './task1/ClassWithContext'
import { DataProvider } from './task1/DataContext';
import FuncAlbums from './task2/FuncAlbums';
import FuncAlbumsWithContext from './task2/FuncAlbumsWithContext';
import Ref from './task3/Ref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ClassAlbums /> */}
    {/* <DataProvider>
      <ClassWithContext />
    </DataProvider>  */}
    <FuncAlbums/>
    {/* <DataProvider>
      <FuncAlbumsWithContext/>
    </DataProvider> */}
    {/* <Ref /> */}
  </React.StrictMode>
  // document.getElementById("root")
);
