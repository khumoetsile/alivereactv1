import React from 'react';

const ButtonPrimary = (props) => {
  return (
    <button
      className={`btn btn-primary ${props.className}`}
      style={{width: 'max-content', height: 'max-content'}}
      onClick={props.onClick}
      type={props.type}
      title={props.title}
    >
      {props.text}
    </button>
  );
};

export default ButtonPrimary;
