import React from 'react';

const ButtonDanger = (props) => {
  return (
    <button
      className={`btn bg-white border-5 border-danger border ${props.className}`}
      style={{width: 'max-content', height: 'max-content'}}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default ButtonDanger;
