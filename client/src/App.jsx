// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './pages/SignUp';
import SignupForm from './components/SignUpForm/Form';
// import Stock from './pages/Stock';

function App() {
  const BASE_NAME = "/Stock-Up"
  return (
      <Router basename={`${BASE_NAME}`}>
        <div>
          <Route exact path={["/", "/signup"]}>
            <Signup />
          </Route>
          <SignupForm/>
        </div>
      </Router>
  );
}

export default App;
