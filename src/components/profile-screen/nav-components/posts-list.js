import React from "react";
import PostUnit from "./post-unit";

function Posts({posts = [], deletePost, user}) {
    console.log("in list")
    console.log(posts)
    console.log(user)

    return (
        <div>
            <ul className=" list-group">
                {
                    posts.map && posts.map(post => {
                        console.log(post)
                        return (
                            <PostUnit key={post._id}
                                      deletePost={deletePost}
                                      post={post}
                                      user={user}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Posts;