import React, { useContext, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Route, useRouteMatch } from 'react-router-dom';
import Booking from './booking/Booking';
import Document from './document/Document';
import Medical from './medical/Medical';
import Patient from './patient/Patient';
import Resources from './resources/Resources';
import Visit from './visit/Visit';
import Call from './call/Call';
import Paper from '../../minorcomponents/Paper';
import { UserContext } from '../../../utils/UserContext';
import welcome from '../../../assets/images/welcome.svg'
import { PatientProvider } from '../../../utils/PatientContext'
import { BookingProvider } from '../../../utils/BookingContext'


const Main = () => {
  const { miniPlayer } = useContext(UserContext);
  const match = useRouteMatch("/main/call")

  return (

    <div className="container-fluid vh-100 "
      style={{ backgroundColor: '#d0d5da' }}>
      <div className="row">
        <Sidebar />
        <div className="col-md-10 row">
          <div className={miniPlayer ? "col-md-6" : "col-md-12"}>
            <BookingProvider>
              <Route path="/main/booking/" component={Booking} />
            </BookingProvider>
            <Route path="/main/documents/" component={Document} />
            <Route path="/main/medical/" component={Medical} />
            <PatientProvider>
              <Route path="/main/patient/" component={Patient} />
            </PatientProvider>
            <Route path="/main/resources/" component={Resources} />
            <Route path="/main/visit/" component={Visit} />
            <Route path="/main/" exact component={Welcome} />
          </div>

          {(match || miniPlayer) &&
            <div className={miniPlayer ? "col-md-6" : "col-md-12"}>
              <div className={miniPlayer && "sticky-top"}>
                 <Call />
              </div>
            </div>
          }

        </div>
      </div>
     
    </div>
  );
};

const Welcome = () => {
  const { usernameState } = useContext(UserContext);
  return (
    <Paper className="text-center">
      <h1>Welcome to your Dashboard </h1>
      <h2>{usernameState}</h2>
      <p>Use the Sidebar to navigate the application</p>
      <p className="text-muted">Need Assistance? <a href="/help">Click here</a></p>
      <p className="text-muted">Found a bug? <a href="mailto:mimiriath@gmail.com">Email the Developers</a></p>
      <div className="row"><img src={welcome} className="img-responsive col-6 offset-3" style={{ maxHeight: '50vh' }} alt="" /></div>
    </Paper>
  )
}

export default Main;

