import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import ButtonLight from '../../minorcomponents/ButtonLight';
import { useToggle } from '../../../utils/CustomHooks';
import { UserContext } from '../../../utils/UserContext';
import IconLink from '../../minorcomponents/IconLinkGroup';
import { PersonPlus, Clock, ShieldFillPlus, Folder2Open, Briefcase, CalendarPlus, CameraVideo, MenuApp } from 'react-bootstrap-icons'



const Sidebar = () => {

  const [ isHidden, setIsHidden ] = useState( false );

  // useEffect( () => {
  //   if ( window.innerWidth <= 768 )
  //   { setIsHidden( true ); }
  // }, [] );

  // const hideSidebar = () => {
  //   setIsHidden( true );
  // };
  // const showSidebar = () => {
  //   setIsHidden( false );
  // };



  return (
    <React.Fragment>
      <div
        className="col-md-2 bg-white min-vh-100 d-print-none"
        // style={ {
        //   display: isHidden ? 'none' : 'block',
        // } }
      >
        <div className="position-fixed col-md-2 row">
          {/* <button
            className="btn-close pb-2 col-1 offset-11"
            style={ { display: window.innerWidth <= 768 ? 'block' : 'none' } }
            onClick={ hideSidebar }
            aria-label="Close"
          ></button> */}

          <UserInfo />

          <IconLink
            to="/main/patient"
            text="Patient"
            icon={ <PersonPlus /> }
          />
          <IconLink to="/main/booking" text="Booking" icon={ <CalendarPlus /> } />
          <IconLink
            to="/main/resources"
            text="Resources"
            icon={ <Briefcase /> }
          />
          <IconLink
            to="/main/medical"
            text="Medical"
            icon={ <ShieldFillPlus /> }
          />
          <IconLink to="/main/documents" text="Documents" icon={ <Folder2Open /> } />
          <IconLink to="/main/visit" text="Visit" icon={ <Clock /> } />
          <IconLink to="/main/call" text="Start Call" icon={ <CameraVideo /> } />

        </div>
      </div>

      {/* Display open modal on small screens */ }
      {/* <button
        className="btn col-1 text-dark"
        style={ {
          height: 'max-content',
          width: 'max-content',
          display: isHidden ? 'block' : 'none',
        } }
        onClick={ showSidebar }
        aria-label="open"
      >
        <span>SideBar </span>
        <MenuApp />
      </button> */}


    </React.Fragment>
  );
};


const UserInfo = () => {
  const { logout, usernameState, emailState } = useContext( UserContext );
  const [ istoggled, setIsToggled ] = useToggle();


  return (
    <div className="btn-group mb-2">

      <button
        type="button"
        className="btn btn-light">
        <Link to="/main">
          { usernameState }
        </Link>
      </button>


      <button
        type="button"
        className="btn btn-light dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={ setIsToggled }
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>

      <ul
        className="dropdown-menu mt-5"
        style={ istoggled ? { display: 'block' } : { display: 'none' } }>
        <li className="dropdown-item"><ButtonLight text="Logout" onClick={ logout } /></li>
        <li className="dropdown-item">{ emailState }</li>
      </ul>
    </div>
  )
}

export default Sidebar;