import React from "react";

const Post = ({post}) => {
    return (
        <li >
            <div>
                {`Title: ${post.title} - completed: ${post.completed}`}
            </div>
           
        </li>
    )
}

export default Post;