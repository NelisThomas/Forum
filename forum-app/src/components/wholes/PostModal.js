import React, {useState} from 'react';
import '../../style/modal.css';

const axios = require('axios');

const PostModal = ({closeModal, returnData}) => {

    const [state, setState] = useState({
        name: '',
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
        console.log(state);
        axios.post('http://localhost:8000/posts',state)
        .then((res) => {
            console.log(res.data)
        })
        .catch(er => console.log(er))
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