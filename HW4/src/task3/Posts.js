import React from "react";
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post) => (
                <ul key={post.id}>
                    <Post post={post}/>
                </ul>
                
            ))}
        </div>
    )

}

export default Posts;