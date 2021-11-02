import React from 'react';
import { NavLink } from 'react-router-dom';

const IconLink = ( props ) => {
  return (
    <NavLink className="row flex-d text-dark py-3 px-1" activeClassName="bg-light" to={ props.to }>
      <span className="col-2 offset-1">{ props.icon }</span>{ ' ' }
      <span className="col-8 offset-1">{ props.text }</span>
    </NavLink>
  );
};

export default IconLink;
