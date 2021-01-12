// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
// import Stock from './pages/Stock';

function App() {
  const BASE_NAME = "/Stock-Up"
  return (
    <Router basename={`${BASE_NAME}`}>
      <div>
        <Switch>
          <Route exact path={["/", "/welcome"]}>
            <Welcome />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/nomatch">
            <NoMatch />
          </Route>
          <SignupForm />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
