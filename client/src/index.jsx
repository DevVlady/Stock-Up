import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);