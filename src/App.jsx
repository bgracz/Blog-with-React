import React from "react";
import Post from "./Post";
import posts from "./posts.json";

function App() {
    let data = posts;

    return (
        
        <div>

            <div class="menu">
                <h1>The Blog</h1>
                <div class="links">
                    <p><a href="index.html">main</a></p>
                    <p><a href="">projects</a></p>
                    <p><a href="">contact</a></p>
                </div>
                <div class="footer">
                
                    <p>Copyright by Blazej Gracz 2022.</p>
                </div>
            </div>

            <div class="content">
                {data.map((post, i) =>
                    <Post
                        key={i}
                        title={post.title}
                        post={post.post}
                        published={post.published} />)}
            </div>
            </div>
    )
}

export default App;