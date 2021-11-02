import React from 'react'
import nothing from '../../assets/images/nothing.svg'


const NothingHere = () => {
  return (
    <div className="row"><img src={ nothing } className="img-responsive col-6 offset-3" style={ { maxHeight: '50vh' } } alt="nothing here" /></div>
  )
}

export default NothingHere