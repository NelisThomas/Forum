import React, {useState} from 'react';
import {post} from '../methods/backendCalls';
import '../../style/modal.css';

const PostModal = ({closeModal,fetchPosts}) => {

    const [state, setState] = useState({
        name: '',
        title: '',
        text: '',
        url:''
    })

    const handleChange = (name, e) => {
        const data = e.target.value;
        const stateObject = {...state};
        stateObject[name] = data;
        setState(stateObject);
    }

    const handleSubmit = () => {
        post(state);
        fetchPosts();
    }

    return (
        <div
            className="modalWrapper"
            >
            <div
                className="modalContentContainer"
                >
                <div
                    onClick={closeModal}
                    className="modalCloseButton"
                >
                    Close Modal
                </div>

                Name:
                <input
                    type='text'
                    value={state.name}
                    onChange={(e) => handleChange('name',e)}
                /> <br/>

                Title:
                <input
                    type='text'
                    value={state.title}
                    onChange={(e) => handleChange('title',e)}
                /> <br/>

                Text:
                <input
                    type='text'
                    value={state.text}
                    onChange={(e) => handleChange('text',e)}
                /> <br/>

                URL:
                <input
                    type='url'
                    value={state.url}
                    onChange={(e) => handleChange('url',e)}
                /> <br/>

                <button onClick={handleSubmit}>Submit</button>

                {JSON.stringify(state)}
                
            </div>
        </div>
    )
}

export default PostModal;