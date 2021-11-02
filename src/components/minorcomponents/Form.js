import React from 'react'

const Form = (props) => {
    return (
        <form className="row gy-3 gx-5" onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form
