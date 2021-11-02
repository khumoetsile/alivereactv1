import React from 'react'

const InputVariable = (props) => {
    return (
        <div className="col-md-6">
                <label className="form-label">{props.label}</label>
                <input 
                type={props.type} 
                value={ props.value } 
                name={props.name} 
                onChange={ props.onChange } 
                ref={props.ref} 
                className="form-control" 
                placeholder={props.placeholder}
                required={props.required} />
                <p className="form-text">{props.formText}</p>
        </div>
    )
}

export default InputVariable
