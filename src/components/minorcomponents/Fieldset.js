import React from 'react'

const Fieldset = (props) => {
    return (
       <fieldset className="row gy-3 gx-5" disabled={props.disabled}>
           {props.children}
       </fieldset>
    )
}

export default Fieldset
