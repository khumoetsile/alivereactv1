import React from 'react';
import './assets/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/maincomponents/SignUp';
import Login from './components/maincomponents/Login';
import Home from './components/maincomponents/Home';
import Main from './components/maincomponents/Protected/Main';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
