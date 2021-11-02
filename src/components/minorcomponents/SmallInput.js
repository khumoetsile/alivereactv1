import React from 'react'

const SmallInput = (props) => {
    return (
        <div className="col-md-3">
        <label className="form-label">{props.label}</label>
        <input 
        type={props.type} 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange} 
        onBlur={props.onBlur} 
        className="form-control" 
        placeholder="" 
        ref={ props.ref} 
        required={props.required}/>
        <p className="form-text">{props.formText}</p>
      </div>
    )
}

export default SmallInput
