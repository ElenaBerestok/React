import React from "react";
import DataMaker from './DataMaker';
import Posts from './Posts';

const AppPropsRender = () => {
    
    const getPosts = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

    return (
        <div>
            <DataMaker url={getPosts} renderDataUrl={(posts) => <Posts posts={posts}/>}/>
        </div>
    )
}

export default AppPropsRender;