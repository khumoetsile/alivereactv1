import React from 'react'

const Select = (props) => {
    return (
        <div className="col-md-6">
        <label className="form-label">{props.label}</label>
        <select 
        name={props.name} 
        className="form-select" 
        value={props.value} 
        onChange={props.onChange}
        ref={props.ref}
        required={props.required} >
           {props.children}
        </select>
    </div>
    )
}

export default Select
