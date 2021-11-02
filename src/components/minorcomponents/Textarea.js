import React from 'react'

const Textarea = (props) => {
    return (
        <div className="col-md-6">
        <label className="form-label">{props.label}</label>
       <textarea 
       name={props.name} 
       value={props.value} 
       onChange={props.onChange} 
       ref={props.ref} 
       className="form-control"
       required={props.required}/>
       <p className="form-text">{props.formText}</p>
        </div> 
    )
}

export default Textarea
