import React from 'react'

const ErrorBox = ( props ) => {
    return (
        <div className="text-center bg-light px-3 py-2">
            { props.text }
        </div>
    )
}

export default ErrorBox
