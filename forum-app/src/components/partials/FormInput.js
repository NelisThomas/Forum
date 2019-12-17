import React, {useState} from 'react';

const FormInput = ({label,type,name,value,returnData}) => {

    const [stateValue, setValue] = useState(value);

    const handleChange = (e) => {
        setValue(e.target.value);
        returnData(e.target.value);
    }

    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                value={stateValue}
                onChange={(e) => handleChange(e)}
            />
        </label>
    )
}

export default FormInput