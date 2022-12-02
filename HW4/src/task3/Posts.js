import React from "react";
import Post from './Post'

const Posts = ({posts}) => {
    return (
        <div>
            {{posts}.map((post) => (
                <ul>
                    <Post post={post}/>
                </ul>
                
            ))}
        </div>
    )

}

export default Posts;