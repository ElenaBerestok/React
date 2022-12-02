import React from "react";

const Post = (post) => {
    return (
        <li>
            <div key={post.id}>
                {`Title: ${post.title} - completed: ${post.completed}`}
            </div>
        </li>
    )
}

export default Post;