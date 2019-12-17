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

      {`post modal: ${postModalOpen}`}
      {postModalOpen && 
        <PostModal
          closeModal={() => setPostModalOpen(false)}
        />
      }

      <PostsContainer/>

      <MakePostButton
        openModal={() => setPostModalOpen(true)}
      />
      
    </div>
  );
}

export default App;