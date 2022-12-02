import DataProvider from './DataContext';
import React from "react";
import ClassAlbums from "./ClassAlbums";
import ClassWithContext from './ClassWithContext';

export default class AppClass extends React.Component{
    render (){
        return (
            <div>
                <div>
                    <ClassAlbums />
                </div>
                <div>
                    <DataProvider>
                        <ClassWithContext/>
                    </DataProvider>
                </div>
            </div>
        )
    }
}