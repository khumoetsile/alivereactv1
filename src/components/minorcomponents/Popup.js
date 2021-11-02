import React, { useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Popup = ( props ) => {
 
 toast(props.text, {position: 'top-center'})
 toast.clearWaitingQueue()
 

  return (
    <div>
      <ToastContainer limit={1}/>
    </div>
  );
};

export default Popup;
