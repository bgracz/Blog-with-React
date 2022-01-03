import React from "react";

import posts from "./posts.json";
import Post from "./Post";


function Blog() {
    let data = posts;
    return (<div class="content">
                {data.map((post, i) =>
                    <Post
                        key={i}
                        title={post.title}
                        post={post.post}
                        published={post.published} />)}
            </div>)
};

export default Blog;