import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {UserStateProvider} from './utils/UserContext';


import App from './App';

ReactDOM.render(
 <UserStateProvider>
    <Router>
    <App />
  </Router>
 </UserStateProvider>,
  document.getElementById('root')
);
