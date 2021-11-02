import React from 'react'

const InputText = (props) => {
    return (
        <div className="col-md-6">
        <label className="form-label">{props.label}</label>
        <input 
        type="text" 
        value={props.value}
        name={props.name} 
        onChange={props.onChange} 
        ref={props.ref} 
        className="form-control"
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        required={props.required}
        disabled={props.disabled} />
        <p className="form-text">{props.formText}</p>
        </div>
    )
}

export default InputText
