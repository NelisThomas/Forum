import React, { useState, useEffect } from 'react';

import PostsContainer from './wholes/PostsContainer';
import MakePostButton from './wholes/MakePostButton';
import PostModal from './wholes/PostModal';

import {getAll, deletePost} from './methods/backendCalls';

import '../style/App.css';

const App = () => {
  
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await getAll().then( data => {
      setPosts(data);
    })
  }

  const removePost = id => {
    if (confirm(`Are you sure you want to delete post with ID ${id}?`)){
      const data = [...posts].filter(post => post._id !== id);
      setPosts(data);
      deletePost(id);
    }
  }

  useEffect(() => {
      fetchPosts();
  },[]);

  return (
    <div className="App">
      {postModalOpen && 
        <PostModal
          closeModal={() => setPostModalOpen(false)}
          fetchPosts={fetchPosts}
        />
      }

      <MakePostButton
        openModal={() => setPostModalOpen(true)}
      />

      <PostsContainer
        posts={posts}
        removePost={removePost}
      />
      
    </div>
  );
}

export default App;