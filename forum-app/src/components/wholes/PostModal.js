import React, {useState} from 'react';
import '../../style/modal.css';

import FormInput from '../partials/FormInput';

import submitFormArray from '../info/submitFormArray';

const PostModal = ({closeModal, returnData}) => {

    const [state, setState] = useState({
        name: 'Anonymous',
        text: ''
    })

    const handleChange = (name, data) => {
        const stateObject = {...state};
        stateObject[name] = data;
        setState(stateObject);
    }

    const handleSubmit = (e) => {
        //Send state to backend request
        e.preventDefault();
        console.log(`Submitted a form:`,state);
    }

    return (
        <div
            className="modalWrapper"
        >
            <div
                className="modalContentContainer"
            >
                <div
                    className="modalCloseButton"
                    onClick={closeModal}
                >
                    x
                </div>
                
                <form
                    onSubmit={handleSubmit}
                    className="modalForm"
                >
                    {submitFormArray.map(({label,name,type,value}) => {
                        return(
                            <FormInput
                                label={label}
                                name={name}
                                type={type}
                                value={state[name]}
                                returnData={(data) => handleChange(name,data)}
                                key={name}
                            />
                        )
                    })}
                    <input type='submit' text='submit'/>
                </form>
            </div>
        </div>
    )
}

export default PostModal;