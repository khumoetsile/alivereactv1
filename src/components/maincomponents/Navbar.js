import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () =>
{

  const [ isCollapsed, setIsCollapsed ] = useState( true );

  const toggleNav = () =>
  {
    setIsCollapsed( !isCollapsed );
  };

  return (
    <div className="row bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ALIVE BOTSWANA</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={ toggleNav }
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            style={ isCollapsed ? { display: 'none' } : { display: 'block' } }
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            data-toggle="collapse"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" aria-current="page">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
