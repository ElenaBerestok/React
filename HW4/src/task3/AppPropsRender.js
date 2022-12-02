import React from "react";
import DataMaker from './DataMaker';
import Posts from './Post';

const AppPropsRender = () => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

    return (
        <div>
            <DataMaker url={BASE_URL} renderDataUrl={(posts) => <Posts posts={posts}/>}/>
        </div>
    )
}

export default AppPropsRender;