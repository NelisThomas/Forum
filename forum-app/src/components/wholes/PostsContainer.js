import React, {useState, useEffect} from 'react';

import getPosts from '../../methods/backendCalls';

const PostsContainer = () => {

    useEffect(() => {
        getPosts();
    },[]);

    return(
        <div>
            posts container
        </div>
    )
}

export default PostsContainer;