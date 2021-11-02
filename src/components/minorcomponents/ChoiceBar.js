import React from 'react'
import { Link } from 'react-router-dom'
import ButtonPrimary from './ButtonPrimary'

const ChoiceBar = ( props ) => {
    return (
        <div>
            <div className="mb-2 d-flex justify-content-between ">
                <Link to={ props.link1 }><ButtonPrimary text={ props.text1 } /></Link>
                <Link to={ props.link2 }><ButtonPrimary text={ props.text2 } /></Link>
            </div>
        </div>
    )
}

export default ChoiceBar
