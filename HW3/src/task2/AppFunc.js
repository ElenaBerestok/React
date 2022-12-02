import DataProvider from '../task1/DataContext';
import React from "react";
import FuncAlbums from "./FuncAlbums";
import FuncAlbumsWithContext from "./FuncAlbumsWithContext";

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