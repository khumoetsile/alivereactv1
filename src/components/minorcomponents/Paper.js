import React from 'react';

const Paper = ( props ) => {
  return (
    <div className={ `bg-white min-vh-100 mx-md-3 border border-5 border-gray px-md-5 px-2 py-5 ${ props.className }` }>
      { props.children }
    </div>
  );
};

export default Paper;
