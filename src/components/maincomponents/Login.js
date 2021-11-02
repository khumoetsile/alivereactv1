import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../utils/UserContext';
import ErrorBox from '../minorcomponents/ErrorBox';
import {ToastContainer} from 'react-toastify'
import ImageAsset from '../../assets/images/pexels-photo-5452201.jpeg'




const Login = () => {

  const { login, handleChange, AuthStatus, usernameState, passwordState, loginErr: errMessage } = useContext( UserContext )


  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <div className="row">
          <form
            onSubmit={ login }
            className="full-form col-md-5 col-10 mt-4 mx-auto px-md-5 py-5 px-3"
          >
            { errMessage && <ErrorBox text={ errMessage } /> }
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={ handleChange }
                value={ usernameState }
                placeholder="John Doe Mann"
                className="form-control py-3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={ handleChange }
                value={ passwordState }
                placeholder="*******"
                className="form-control py-3"
                required
              />
            </div>
            <button className="btn btn-primary col-12 py-3 mt-1">Login</button>
            <p className="col-12 mt-3 mb-1 text-center">
              Not yet a member? <Link to="/signup">SignUp</Link>
            </p>
          </form>
          <img
            src={ImageAsset}
            alt=""
            height="480px"
            className="col-md-6 img-responsive mt-4"
          />
        </div>
      </div>
      <ToastContainer />
      { AuthStatus && <Redirect to="/main" />}
    </div>
  );
};

export default Login;
