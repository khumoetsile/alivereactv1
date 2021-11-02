import React from 'react'

const CloseIcon = ( props ) => {
    return (
        <button
            type="button"
            className="btn-close position-absolute top-0 start-100"
            onClick={ props.onClick }
            aria-label="Close"
        ></button>
    )
}

export default CloseIcon
