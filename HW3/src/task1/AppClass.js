import React from "react";
import ClassAlbums from "./ClassAlbums";
import ClassWithContext from './ClassWithContext';
import DataProvider from './DataContext';


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