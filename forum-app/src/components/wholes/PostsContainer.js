import React, {useState, useEffect} from 'react';
import '../../style/PostsContainer.css';
import {getAllPosts} from '../../methods/backendCalls';
const axios = require('axios');


const PostsContainer = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:8000/allposts')
        .then(function(response) {
            console.log(response.data)
            const {data} = response;
            setPosts(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchPosts();
    },[]);

    return(
        <div className='PostsContainerWrapper'>
            {posts.map(({title,body,url,_id}) => 
                <div className='PostsContainerPost' key={_id}>
                    Title: {title} <br/>
                    Body: {body}<br/>
                    URL: {url}<br/>
                    ID: {_id}
                </div>
            )}
        </div>
    )
}

export default PostsContainer;