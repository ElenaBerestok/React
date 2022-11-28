import React, {useState, useEffect} from "react";
import FuncAlbums from "./FuncAlbums";
import FuncAlbumsWithContext from "./FuncAlbumsWithContext";
import DataProvider from '../task1/DataContext';

const AppFunc = () => {
    return (
        <div>
            <div>
                <FuncAlbums />
            </div>
            <div>
                <DataProvider>
                    <FuncAlbumsWithContext/>
                </DataProvider>
            </div>
        </div>
    )
}

export default AppFunc;