import React from 'react';

import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="container-fluid home">
      <Navbar />
      <div className="container mt-5 text-center text-white">
        <div className="row">
          <div className="mt-5">
            <h1 className="h1 mt-5">Alive Botswana</h1>
            <p className="lead">Changing the future of health care</p>
          </div>
          {/* <img
            src="pexels-photo-5452221.jpeg"
            alt=""
            className="img-responsive col-md-6 mt-5"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
