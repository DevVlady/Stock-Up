// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Wrapper from './components/Wrapper/Wrapper';
// import Navbar from "./components/Navbar/navbar"

function App() {
  // const BASE_NAME = "/Stock-Up"
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <Wrapper>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Stock-up" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/nomatch" component={NoMatch} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
