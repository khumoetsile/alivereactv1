import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button
      className={`btn bg-white border-3 btn-light ${props.className}`} 
      style={{width: 'max-content',  height: 'max-content'}}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
