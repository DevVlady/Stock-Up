// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Stock from './pages/Stock';

function App() {
  const BASE_NAME = "/Stock-Up"
  return (
      <Router basename={`${BASE_NAME}`}>
        <div>
          <Navbar/>
        </div>
      </Router>
  );
}

export default App;
