import React, { useState } from 'react';

import PostsContainer from './wholes/PostsContainer';
import MakePostButton from './wholes/MakePostButton';
import PostModal from './wholes/PostModal';

const App = () => {
  
  const [postModalOpen, setPostModalOpen] = useState(false);

  const xo = () => {
    console.log('yeet');
    setPostModalOpen(true);
  }

  return (
    <div className="App">
      {postModalOpen && 
        <PostModal
          closeModal={() => setPostModalOpen(false)}
        />
      }

      <MakePostButton
        openModal={() => setPostModalOpen(true)}
      />

      <PostsContainer/>
      
    </div>
  );
}

export default App;