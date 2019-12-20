import React, {useState, useEffect} from 'react';
import '../../style/PostsContainer.css';
import Post from '../partials/Post';
import PostModal from '../wholes/PostModal';
// import {getAll} from '../methods/backendCalls';




const PostsContainer = ({posts, removePost}) => {
    
    const handleEditPost = post => {
        console.log(post)
    }

    return(
        <div className='PostsContainerWrapper'>
            {posts.map((post) => 
                <Post
                    post={post}
                    removePost={() => removePost(post._id)}
                    editPost={() => handleEditPost(post)}
                    key={post._id}
                />
            )}
        </div>
    )
}

export default PostsContainer;