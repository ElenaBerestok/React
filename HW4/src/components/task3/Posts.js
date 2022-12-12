import React from "react";
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map((post) =>  <Post post={post}/>)}
        </ul>
    )

}  

export default Posts;