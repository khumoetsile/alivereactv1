import React from 'react'
import {ArrowRepeat} from 'react-bootstrap-icons'
 

const Loader = () => {
    return (
        <div className="spinner position-absolute start-50 top-50 translate-middle">
            <ArrowRepeat/>
        </div>
    )
}

export default Loader
