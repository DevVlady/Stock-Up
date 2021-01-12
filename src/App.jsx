// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupForm from './components/SignUpForm/Form';
// import Stock from './pages/Stock';

function App() {
  const BASE_NAME = "/Stock-Up"
  return (
      <Router basename={`${BASE_NAME}`}>
        <div>
          <Navbar/>
          <SignupForm/>
        </div>
      </Router>
  );
}

export default App;
